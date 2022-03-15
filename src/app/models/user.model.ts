// API

interface IAddressDTO {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
      lat: number;
      lng: number
  }
}

interface ICompanyDTO {
  name: string; catchPhrase: string; bs: string;
}

export interface IUserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressDTO,
  phone: string;
  website: string;
  company: ICompanyDTO;
}

export class UserDOM implements IUserDTO {

  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressDTO;
  phone: string;
  website: string;
  company: ICompanyDTO;

  // CUSTOM
  icon: string = '152854';
  routerLink: string[] = ['/', 'users'];

  constructor(data: IUserDTO) {
      Object.entries(data).forEach((property: [string, any]) => {
          this[property[0]] = property[1];
      });

      this.routerLink.concat([data.id.toString()]);
  }

}
