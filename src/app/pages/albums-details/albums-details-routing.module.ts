import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsDetailsComponent } from './albums-details.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsDetailsComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsDetailsRoutingModule { }
