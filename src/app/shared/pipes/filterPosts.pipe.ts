import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/__generated__/resolvers-types';

@Pipe({
  name: 'filterPosts',
})
export class FilterPostsPipe implements PipeTransform {
  transform(
    posts: Post[],
    searchTitleStr: string = '',
    commentAmount: string = 'medium'
  ): Post[] {
    let commentAmountNumber;

    switch (commentAmount) {
      case 'medium':
        commentAmountNumber = 1;
        break;
      case 'min':
        commentAmountNumber = 0;
        break;
      case 'max':
        commentAmountNumber = 20;
        break;
    }

    if (!searchTitleStr && !searchTitleStr.trim()) {
      return posts.filter(item =>
        commentAmount === 'min'
          ? item.comments.data.length === 0
          : item.comments.data.length > commentAmountNumber
      );
    }

    return posts.filter(
      item =>
        item.title.toLowerCase().includes(searchTitleStr.toLowerCase()) &&
        (commentAmount === 'min'
          ? item.comments.data.length === 0
          : item.comments.data.length > commentAmountNumber)
    );
  }
}
