import { TodosDetailsComponent } from './todos-details/todos-details.component';
import { PhotosDetailsComponent } from './photos-details/photos-details.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';
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
        path: 'comments/:commentId',
        // deklarisana u app modulu.
        component: CommentsDetailsComponent,
      },
      {
        path: 'albums',
        // deklarisana u app modulu.
        component: AlbumsComponent,
      },
      {
        path: 'albums/:albumId',
        // deklarisana u app modulu.
        component: AlbumsDetailsComponent,
      },
      { path: 'photos',
        // deklarisana u app modulu.
        component: PhotosComponent,
      },
      { path: 'photos/:photoId',
        // deklarisana u app modulu.
        component: PhotosDetailsComponent,
      },
      {
        path: 'todos',
        // deklarisana u app modulu.
        component: TodosComponent,
      },
      {
        path: 'todos/:todoId',
        // deklarisana u app modulu.
        component: TodosDetailsComponent
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
