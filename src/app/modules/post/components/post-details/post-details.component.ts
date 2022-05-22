import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services/post.service";
import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private activateRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      this.postService.getById(id).subscribe(value => this.post = value);
    })
  }

}
