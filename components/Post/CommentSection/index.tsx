import Link from "next/link";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import { useAuthChecker, useCreateComment } from "../../../hooks";
import { CommentSectionProps } from "../../../lib/type";
import MarkdownEditor from "../../MarkdownEditor";
import CommentCard from "./CommentCard";
import styles from '../../../styles/Post.module.scss' ;
const CommentSection = ({ comments, pid }:CommentSectionProps ) => {
    const { isLogin, token } = useAuthChecker();
    const [commentList, setComment] = useState(comments);
    const [value, setValue] = useState<string | undefined>('');
    const createComment = useCreateComment();

    return (
        <div>
            <div className={styles.com} >
            <h4>Write your comment</h4>
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
            </div>
            <Stack>
            <div>
                <h4 className={styles.tt} > Comment</h4>
            </div>
            <div className={styles.com1} >
                {
                    commentList.map( (comment,index) => {
                        const { content, owner, id } = comment;
                        return (
                            <div className={styles.bot} >
                                <div >
                                    <h4 className={styles.space}>Comment {index+1}</h4>
                                </div>
                                <div >
                                    <CommentCard 
                                        id={ id }
                                        content={ content }
                                        owner={ owner }
                                    />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            </Stack>
            
        </div>
    );
}

export default CommentSection;