import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosDetailsRoutingModule } from './photos-details-routing.module';
import { PhotosDetailsComponent } from './photos-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PhotosDetailsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    PhotosDetailsRoutingModule
  ]
})
export class PhotosDetailsModule { }
