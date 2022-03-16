export interface IPhotoDTO {
  albumId: number,
  id: number;
  title: string,
  url: string,
  thumbnailUrl: string;
}

export class PhotoDOM implements IPhotoDTO {
  user: {id: string, name: string};
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;


constructor() {

}

}
