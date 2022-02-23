import Link from "next/link";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import { useAuthChecker, useCreateComment } from "../../../hooks";
import { CommentSectionProps } from "../../../lib/type";
import MarkdownEditor from "../../MarkdownEditor";
import CommentCard from "./CommentCard";

const CommentSection = ({ comments, pid }:CommentSectionProps ) => {
    const { isLogin, token } = useAuthChecker();
    const [commentList, setComment] = useState(comments);
    const [value, setValue] = useState<string | undefined>('');
    const createComment = useCreateComment();

    return (
        <div>
            <Stack>
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
                        createComment({ belongsTo: pid,
                            content: value === undefined
                                    ? ''
                                    : value },
                            token.token )
                        .then(comment => {
                            setComment([...commentList, comment]);
                            console.log(commentList);
                            setValue('');
                        })
                    }}
                />
            }
            { !isLogin && 
            <div>
                <p>If you want to comment, please <Link href='/login'>
                        Login
                    </Link> first</p>
            </div>}
            {
                commentList.map( comment => {
                    // const { content, owner, id } = comment;
                    return (
                        <CommentCard
                            token={token.token}
                            comment={
                                comment
                            } 
                            // id={  }
                            // content={ content }
                            // owner={ owner }
                        />
                    );
                })
            }
            </Stack>
            
        </div>
    );
}

export default CommentSection;