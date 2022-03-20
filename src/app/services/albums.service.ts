import { IAlbumDTO } from '../models/album.model';
import { apiENUM, environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()


export class AlbumsService {
  id: string;
  title: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllAlbums(): Observable<IAlbumDTO[]> {
    return this.httpClient.get<IAlbumDTO[]>(environment.apiUrl + apiENUM.albums);
  }

  public getById(id): Observable<IAlbumDTO[]> {
    return this.httpClient.get<IAlbumDTO[]>(environment.apiUrl + apiENUM.albums + '/' + id);
  }
}
