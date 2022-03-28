import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsDetailsRoutingModule } from './albums-details-routing.module';
import { AlbumsDetailsComponent } from './albums-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AlbumsDetailsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AlbumsDetailsRoutingModule
  ]
})
export class AlbumsDetailsModule { }
