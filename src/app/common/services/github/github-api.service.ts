import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly GITHUB_API = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  public getUser(userName: string): Observable<any> {
    return new Observable((observer) => {
      this.http.get<any>(`${this.GITHUB_API}/users/${userName}`, { headers: { Authorization: 'Authorization: token 6deef576dda057412108a448b58eb029b00e2cad' }}).subscribe(
        (data) => observer.next(data),
        (error: HttpErrorResponse) => observer.error(error)
      );
    });
  }

}
