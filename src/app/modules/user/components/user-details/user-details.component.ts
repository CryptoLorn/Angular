import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      this.activateRoute.data.subscribe(({userData}) => this.user = userData);
    })
  }
}
