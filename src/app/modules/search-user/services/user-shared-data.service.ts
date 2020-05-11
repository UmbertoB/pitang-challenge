import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import User from '../models/User';

@Injectable()
export class UserSharedDataService {

    public readonly userDataSubscriber = new Subject<User | HttpErrorResponse>();

    constructor() {}

    public changeUserDetail(newData: User | HttpErrorResponse) {
      this.userDataSubscriber.next(newData);
    }

}
