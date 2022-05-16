import {IUser} from "./IUser";
import {IAddress} from "./IAddress";

export interface IUserDetails extends IUser {
  username: string;
  email: string;
  address: IAddress;
}
