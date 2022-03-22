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
// import { PhotosComponent } from './photos/photos.component';
// import { TodosComponent } from './todos/todos.component';
// import { AlbumsComponent } from './albums/albums.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    // deklarisana u app modulu.
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    // importovana komponent iz home module
    component: HomePageComponent,
    // veza && - oba mora biti true
    canActivate: [AuthGuard],
    children: [
      {
        path: 'comments',
        // deklarisana u app modulu.
        loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)
      },
      {
        path: 'comments/:commentId',
        // deklarisana u app modulu.
        component: CommentsDetailsComponent,
      },
      {
        path: 'albums',
        // deklarisana u app modulu.
        loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)
      },
      {
        path: 'albums/:albumId',
        // deklarisana u app modulu.
        component: AlbumsDetailsComponent,
      },
      { path: 'photos',
        // deklarisana u app modulu.
        loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
      },
      { path: 'photos/:photoId',
        // deklarisana u app modulu.
        component: PhotosDetailsComponent,
      },
      {
        path: 'todos',
        // deklarisana u app modulu.
        loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
      },
      {
        path: 'todos/:todosId',
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
