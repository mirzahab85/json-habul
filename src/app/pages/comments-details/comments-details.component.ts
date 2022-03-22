import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router} from '@angular/router';
import { CommentService } from '../../services/comments.service';


@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.scss']
})
export class CommentsDetailsComponent implements OnInit {

  public commentId: string;
  public commentName: string;
  public commentDTO: any;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private commentService: CommentService,
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if(params['commentId']) {
        this.commentId = params['commentId']
      }
      if(params['commentName']) {
        this.commentId = params['comment']
      }
      console.log(params);
    })

    this.activateRoute.queryParams.subscribe((qParams: Params) => {
      if(qParams['commentName']) {
        this.commentName = qParams['commentName'];
      }
    });

    this.commentService.getById(this.commentId).subscribe((commentResp) => {

      this.commentDTO = commentResp

})
  }

}
