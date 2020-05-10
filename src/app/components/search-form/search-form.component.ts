import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GithubApiService } from 'src/app/common/services/github/github-api.service';
import { DataPersistenceService } from 'src/app/common/services/data-persistence/data-persistence.service';
import { RecentSearchStorage, DataPersistenceKeys } from 'src/app/common/services/data-persistence/data-persistence.types';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchCtrl = new FormControl('', Validators.required);
  recentSearches: RecentSearchStorage[];

  constructor(
    private githubApiService: GithubApiService,
    private recentSearchesDPS: DataPersistenceService<RecentSearchStorage>
  ) { }

  ngOnInit(): void {
    this.updateRecentSearchesList();
  }

  public searchUser() {
    if (this.searchCtrl.valid) {
      if (this.recentSearchesDPS.itemExistsInStorage(DataPersistenceKeys.RECENT_SEARCHES, 'searchTerm', this.searchCtrl.value)) {
        this.recentSearchesDPS.update(DataPersistenceKeys.RECENT_SEARCHES, { timestamp: new Date(), searchTerm: this.searchCtrl.value }, 'searchTerm');
      } else {
        this.recentSearchesDPS.create(DataPersistenceKeys.RECENT_SEARCHES, { timestamp: new Date(), searchTerm: this.searchCtrl.value });
      }

      this.updateRecentSearchesList();
    } else {
      alert('preencha o input');
    }
  }

  private updateRecentSearchesList() {
    this.recentSearches = this.recentSearchesDPS.read(DataPersistenceKeys.RECENT_SEARCHES) || [];
  }

}
