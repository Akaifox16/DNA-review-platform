import Link from "next/link";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import { useAuthChecker } from "../../../hooks";
import { CommentSectionProps } from "../../../lib/type";
import MarkdownEditor from "../../MarkdownEditor";
import CommentCard from "./CommentCard";

const CommentSection = ({ comments }:CommentSectionProps ) => {
    const { isLogin } = useAuthChecker();
    const [value, setValue] = useState<string | undefined>('');

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
                comments.map( comment => {
                    const { content, author, id } = comment;
                    return (
                        <CommentCard 
                            id={ id }
                            content={ content }
                            author={ author }
                        />
                    );
                })
            }
            </Stack>
            
        </div>
    );
}

export default CommentSection;