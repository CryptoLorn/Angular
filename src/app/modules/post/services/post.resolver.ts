import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IPost} from "../interfaces/post.interface";
import {PostService} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    let {id} = route.params;
    return this.postService.getById(id);
  }
}
