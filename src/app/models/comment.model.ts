export interface ICommentDTO {
  id: number;
  name: string,
  thumbnailUrl: string;
}

export class CommentDOM implements ICommentDTO {
  id: number = 1;
  name: string;
  thumbnailUrl: string;

  constructor(data: ICommentDTO) {

    Object.entries(data).forEach((property: [string, unknown], index: number) => {
      console.log(index);
      console.log(property[0]);
      console.log(property[1]);
      this[property[0]] = property[1];
    })
  }



}

