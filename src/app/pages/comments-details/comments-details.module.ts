import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsDetailsRoutingModule } from './comments-details-routing.module';
import { CommentsDetailsComponent } from './comments-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CommentsDetailsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommentsDetailsRoutingModule
  ]
})
export class CommentsDetailsModule { }
