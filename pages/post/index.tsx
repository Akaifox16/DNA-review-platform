import { useLayout } from "../../hooks";

const Post = () => {
    return (
        <div>
            This is your post
        </div>
    );
}

Post.getLayout = useLayout()

export default Post;