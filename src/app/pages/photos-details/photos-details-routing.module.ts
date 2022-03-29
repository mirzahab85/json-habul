import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosDetailsComponent } from './photos-details.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosDetailsComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosDetailsRoutingModule { }
