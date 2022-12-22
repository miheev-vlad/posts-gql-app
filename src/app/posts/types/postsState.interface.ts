import { Post } from 'src/__generated__/resolvers-types';

export interface PostsStateInterface {
  posts: Post[];
  isLoading: boolean;
  backendError: any | null;
}
