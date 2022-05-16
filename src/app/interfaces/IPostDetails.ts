import {IPost} from "./IPost";

export interface IPostDetails extends IPost {
  userId: number;
  body: string;
}
