import LikeDislikeBtn from "./LikeDislikeBtn";
import { DISLIKE_COMMENT_QUERY, LIKE_COMMENT_QUERY, UNDISLIKE_COMMENT_QUERY, UNLIKE_COMMENT_QUERY } from "../../lib/query";
import { LDBtnProps, LDtype } from "../../lib/type";

const CommentLDBtn = ({likes, dislikes, id, owner}:LDBtnProps) => {
    return (
        <LikeDislikeBtn
            id={id}
            owner={owner}
            like={LIKE_COMMENT_QUERY}
            unlike={UNLIKE_COMMENT_QUERY}
            dislike={DISLIKE_COMMENT_QUERY}
            undislike={UNDISLIKE_COMMENT_QUERY}
            likes={likes}
            dislikes={dislikes}
            type={LDtype.Comment}
        />
    );
}

export default CommentLDBtn;