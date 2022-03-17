import { TodosService } from './../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todosList: any[] = [];

  constructor(
    private todoService: TodosService
  ) { }


  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((todos: any[]) => {
      console.log(todos);
      this.todosList = todos;
    });

    this.todosList.forEach(() => {

    })
  }

}
