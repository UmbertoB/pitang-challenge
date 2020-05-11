import { Component, OnInit } from '@angular/core';
import { UserSharedDataService } from '../../services/user-shared-data.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import User from '../../models/User';

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
      {headerName: 'Name', field: 'login', sortable: true, filter: true},
    ],
    following: [
      {headerName: 'Name', field: 'login', sortable: true, filter: true},
    ],
    repos: [
      {headerName: 'Name', field: 'name', sortable: true, filter: true},
      {headerName: 'Stars', field: 'stargazers_count', sortable: true, filter: true},
      {headerName: 'Forks', field: 'forks', sortable: true, filter: true}
    ],
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

}
