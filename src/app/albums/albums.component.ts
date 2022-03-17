import { AlbumsService } from './../services/albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  public albumsList: any[] = [];

  constructor(

    private albumService: AlbumsService

  ) { }

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((albums: any[]) => {
      console.log(albums);
      this.albumsList = albums;
    });
  }

}
