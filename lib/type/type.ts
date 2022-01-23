export type Post = {
    id: string
    slug: string
    owner: {
        name: string
    }
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
        }
    }
}