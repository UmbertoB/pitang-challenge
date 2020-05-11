import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import User from '../models/User';

@Injectable()
export class UserSharedDataService {

    public readonly userDataSubscriber = new Subject<User | HttpErrorResponse>();
    public readonly loadingUserDataSubscriber = new Subject<boolean>();

    constructor() {}

    public changeUserDetail(newData: User | HttpErrorResponse) {
      this.userDataSubscriber.next(newData);
    }

    public updateLoadingUserDataStatus(status: boolean) {
        this.loadingUserDataSubscriber.next(status);
    }

}
