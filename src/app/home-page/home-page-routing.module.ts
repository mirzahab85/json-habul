import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // EXPORTS - sad je kao export zato sto je napisana kao layout.
  // layout je export koji app module treba.
  // a page enkapsuliras u rutu
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
