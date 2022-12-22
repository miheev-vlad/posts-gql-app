import { gql } from 'apollo-angular';

export const GET_ALL_POSTS = gql`
  query GetAllPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
        user {
          name
        }
        comments {
          data {
            id
          }
        }
      }
      meta {
        totalCount
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
      user {
        name
      }
      comments {
        data {
          id
        }
      }
    }
  }
`;

export const GET_USER_POSTS = gql`
  query GetUserPost($id: ID!) {
    user(id: $id) {
      posts {
        data {
          id
          title
          body
          user {
            name
          }
          comments {
            data {
              id
            }
          }
        }
      }
    }
  }
`;
