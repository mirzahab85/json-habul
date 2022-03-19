import { apiENUM, environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class PhotosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllPhotos(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + apiENUM.photos)
  }
  public getById(id): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + apiENUM.photos + '/' +id);
  }
}
