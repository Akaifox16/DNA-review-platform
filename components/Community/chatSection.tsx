import Link from "next/link";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import { useAuthChecker, useAxios, useCreateComment } from "../../hooks";
import useCreateCommuComment from "../../hooks/Post/Comment/useCreateCommuComment";
import { CREATE_COMMU_CHAT_QUERY } from "../../lib/query";
import { CommentSectionProps, Response } from "../../lib/type";
import MarkdownEditor from "../MarkdownEditor";
import CommentCard from "../Post/CommentSection/CommentCard";
import ChatCard from "./ChatCard";


const ChatSection = ({ comments, pid }:CommentSectionProps ) => {
    const { isLogin, token } = useAuthChecker();
    const [commentList, setComment] = useState(comments);
    const [value, setValue] = useState<string | undefined>('');
    const createComment = useCreateCommuComment();

    return (
        <div>
            <Stack>
            {
                commentList.map( comment => {
                    const { content, owner, id } = comment;
                    return (
                        <div key={id}>
                            <ChatCard
                                owner={owner}
                                content={content}
                            />
                        </div>
                    );
                })
            }
            {
                isLogin && 
                <MarkdownEditor
                    value={ value } height={200}
                    confirmText="Comment"
                    setValue={ setValue }
                    onClickCancel={e => {
                        e.preventDefault();
                        setValue('');
                    }}
                    onClickSuccess={e => {
                        e.preventDefault();
                        useAxios(CREATE_COMMU_CHAT_QUERY ,{comment: { belongsTo: pid,
                            content: value === undefined
                                    ? ''
                                    : value }},
                            token.token )
                        .then(({ data: {data: { createCommuChat }} }:Response) => {
                            const { content, owner: {name} } = createCommuChat;
                            setComment([...commentList, {content, owner: name}]);
                            setValue('');
                        })
                    }}
                />
            }
            { !isLogin && 
            <div>
                <p>If you want to chat, please <Link href='/login'>
                        Login
                    </Link> first</p>
            </div>}
            </Stack>
            
        </div>
    );
}

export default ChatSection;