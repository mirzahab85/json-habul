import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosDetailsComponent } from './todos-details.component';


const routes: Routes = [
  {
    path: '',
    component: TodosDetailsComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosDetailsRoutingModule { }
