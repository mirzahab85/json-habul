import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.scss']
})
export class PhotosDetailsComponent implements OnInit {
  public photoId: string;
  public photoTitle: string;
  public photoDTO: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotosService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['photoId']) {
        this.photoId = params['photoId'];
      }
      if(params['photoTitle']) {
        this.photoId = params['photo'];
      }
      console.log(params);
    })

    this.activatedRoute.queryParams.subscribe((qParams: Params) => {
      if(qParams['photoTitle']) {
        this.photoTitle = qParams['photoTitle'];
      }
    });

    this.photoService.getById(this.photoId).subscribe((photoResp) => {

      this.photoDTO = photoResp
})
  }

}
