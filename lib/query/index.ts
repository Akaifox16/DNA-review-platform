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

export const COMMUNITIES_QUERY =`
query{
	communities{
		name
	}
}
`
export const ALLUSER_QUERY =`
query{
	ranking{
		name
	}
}
`

export const USER_QUERY =`
query($id: ID!){
	userById(id: $id){
		id
		name
		email
		bio
		contact
		likes
		dislikes
	}
}
`


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
		tags
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

export const EDIT_POST_QUERY = `
mutation($post: PostUpdateInput!, $pid: ID!){
	updatePost(pid: $pid, post: $post){
		slug
	}
}
`

export const POST_BY_ID_QUERY = `
query($slug: String!){
	post(slug: $slug){
		id
		likes{
			owner{
				name
			}
		}
		dislikes{
			owner{
				name
			}
		}
		owner{
			name
		}
		content
		comments{
			id
			owner{
				id
				name
			}
			likes{
				owner{
					name
				}
			}
			dislikes{
				owner{
					name
				}
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
		likes{
			owner{
				name
			}
		}
		dislikes{
			owner{
				name
			}
		}
		content
	}
}
`;

export const COMMUNITY_POST_QUERY = `
query($slug: String!){
	commuPosts(slug: $slug){
		id
		slug
		tags
		owner{
			id
			name
		}
	}
	commuComment(slug: $slug){
		id
    	content
    	owner{
			name
		}
	}
}
`;

export const  LIKE_POST_QUERY =`
mutation($pid: ID!){
	likePost(pid: $pid){
		id
		slug
		dislikes{
			owner{
				name
			}
		}
		likes{
			owner{
				name
			}
		}
		owner{
			name
		}
	}
}
`

export const  UNLIKE_POST_QUERY =`
mutation($pid: ID!){
	unlikePost(pid: $pid){
		id
		slug
		dislikes{
			owner{
				name
			}
		}
		likes{
			owner{
				name
			}
		}
		owner{
			name
		}
	}
}
`

export const  DISLIKE_POST_QUERY =`
mutation($pid: ID!){
	dislikePost(pid: $pid){
		id
		slug
		dislikes{
			owner{
				name
			}
		}
		likes{
			owner{
				name
			}
		}
		owner{
			name
		}
	}
}
`

export const  UNDISLIKE_POST_QUERY =`
mutation($pid: ID!){
	undislikePost(pid: $pid){
		id
		slug
		dislikes{
			owner{
				name
			}
		}
		likes{
			owner{
				name
			}
		}
		owner{
			name
		}
	}
}
`

export const  LIKE_COMMENT_QUERY =`
mutation($cid: ID!){
	likeComment(cid: $cid){
		likes{
			owner{
				name
			}
		}
		dislikes{
			owner{
				name
			}
		}
		content
	}
}
`

export const  UNLIKE_COMMENT_QUERY =`
mutation($cid: ID!){
	unlikeComment(cid: $cid){
		likes{
			owner{
				name
			}
		}
		dislikes{
			owner{
				name
			}
		}
		content
	}
}
`

export const  DISLIKE_COMMENT_QUERY =`
mutation($cid: ID!){
	dislikeComment(cid: $cid){
		dislikes{
			owner{
				name
			}
		}
		likes{
			owner{
				name
			}
		}
		content
	}
}
`

export const  UNDISLIKE_COMMENT_QUERY =`
mutation($cid: ID!){
	undislikeComment(cid: $cid){
		dislikes{
			owner{
				name
			}
		}
		likes{
			owner{
				name
			}
		}
		content
	}
}
`

export const EVALUATE_QUERY =`
mutation{
	evaluateScore{
		name
		likes
		dislikes
	}
}
`