export const HOMEPAGE_QUERY = `
query{
	posts {
		id
		slug
		tags
		owner {
		name
		}
	}
	communities{
		id
		name
	}
	ranking{
		id
		name
	}
}
`;

export const POSTS_QUERY = `
query{
	posts {
		id
		slug
		tags
		owner {
		name
		}
	}
}
`

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
		id
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
		tags
	}
}
`;

export const CREATE_COMMENT_QUERY = `
mutation($comment: CommentCreateInput!){
	createComment(comment: $comment){
		id
		owner{
			name
		}
		content
	}
}
`;

export const COMMUNITY_POST_QUERY = `
query($slug: String!){
	commuPosts(slug: $slug){
		id
		owner{
			name
		}
		content
		tags
	}
}
`;
