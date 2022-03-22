// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// APP

import { LayoutComponent } from './layout.component';


// ANGULAR MATERIAL imports - REGISTRUJ OD CEGA TI APP ZAVISI NA OVO LEVELU
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
