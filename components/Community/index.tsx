import Link from "next/link";
import { Button, Stack } from "react-bootstrap";
import { PostsDetailProps } from "../../lib/type";
import { CommunityDetailProps } from "../../lib/type/props";
import PostCard from "../Post/PostCard";

const CommuPostList = ({ commusDetail }:CommunityDetailProps) => {
    return (
        <div>
            <Stack gap={3}>
                {
                    commusDetail.map(post => {
                        const { id, name, tags} = post
                        return (
                            <Link href={`/post/${name}`} > 
                                <Button variant="outline-primary">
                                    <PostCard id={id} title={name} owner={"owner"} />
                                </Button>
                            </Link>
                        );
                    })
                }
            </Stack>
        </div>
    );
}



export default CommuPostList;