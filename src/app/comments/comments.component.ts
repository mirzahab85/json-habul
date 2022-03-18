import { CommentsService } from './../services/comments.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public commentsList: any[] = [];

  constructor(
    private router: Router,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.commentsService.getAllComments().subscribe((comment: any[]) => {
      console.log(comment);
      this.commentsList = comment;

    });

    this.commentsList.forEach(() => {

    })
  }

  public checkif() {
    return true || true || this.commentsList.includes('commentsList')
  }

  public navigate(comment: any) {
    this.router.navigate(['/', 'comments', comment.id])
  }

}
