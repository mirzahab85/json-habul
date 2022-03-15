import { apiENUM, environment } from 'src/environments/environment';

// ANGULAR
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// API
import { IUserDTO } from '../models/user.model';


@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllUsers(): Observable<IUserDTO[]> {
    return this.httpClient.get<IUserDTO[]>(environment.apiUrl + apiENUM.users)
  }
}
