

// ANGULAR
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// APP
import { HomePageComponent } from './home-page/home-page.component';




const routes: Routes = [

  {
    path: '',
    // importovana komponent iz home module
    component: HomePageComponent,
    children: [
      {
        path: 'Home',
        // deklarisana u app modulu.
        component: HomePageComponent
      }
    ],
    data: { label: 'Comments' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
