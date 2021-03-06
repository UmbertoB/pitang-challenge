import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from 'src/app/modules/search-user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly GITHUB_API = 'https://api.github.com';
  private readonly GITHUB_TRENDING_API = 'https://ghapi.huchen.dev';

  constructor(private http: HttpClient) { }

  public getUser(userName: string): Observable<User> {
    return new Observable((observer) => {
      this.http.get<User>(`${this.GITHUB_API}/users/${userName}`).subscribe(
        (data) => observer.next(data),
        (error: HttpErrorResponse) => observer.error(error)
      );
    });
  }

  public getTrends(entity: string, filters): Observable<any> {

    return new Observable((observer) => {
      this.http.get<any>(`${this.GITHUB_TRENDING_API}/${entity}`,
      {
        params: {
          ...filters,
        },
      }).subscribe(
        (data) => observer.next(data),
        (error: HttpErrorResponse) => observer.error(error)
      );
    });
  }

}
