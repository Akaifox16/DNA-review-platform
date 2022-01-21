export const POSTS_QUERY = `
query{
  posts {
    id
    slug
    owner {
      name
    }
  }
}
`;

export const REGISTER_QUERY = `
mutation($user: UserCreateInput!){
    register(user: $user) {
        token
        username
    }
}
` ;

export const LOGIN_QUERY = `
mutation($user: UserLoginInput!){
  login(user: $user) {
    token
    username
  }
}
` ;

export const CREATE_POST_QUERY = `
mutation($post: PostCreateInput!){
  createPost(post: $post) {
    slug
    content
  }
}
` ;