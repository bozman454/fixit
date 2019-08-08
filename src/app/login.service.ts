import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:6969/dbapi/v1/fixitlogin';

  constructor(private HttpClient: HttpClient) { }

  validate(credentials: any){
    return this.HttpClient.post<any>(this.url, credentials);
  }
}
