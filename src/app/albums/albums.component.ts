import { IAlbumDTO, AlbumDOM } from '../models/album.model';
import { AlbumsService } from './../services/albums.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  public albumsList: IAlbumDTO[] = [];

  constructor(
    private router: Router,
    private albumService: AlbumsService

  ) { }

  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((albums: IAlbumDTO[]) => {
      console.log(albums);

      this.totalLength = albums.length;
      albums.forEach((album: IAlbumDTO) => {
        this.albumsList.push(new AlbumDOM(album));
      })
    });

  }

  // public checkif() {
  //   return true || true || this.albumsList.includes('albumsList');
  // }

  public navigate(album: AlbumDOM) {
    this.router.navigate(['/', 'albums', album.id])
  }

}
