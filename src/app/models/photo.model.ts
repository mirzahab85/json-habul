export interface IPhotoDTO {
  albumId: number,
  id: number;
  title: string,
  url: string,
  thumbnailUrl: string;
}

export class PhotoDOM implements IPhotoDTO {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;


constructor(data: IPhotoDTO) {

  Object.entries(data).forEach((property: [string, unknown], index: number) => {
    console.log(index);
    console.log(property[0]);
    console.log(property[1]);
    this[property[0]] = property[1];
  })
}

}
