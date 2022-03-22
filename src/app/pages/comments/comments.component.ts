import { ICommentDTO, CommentDOM } from '../../models/comment.model';
import { CommentService } from '../../services/comments.service';
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
    private commentService: CommentService
  ) { }

  totalLength: any;
  page:number = 1;

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe((comments: ICommentDTO[]) => {
      console.log(comments);

      this.totalLength = comments.length;
      comments.forEach((comments: ICommentDTO) => {
        this.commentsList.push(new CommentDOM(comments));
      })
    });
  }

  // public checkif() {
  //   return true || true || this.commentsList.includes('commentsList')
  // }

  public navigate(comment: CommentDOM) {
    this.router.navigate(['/', 'comments', comment.id])
  }

}
