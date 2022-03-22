// ANGULAR imports - REGISTRUJ OD CEGA TI APP ZAVISI NA OVO LEVELU
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';

// ANGULAR MATERIAL imports - REGISTRUJ OD CEGA TI APP ZAVISI NA OVO LEVELU
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';

// APP
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// SERVICES provided na ovom levelu.
import { UserService } from './services/user.service';
import { LayoutModule } from './layout/layout.module';

// MODULE imports
import { HomePageModule } from './home-page/home-page.module';
import { AlbumsService } from './services/albums.service';
import { CommentService } from './services/comments.service';
import { PhotosService } from './services/photos.service';
import { TodosService } from './services/todos.service';
import { PostComponent } from './post/post.component';
import { CommentsDetailsComponent } from './pages/comments-details/comments-details.component';
import { AlbumsDetailsComponent } from './pages/albums-details/albums-details.component';
import { PhotosDetailsComponent } from './pages/photos-details/photos-details.component';
import { TodosDetailsComponent } from './pages/todos-details/todos-details.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { PhotosRoutingModule } from './pages/photos/photos-routing.module';
import { CommentsRoutingModule } from './pages/comments/comments-routing.module';
import { TodosRoutingModule } from './pages/todos/todos-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsDetailsComponent,
    AlbumsDetailsComponent,
    PhotosDetailsComponent,
    TodosDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    LayoutModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HomePageModule,
    AppRoutingModule,
    PhotosRoutingModule,
    CommentsRoutingModule,
    TodosRoutingModule,
  ],
  providers: [
    UserService,
    CommentService,
    AlbumsService,
    PhotosService,
    TodosService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
