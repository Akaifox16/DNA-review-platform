import { useLayout } from "../../hooks";

const Post = () => {
    return (
        <div>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <p>This is your post</p>
            <button > new Post </button>
        </div>
    );
}

Post.getLayout = useLayout();

export default Post;