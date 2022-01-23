import { Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useOwnerChecker } from "../../../hooks";

import { Comment } from "../../../lib/type";
import CommentDropdown from "./CommentDropdown";

const CommentCard = ({ id, content, author }: Comment) => {
    const owner = useOwnerChecker( author );

    return (
        <div key={id}>
            <Stack>
                { 
                    owner && 
                    <CommentDropdown />
                }
                <ReactMarkdown children={ content } />
                <p>{ author }</p>
            </Stack>
        </div>
    );
}

export default CommentCard;