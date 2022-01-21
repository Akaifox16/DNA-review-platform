export type PostsDetailProps = {
    postsDetail : PostCardProps[]
}

export type PostCardProps = {
    id: string
    title: string
    owner: string
}

export type Post = {
    id: string
    slug: string
    owner: {
        name: string
    }
}

export type PostsResponse = {
    data:{
        data: {
            posts: Post[]
        }
    }
}

export type SlugProps = {
    content: string
}