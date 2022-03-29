// ANGULAR
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// APP
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { ENUM_ZA_RUTE_KAKO_SE_ZOVU_SAMO_DA_NIJE_NEKI_STRING_KOJI_MORAM_PAMTITI } from './config';

const routes: Routes = [
  {
    path: ENUM_ZA_RUTE_KAKO_SE_ZOVU_SAMO_DA_NIJE_NEKI_STRING_KOJI_MORAM_PAMTITI.LOGIN,
    // deklarisana u app modulu.
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    // importovana komponent iz home module
    component: LayoutComponent,
    // veza && - oba mora biti true
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        // deklarisana u app modulu.
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'comments',
        // deklarisana u app modulu.
        loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsModule)
      },
      {
        path: 'comments/:commentId',
        // deklarisana u app modulu.
        loadChildren: () => import('./pages/comments-details/comments-details.module').then(m => m.CommentsDetailsModule)
      },
      {
        path: 'albums',
        // deklarisana u app modulu.
        loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsModule)
      },
      {
        path: 'albums/:albumId',
        // deklarisana u app modulu.
        loadChildren: () => import('./pages/albums-details/albums-details.module').then(m => m.AlbumsDetailsModule )
      },
      { path: 'photos',
        // deklarisana u app modulu.
        loadChildren: () => import('./pages/photos/photos.module').then(m => m.PhotosModule)
      },
      { path: 'photos/:photoId',
        // deklarisana u app modulu.
        loadChildren: () => import('./pages/photos-details/photos-details.module').then(m => m.PhotosDetailsModule)
      },
      {
        path: 'todos',
        // deklarisana u app modulu.
        loadChildren: () => import('./pages/todos/todos.module').then(m => m.TodosModule)
      },
      {
        path: 'todos/:todosId',
        // deklarisana u app modulu.
        loadChildren: () => import('./pages/todos-details/todos-details.module').then(m => m.TodosDetailsModule)
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
