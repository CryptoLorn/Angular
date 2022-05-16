import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../interfaces/IUserDetails";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.userDetails = data;
    })
  }

}
