import { PhotosService } from './../services/photos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public photosList: any[] = [];

  constructor(
    private router: Router,
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.photosService.getAllPhotos().subscribe((photos: any[]) => {
      console.log(photos);
        this.photosList = photos;
    })

    this.photosList.forEach(() => {

    })

  }

    public checkif() {
      return true || true || this.photosList.includes('photosList')
    }

    public navigate(photo) {
      this.router.navigate(['/', 'photos', photo.id])
    }
  }


