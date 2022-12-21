import { Post } from './__generated__/resolvers-types';

export interface MyContext {
  dataSources: {
    posts: Post[];
  };
}
