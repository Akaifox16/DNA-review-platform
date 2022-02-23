export type Post = {
    id: string
    slug: string
    owner: Author
    content: string
    comments: Comment[]
    tags: string[]
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
            communities: Community[]
            users: User[]
            userById: User
            ranking: {name: String}[]
            commuPosts: Post[]
            commuComment: Comment[]
        }
    }
}

export type User = {
    id : string
    name: string
    email: string
    bio: string
    contact: string
    likes: number
    dislikes: number
}

export type Comment = {
    id: string
    content: string
    owner: Author
}

export type Author = {
    id: string
    name: string
}

export type PostInput = {
    slug:string
    tags: string[]
    content:string
}

export type CommentCreateInput = {
    belongsTo: string
    content: string
}

export type Tag = {
    id: string;
    text: string;
}

export type Community = {
    id : string;
    name : string;
    posts : Post[];
}

export type ownerLike = {
    name: string
}

export type Like = ownerLike

export type Dislike = ownerLike