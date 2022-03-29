import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosDetailsRoutingModule } from './todos-details-routing.module';
import { TodosDetailsComponent } from './todos-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    TodosDetailsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TodosDetailsRoutingModule
  ]
})
export class TodosDetailsModule { }
