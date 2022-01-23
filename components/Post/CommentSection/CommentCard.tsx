import ReactMarkdown from "react-markdown";

import { Comment } from "../../../lib/type";

const CommentCard = ({ id, content, author }: Comment) => {
    return (
        <div key={id}>
            <ReactMarkdown children={ content } />
            <p>{ author }</p>
        </div>
    );
}

export default CommentCard;