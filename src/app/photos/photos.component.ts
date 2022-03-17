import { PhotosService } from './../services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public photosList: any[] = [];

  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.photosService.getAllPhotos().subscribe((photos: any[]) => {
      console.log(photos);
        this.photosList = photos;
    })
  }

}
