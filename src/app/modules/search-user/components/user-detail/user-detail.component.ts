import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
// services
import { UserSharedDataService } from 'src/app/modules/search-user/services/user-shared-data.service';
// model
import User from 'src/app/modules/search-user/models/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userData: User;
  userNotFound: boolean;
  loadingUserData = false;
  showListType: string;

  cols = {
    followers: [
      { headerName: 'Name', field: 'avatar_url', sortable: true, filter: true, cellRenderer: this.customCellRendererFunc },
      { headerName: 'Name', field: 'login', sortable: true, filter: true },
    ],
    following: [
      { headerName: 'Name', field: 'avatar_url', sortable: true, filter: true, cellRenderer: this.customCellRendererFunc },
      { headerName: 'Name', field: 'login', sortable: true, filter: true },
    ],
    repos: [
      { headerName: 'Name', field: 'name', sortable: true, filter: true },
      { headerName: 'Stars', field: 'stargazers_count', valueFormatter: this.stargazersFormatter, sortable: true, filter: true },
      { headerName: 'Forks', field: 'forks', sortable: true, filter: true },
      { headerName: 'Última Atualização', field: 'updated_at', valueFormatter: this.dateFormatter, sortable: true, filter: true },
    ],
  };

  public localeText = {
    noRowsToShow: 'Nenhum dado encontrado',
  };


  rowData: any;

  constructor(private userSharedDataService: UserSharedDataService, private http: HttpClient) { }

  ngOnInit(): void {

    this.userSharedDataService.loadingUserDataSubscriber.subscribe((status: boolean) => {
      this.loadingUserData = status;
    });

    this.userSharedDataService.userDataSubscriber.subscribe((data: User & HttpErrorResponse) => {
      if (!data.error) {
        this.userNotFound = false;
        this.userData = data;
        this.rowData = undefined;
      } else {
        this.userData = undefined;
        this.rowData = undefined;
        this.userNotFound = true;
      }
    });

  }

  public changeListData(value: string): void {
    this.showListType = value;
    this.rowData = this.http.get(`https://api.github.com/users/${this.userData.login}/${value}`);
  }

  private customCellRendererFunc(params): string {
    return `<img src="${params.value}" style="width: 30%;border-radius: 50px;"/>`;
  }

  private dateFormatter(params) {
    return new DatePipe('pt').transform(params.value, 'short');
  }

  private stargazersFormatter(params) {
    return params.value > 1000 ? (params.value / 1000).toFixed(0) + 'k' : params.value;
  }

}
