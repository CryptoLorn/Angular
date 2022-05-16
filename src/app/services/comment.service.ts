import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../interfaces/IComment";
import {urls} from "../configs/urls";
import {ICommentDetails} from "../interfaces/ICommentDetails";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments);
  }

  getComment(id: number):Observable<ICommentDetails> {
    return this.httpClient.get<ICommentDetails>(urls.comments + '/' + id);
  }
}
