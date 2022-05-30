import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUSer} from "../interfaces/user.interface";
import {urls} from "../configs/urls";
import {IToken} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenKey = 'access';

  constructor(private httpClient: HttpClient) { }

  register(user: IUSer): Observable<IUSer> {
    return this.httpClient.post<IUSer>(urls.users, user);
  }

  login(user: IUSer): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user);
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access);
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }

  isAuthorizationUser(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }
}
