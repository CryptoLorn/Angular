import {IComment} from "./IComment";

export interface ICommentDetails extends IComment {
  postId: number;
  email: string;
  body: string;
}
