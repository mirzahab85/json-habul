import { CommentsService } from './../services/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public commentsList: any[] = [];

  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.commentsService.getAllComments().subscribe((comment: any[]) => {
      console.log(comment);
      this.commentsList = comment;
    })
  }

}
