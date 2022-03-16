// ANGULAR
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// APP
import { HomePageComponent } from './home-page/home-page.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [

  {
    path: '',
    // importovana komponent iz home module
    component: HomePageComponent,
    children: [
      {
        path: 'comments',
        // deklarisana u app modulu.
        component: CommentsComponent,
      },
      {
        path: 'albums',
        // deklarisana u app modulu.
        component: AlbumsComponent,
      },
      { path: 'photos',
        // deklarisana u app modulu.
        component: PhotosComponent,
      },
      {
        path: 'todos',
        // deklarisana u app modulu.
        component: TodosComponent
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
