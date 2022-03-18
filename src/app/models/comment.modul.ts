

export interface ICommentDTO {
  id: string;
  name: string,
  thumbnailUrl: string;
}

export class CommentDOM implements ICommentDTO {
  user: {id: string, name: string};
  id: string;
  name: string;
  thumbnailUrl: string;

  constructor() {

  }



}

