import { Dispatch, SetStateAction } from "react"
import { Tag } from "react-tag-input"
import { Comment, Dislike, Like } from "."

export type HomepageProps = {
    postsDetail: PostCardListProps
    commuDetail: CardProps[]
    ranks: CardProps[]
}

export type PostCardListProps = {
    postlist: PostCardProps[]
}

export type UserDropdownProps = {
    username: String
}

export type OverrideSectionProps ={
    cardlist: CardProps[]
}

export type PostCardProps = {
    id: string
    title: string
    tags: string[]
    owner: string
}

export type SideSectionProps = {
    name: String
    cardlist: CardProps[]
}

export type CardProps = {
    id: String
    name: String
}

export type SlugProps = {
    id: string
    author: string
    content: string
    comments: Comment[]
    tags: Tag[]
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
    pid: string
    comments: Comment[]
}

export type TagsInputProps = {
    tags: Tag[]
    setTags: Dispatch<SetStateAction<Tag[]>>
}

export type LikeDislikeProps = {
    likes: Like[]
    dislikes: Dislike[]
}