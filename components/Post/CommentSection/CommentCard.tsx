import { Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useOwnerChecker } from "../../../hooks";

import { Comment } from "../../../lib/type";
import CommentDropdown from "./CommentDropdown";

const CommentCard = ({ id, content, owner }: Comment) => {
    const author = useOwnerChecker( owner.name );

    return (
        <div key={id}>
            <Stack>
                { 
                    author && 
                    <CommentDropdown />
                }
                <ReactMarkdown children={ content } />
                <p>{ owner.name }</p>
            </Stack>
        </div>
    );
}

export default CommentCard;