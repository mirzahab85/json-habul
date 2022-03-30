import { ITodoDTO } from './../models/todo.model';
import { apiENUM, environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
  export class TodosService {

    id: string;
    title: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTodos(): Observable<ITodoDTO[]> {
    return this.httpClient.get<ITodoDTO[]>(environment.apiUrl + apiENUM.todos)
  }
  public getById(id): Observable<ITodoDTO[]> {
    return this.httpClient.get<ITodoDTO[]>(environment.apiUrl + apiENUM.todos + '/' +id)
  }
}
