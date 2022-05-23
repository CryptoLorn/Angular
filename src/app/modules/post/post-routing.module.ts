import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsResolver} from "./services/posts.resolver";
import {PostResolver} from "./services/post.resolver";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postData: PostsResolver},
    children: [
      {
        path: ':id', component: PostDetailsComponent,
        resolve: {postData: PostResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
