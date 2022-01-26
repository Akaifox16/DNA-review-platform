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

export const USER_POSTS_QUERY = `
query{
	userPosts{
		slug
		id
	}
}
`

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

export const POST_BY_ID_QUERY = `
query($slug: String!){
	post(slug: $slug){
		owner{
			name
		}
		content
		comments{
			owner{
				id
				name
			}
			content
		}
		tags{
			id
			name
		}
	}
}
`;