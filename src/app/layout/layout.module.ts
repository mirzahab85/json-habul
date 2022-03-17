// ANGULAR
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// APP
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
