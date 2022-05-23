import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UserRoutingModule } from './user-routing.module';
import {UserService} from "./services/user.service";
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UsersResolver} from "./services/users.resolver";
import {UserResolver} from "./services/user.resolver";


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [
    UserService,
    UsersResolver,
    UserResolver
  ]
})
export class UserModule { }
