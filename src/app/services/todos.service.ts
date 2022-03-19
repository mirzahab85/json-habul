import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiENUM, environment } from 'src/environments/environment';

@Injectable()
  export class TodosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTodos(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + apiENUM.todos)
  }
  public getById(id): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + apiENUM.todos + '/' +id)
  }
}
