import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../interfaces/comment.interface";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment;

  constructor(private activateRoute: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      this.commentService.getById(id).subscribe(value => this.comment = value);
    })
  }

}
