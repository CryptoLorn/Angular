import {IGeo} from "./geo.interface";

export interface IAddress extends IGeo {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
