import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../interfaces/user.interface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(private activateRoute: ActivatedRoute, private userServices: UserService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      this.userServices.getById(id).subscribe(value => this.user = value);
    })
  }

}
