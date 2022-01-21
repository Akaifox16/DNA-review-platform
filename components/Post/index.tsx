import { PostsDetailProps } from "../../lib/type";
import PostCard from "./PostCard";

const PostList = ({ postsDetail }:PostsDetailProps) => {
    return (
        <div>
            <ul>
                {
                    postsDetail.map(post => {
                        const { id, title, owner} = post
                        return <PostCard id={id} title={title} owner={owner} />
                    })
                }
            </ul>
        </div>
    );
}



export default PostList;