import { Stack } from "react-bootstrap";
import { LikeDislikeProps } from "../lib/type";

const LikeDislikeBtn = ({likes, dislikes}:LikeDislikeProps) => {
    // const [] 
    return (
        <Stack gap={3} direction="horizontal">
            <div>
                <button>like</button>
                <p>{likes.length}</p>
            </div>
            <div>
                <button>dislike</button>
                <p>{dislikes.length}</p>
            </div>
        </Stack>
    );
}

export default LikeDislikeBtn;