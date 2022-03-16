export interface IAlbumDTO {
  id: string;
  name: string;
  thumbnailUrl: string;
}

export class AlbumDOM implements IAlbumDTO {
  user: {id: string, name: string};
  id: string;
  name: string;
  thumbnailUrl: string;

  constructor() {

  }

}
