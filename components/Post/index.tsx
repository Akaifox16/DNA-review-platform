import Link from "next/link";
import { Button, Stack } from "react-bootstrap";
import { PostCardListProps } from "../../lib/type";
import PostCard from "./PostCard";

const PostList = ({ postlist }:PostCardListProps) => {
    return (
        <div>
            <Stack gap={3}>
                {
                    postlist.map(post => {
                        const { id, title, owner} = post
                        return (
                            <Link href={`/post/${title}`} > 
                                <Button variant="outline-primary" class="postButton" >
                                    <PostCard id={id} title={title} owner={owner} />
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