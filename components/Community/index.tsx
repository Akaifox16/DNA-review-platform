import Link from "next/link";
import { Button, Stack } from "react-bootstrap";
import { PostsDetailProps } from "../../lib/type";
import PostCard from "../Post/PostCard";

const PostList = ({ postsDetail }:PostsDetailProps) => {
    return (
        <div>
            
        
            <Stack gap={3} >
                {
                    postsDetail.map(post => {
                        const { id, title, owner} = post
                        return (
                            <Link href={`/post/${title}`} > 
                                <Button variant="outline-primary" >
                                    <PostCard id={id} title={title} owner={owner}  />
                                </Button>
                            </Link>
                        );
                    })
                }
            </Stack>
        </div>
    );
}



export default PostList;