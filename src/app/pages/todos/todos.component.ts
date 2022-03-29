import { ITodoDTO, TodoDOM } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todosList: any[] = [];


  constructor(
    private router: Router,
    private todosService: TodosService
  ) { }

  totalLength: any;
  page:number = 1;

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe((todos: ITodoDTO[]) => {
      console.log(todos);

      this.totalLength = todos.length;
      todos.forEach((todos: ITodoDTO) => {
        this.todosList.push(new TodoDOM(todos));
      })
    });
  }

  // public checkif() {
  //   return true || true || this.commentsList.includes('commentsList')
  // }

  public navigate(todo: TodoDOM) {
    this.router.navigate(['/', 'todos', todo.id])
  }

}
