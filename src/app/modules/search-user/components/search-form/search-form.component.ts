import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
// components
import { FillSearchInputSnackbar } from 'src/app/common/components/fill-search-input.snackbar';
// services
import { GithubApiService } from 'src/app/common/services/github/github-api.service';
import { UserSharedDataService } from 'src/app/modules/search-user/services/user-shared-data.service';
import { RecentSearchPersistenceService } from 'src/app/modules/search-user/services/recent-search-persistence.service';
// models
import RecentSearchStorage from 'src/app/modules/search-user/models/recent-search-storage.model';
import User from 'src/app/modules/search-user/models/user.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchCtrl = new FormControl('', Validators.required);
  recentSearches: RecentSearchStorage[];
  xpandStatus = false;

  constructor(
    private githubApiService: GithubApiService,
    private recentSearchesPS: RecentSearchPersistenceService,
    private shared: UserSharedDataService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.updateRecentSearchesList();
  }

  public searchUser() {
    const { valid: isInputValid, value: searchedUser } = this.searchCtrl;

    if (isInputValid) {

      const existentRecentSearch = this.recentSearchesPS.recentSearchExists(searchedUser);
      if (existentRecentSearch) {
        this.recentSearchesPS.updateTimestamp(existentRecentSearch);
      } else {
        this.recentSearchesPS.create({ timestamp: new Date(), searchTerm: searchedUser });
      }

      this.updateRecentSearchesList();

      this.shared.updateLoadingUserDataStatus(true);
      this.githubApiService.getUser(searchedUser).subscribe(
        (res: User) => {
          this.shared.updateLoadingUserDataStatus(false);
          this.shared.changeUserDetail(res);

          this.recentSearchesPS.setOriginalRecentSearchData(searchedUser, res.avatar_url, res.login);

          this.updateRecentSearchesList();
        },
        (err: any) => {
          this.shared.updateLoadingUserDataStatus(false);
          return this.shared.changeUserDetail(err);
        },
      );
    } else {
      this.snackBar.openFromComponent(FillSearchInputSnackbar, { duration: 2000 });
    }
  }

  public selectRecentSearch(searchTerm: string) {
    this.searchCtrl.setValue(searchTerm);
    this.searchUser();
  }

  private updateRecentSearchesList() {
    this.recentSearches = this.recentSearchesPS.read() || [];
  }

}
