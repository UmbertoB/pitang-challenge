import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubApiService } from 'src/app/common/services/github/github-api.service';
import { DataPersistenceService } from 'src/app/common/services/data-persistence/data-persistence.service';
import { RecentSearchStorage, DataPersistenceKeys } from 'src/app/common/services/data-persistence/data-persistence.types';
import { UserSharedDataService } from '../../services/user-shared-data.service';
import User from '../../models/User';
import { SnackBarComponent } from 'src/app/common/components/snack-bar.component';
import { RecentSearchPersistenceService } from '../../services/recent-search-persistence.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchCtrl = new FormControl('', Validators.required);
  recentSearches: RecentSearchStorage[];
  xpandStatus: boolean;

  constructor(
    private githubApiService: GithubApiService,
    private recentSearchesPS: RecentSearchPersistenceService,
    private shared: UserSharedDataService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.updateRecentSearchesList();
  }

  public searchUser() {

    const { valid: isInputValid, value: searchedUser } = this.searchCtrl;

    if (isInputValid) {

      const x = this.recentSearchesPS.recentSearchExists(searchedUser);
      if (x) {
        this.recentSearchesPS.updateTimestamp(x);
      } else {
        this.recentSearchesPS.create({ timestamp: new Date(), searchTerm: searchedUser });
      }

      this.updateRecentSearchesList();

      this.shared.updateLoadingUserDataStatus(true);
      this.githubApiService.getUser(searchedUser).subscribe(
        (res: User) => {
          this.shared.updateLoadingUserDataStatus(false);
          this.shared.changeUserDetail(res);

          this.recentSearchesPS.addAvatarToRecentSearch(searchedUser, res.avatar_url);

          this.updateRecentSearchesList();
        },
        (err: any) => {
          this.shared.updateLoadingUserDataStatus(false);
          return this.shared.changeUserDetail(err);
        },
      );
    } else {
      this._snackBar.openFromComponent(SnackBarComponent, { duration: 2000, data: { msg: 'Preencha o campo de busca' } });
    }
  }

  public selectRecentSearch(searchTerm: string) {
    this.searchCtrl.setValue(searchTerm);
    this.xpandStatus = true;
    this.searchUser();
  }

  private updateRecentSearchesList() {
    this.recentSearches = this.recentSearchesPS.read() || [];
  }

}
