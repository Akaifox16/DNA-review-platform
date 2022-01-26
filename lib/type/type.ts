export type Post = {
    id: string
    slug: string
    owner: Author
    content: string
    comments: Comment[]
    tags: Tag[]
}

export type Token = {
    token: string
    username: string
}

export type Response = {
    data:{
        data: {
            register: Token
            login: Token
            userPosts: Post[]
            posts: Post[]
            post: Post
        }
    }
}

export type Comment = {
    id: string
    content: string
    owner: Author
}

export type Tag = {
    id: string
    name: string
}

export type Author = {
    id: string
    name: string
}