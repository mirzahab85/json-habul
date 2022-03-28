import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsDetailsComponent } from './comments-details.component';

const routes: Routes = [
  {
    path: '',
    component: CommentsDetailsComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsDetailsRoutingModule { }
