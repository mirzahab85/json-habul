import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';

export interface ICredentials {
  password: string;
  username: string;
}
export interface IToken {
  token: string
}

export interface IUserLogin {
  name: string;
  imageUrl: string;
}

@Injectable()
export class AuthService {

  isAuth: boolean = false;
  userLogin: IUserLogin;

  constructor(
    private httpClient: HttpClient
  ) { }

  public loginByPasswordAndUsername(credentials: ICredentials): Observable<IUserLogin> {

    if (credentials.password === 'correct') {
      return this.httpClient.get<IToken>('./assets/token.json')
        .pipe(
          switchMap((token: IToken) => {
            localStorage.setItem('token', token.token)
            return this.httpClient.get<IUserLogin>('./assets/login.json')
          }),
          map((userLogin: IUserLogin) => {
            this.userLogin = userLogin;
            return userLogin;
          })
        )
    } else {
      return of(undefined);
    }

  }

  public loginBy2WayAuth(payload: any) {

  }

}
