import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss']
})
export class AlbumsDetailsComponent implements OnInit {

  public albumId: string;
  public albumTitle: string;
  public albumDTO: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumsService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['albumId']) {
        this.albumId = params['albumId']
      }
      if(params['albumTitle']) {
        this.albumId = params['album']
      }
      console.log(params);
    })

    this.activatedRoute.queryParams.subscribe((qParams: Params) => {
      if(qParams['albumTitle']) {
        this.albumTitle = qParams['albumTitle'];
      }
    });

    this.albumService.getById(this.albumId).subscribe((albumResp) => {

      this.albumDTO = albumResp

})
  }

}
