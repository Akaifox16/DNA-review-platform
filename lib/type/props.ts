import { Dispatch } from "react"
import { Comment } from "."

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
    author: string
}

export type FloatingInputProps = {
    controlId : string
    label: string
    type: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => any
}

export type MarkdownEditorProps = {
    value: string | undefined
    setValue: Dispatch<string | undefined>
    confirmText: string
    height: number
    onClickSuccess: (e:React.MouseEvent<HTMLButtonElement>) => any
    onClickCancel: (e:React.MouseEvent<HTMLButtonElement>) => any
}

export type CommentSectionProps = {
    comments: Comment[]
}