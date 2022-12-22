import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { RadioInputModule } from '../shared/modules/radio-input/radio-input.module';
import { TextInputModule } from '../shared/modules/text-input/text-input.module';
import { AuthorIdSearchInputComponent } from './components/posts-filter/components/authorId-search-input/authorId-search-input.component';
import { CommentsAmountInputComponent } from './components/posts-filter/components/comments-amount-input/comments-amount-input';
import { TitleSearchInputComponent } from './components/posts-filter/components/title-search-input/title-search-input.component';
import { PostsFilterComponent } from './components/posts-filter/posts-filter.component';
import { PostsLayoutComponent } from './components/posts-layout/posts-layout.component';
import { ArrowRightIconComponent } from './components/posts-list/components/post-card/components/arrow-right-icon/arrow-right-icon.component';
import { PostCardComponent } from './components/posts-list/components/post-card/post-card.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    PaginationModule,
    TextInputModule,
    RadioInputModule,
  ],
  declarations: [
    PostsListComponent,
    PostsLayoutComponent,
    PostsFilterComponent,
    PostCardComponent,
    ArrowRightIconComponent,
    TitleSearchInputComponent,
    AuthorIdSearchInputComponent,
    CommentsAmountInputComponent,
  ],
})
export class PostsModule {}
