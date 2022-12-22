import { Component, Input } from '@angular/core';
import { Post } from 'src/__generated__/resolvers-types';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('post') postProps: Post;
}
