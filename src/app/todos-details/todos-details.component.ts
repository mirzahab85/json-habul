import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router  } from '@angular/router';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent implements OnInit {
  public todoId: string;
  public todoTitle: string;
  public todoDTO: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todosService: TodosService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['todoId']) {
        this.todoId = params['todoId'];
      }
      if(params['todosTitle']) {
        this.todoId = params['todo'];
      }
      console.log(params);
    })

    this.activatedRoute.queryParams.subscribe((qParams: Params) => {
      if(qParams['todoTitle']) {
        this.todoTitle = qParams['todoTitle'];
      }
    });

    this.todosService.getById(this.todoId).subscribe((todoResp) => {

      this.todoDTO = todoResp
})
  }

}


