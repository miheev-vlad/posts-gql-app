import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsLayoutComponent } from './components/posts-layout/posts-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PostsLayoutComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
