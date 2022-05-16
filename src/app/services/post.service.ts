import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces/IPost";
import {urls} from "../configs/urls";
import {IPostDetails} from "../interfaces/IPostDetails";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts);
  }

  getPost(id: number): Observable<IPostDetails> {
    return this.httpClient.get<IPostDetails>(urls.posts + '/' + id);
  }

}
