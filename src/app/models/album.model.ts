export interface IAlbumDTO {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export class AlbumDOM implements IAlbumDTO {

  id: number = 11;
  title: string;
  thumbnailUrl: string;

  constructor(data: IAlbumDTO) {
                                  // property[0] id
                                  // property[1] vrijednost
    Object.entries(data).forEach((property: [string, unknown], index: number) => {
      console.log(index);
      console.log(property[0]);
      console.log(property[1]);
      this[property[0]] = property[1];
    })
  }

}
