import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoBackIconComponent } from './components/post-details/components/go-back-icon.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';

@NgModule({
  imports: [CommonModule, PostDetailsRoutingModule],
  declarations: [PostDetailsComponent, GoBackIconComponent],
})
export class PostDetailsModule {}
