import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly GITHUB_API = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  public search(term: string): Observable<any> {

    const params = new HttpParams().set('q', term);

    return new Observable((observer) => {
      this.http.get<any>(`${this.GITHUB_API}/search/users`, { params }).subscribe(
        (data) => observer.next(data),
        (error: HttpErrorResponse) => observer.error(error)
      );
    });
  }

}
