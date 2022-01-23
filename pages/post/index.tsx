import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Posts } from "../../components";
import { useAxios, useLayout, useLoginContext } from "../../hooks";
import { USER_POSTS_QUERY } from "../../lib/query";
import { PostCardProps, Response } from "../../lib/type";

const Post = () => {
    const [postsDetail, setPostsDetail] = useState<PostCardProps[]>([]);
    const { token } = useLoginContext();
    useEffect(() => {
        useAxios(USER_POSTS_QUERY, {}, token.token)
        .then( ({ data }: Response) => {
            const details = data.data.userPosts.map(post => {
                const { slug, id } = post
    
                return { id, title: slug, owner: token.username};
            })

            setPostsDetail(details)
        })

    },[])
    
    return (
        <div>
            <Stack gap={3}>
                <Stack direction="horizontal" gap={3}>
                    <div className="vr"></div>
                    <div className="vr"></div>
                </Stack>       
                <Posts postsDetail={ postsDetail }/>    
            </Stack>
        </div>
    );
}

Post.getLayout = useLayout();

export default Post;