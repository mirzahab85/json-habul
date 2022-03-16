import { apiENUM, environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserDTO } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()

export class PhotosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllUsers(): Observable<IUserDTO[]> {
    return this.httpClient.get<IUserDTO[]>(environment.apiUrl + apiENUM.photos)
  }
}
