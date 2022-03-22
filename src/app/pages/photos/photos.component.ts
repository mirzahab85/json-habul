import { IPhotoDTO, PhotoDOM } from '../../models/photo.model';
import { PhotosService } from '../../services/photos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public photosList: IPhotoDTO[] = [];

  constructor(
    private router: Router,
    private photosService: PhotosService
  ) { }

  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.photosService.getAllPhotos().subscribe((photos: IPhotoDTO[]) => {
      console.log(photos);

        this.totalLength = photos.length;
       photos.forEach((photo: IPhotoDTO) => {
         this.photosList.push(new PhotoDOM(photo));
       })
    });
  }

    // public checkif() {
    //   return true || true || this.photosList.includes('photosList')
    // }

    public navigate(photo: PhotoDOM) {
      this.router.navigate(['/', 'photos', photo.id])
    }
  }


