import { TodosService } from './../services/todos.service';
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
    private todoService: TodosService
  ) { }

  totalLengt: any;
  page: number = 1;

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((todos: any[]) => {
      console.log(todos);
      this.todosList = todos;
      this.totalLengt = todos.length;
    });

    this.todosList.forEach(() => {

    })
  }
    public checkif() {
      return true || true || this.todosList.includes('todosList');
    }

    public navigate(todo) {
      this.router.navigate(['/', 'todos', todo.id])
    }
  }


