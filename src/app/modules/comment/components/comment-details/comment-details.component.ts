import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      this.activateRoute.data.subscribe(({commentData}) => this.comment = commentData);
    })
  }

}
