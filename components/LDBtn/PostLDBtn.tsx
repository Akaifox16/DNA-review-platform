import LikeDislikeBtn from "./LikeDislikeBtn";
import { DISLIKE_POST_QUERY, LIKE_POST_QUERY, UNDISLIKE_POST_QUERY, UNLIKE_POST_QUERY } from "../../lib/query";
import { LDBtnProps, LDtype } from "../../lib/type";


const PostLDBtn = ({ likes, dislikes, id, owner}: LDBtnProps) => {
    return (
        <LikeDislikeBtn
            id={id}
            owner={owner}
            like={LIKE_POST_QUERY}
            unlike={UNLIKE_POST_QUERY}
            dislike={DISLIKE_POST_QUERY}
            undislike={UNDISLIKE_POST_QUERY}
            likes={likes}
            dislikes={dislikes}
            type={LDtype.Post}
        />
    );
}

export default PostLDBtn;