import { Post } from "."

export type PostsDetailProps = {
    postsDetail : PostCardProps[]
}

export type PostCardProps = {
    id: string
    title: string
    owner: string
}

export type SlugProps = {
    content: string
}

export type FloatingInputProps = {
    controlId : string
    label: string
    type: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => any
}