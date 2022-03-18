import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiENUM, environment } from 'src/environments/environment';

@Injectable()
  export class CommentService {

    id: number
    name: string

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllComments(): Observable<any[]> {
      return this.httpClient.get<any[]>(environment.apiUrl + apiENUM.comments)
  }
  public getById(id): Observable<any[]> {
      return this.httpClient.get<any[]>(environment.apiUrl + apiENUM.comments + '/' +id)
  }
}
