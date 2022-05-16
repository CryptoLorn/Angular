import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentService} from "../../services/comment.service";
import {ICommentDetails} from "../../interfaces/ICommentDetails";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private activateRoute: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      this.commentService.getComment(id).subscribe(value => this.commentDetails = value);
    })
  }

}
