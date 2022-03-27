//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
// APP
import { LayoutComponent } from './layout.component';
import { SidebarModule } from '../sidebar/siderbar.module';


// ANGULAR MATERIAL imports - REGISTRUJ OD CEGA TI APP ZAVISI NA OVO LEVELU
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LayoutComponent,

  ],
  exports: [
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SidebarModule,
    FlexLayoutModule,
    RouterModule

  ]
})
export class LayoutModule {
}
