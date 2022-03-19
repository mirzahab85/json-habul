import { AlbumsService } from './../services/albums.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  public albumsList: any[] = [];

  constructor(
    private router: Router,
    private albumService: AlbumsService

  ) { }

  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((albums: any[]) => {
      console.log(albums);
      this.albumsList = albums;
      this.totalLength = albums.length;
    });

    this.albumsList.forEach(() => {

    })
  }

  public checkif() {
    return true || true || this.albumsList.includes('albumsList');
  }

  public navigate(album: any) {
    this.router.navigate(['/', 'albums', album.id])
  }

}
