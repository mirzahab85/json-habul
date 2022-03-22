export interface ITodoDTO {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoDOM implements ITodoDTO {
  id: number;
  title: string;
  completed: boolean;

constructor(data: ITodoDTO) {

  Object.entries(data).forEach((property: [string, unknown], index: number) => {
    console.log(index);
    console.log(property[0]);
    console.log(property[1]);
    this[property[0]] = property[1];
  })
}

}
