// ANGULAR imports - REGISTRUJ OD CEGA TI APP ZAVISI NA OVO LEVELU
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

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
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PhotosComponent,
    TodosComponent,
    PostComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    LayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HomePageModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
