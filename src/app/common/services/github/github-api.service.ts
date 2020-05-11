import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly GITHUB_API = 'https://api.github.com';
  private readonly GITHUB_TRENDING_API = 'https://ghapi.huchen.dev';

  constructor(private http: HttpClient) { }

  public getUser(userName: string): Observable<any> {
    return new Observable((observer) => {
      this.http.get<any>(`${this.GITHUB_API}/users/${userName}`).subscribe(
        (data) => observer.next(data),
        (error: HttpErrorResponse) => observer.error(error)
      );
    });
  }

  public getBestRepositories(language: string): Observable<any> {

    const q = `language:${language}`;

    return new Observable((observer) => {
      this.http.get<any>(`${this.GITHUB_API}/search/repositories`,
      {
        params: {
          q,
          sort: 'stars',
          order: 'desc',
        },
      }).subscribe(
        (data) => observer.next(data.items),
        (error: HttpErrorResponse) => observer.error(error)
      );
    });
  }

  public getAllGithubAcceptedLanguages(): Observable<any> {
    return new Observable((observer) => {
      this.http.get<any>(`${this.GITHUB_API}/languages`).subscribe(
        (data) => observer.next(data),
        (error: HttpErrorResponse) => observer.error(error)
      );
    });
  }

}
