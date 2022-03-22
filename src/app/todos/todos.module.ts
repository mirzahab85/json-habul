import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
