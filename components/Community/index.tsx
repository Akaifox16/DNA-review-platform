import Link from "next/link";
import { Button, Stack } from "react-bootstrap";
import { PostsDetailProps } from "../../lib/type";
import { CommunityDetailProps } from "../../lib/type/props";
import PostCard from "../Post/PostCard";
import CommunityCard from "./CommunityCard";

const CommuPostList = ({ commusDetail }:CommunityDetailProps) => {
    return (
        <div>
            <Stack gap={3}>
                {
                    // commusDetail.map(post => {
                        // const { id, name, tags} = post
                        // return (
                            <Link href={`/post/ปวดขี้`} > 
                                <Button variant="outline-primary">
                                    <CommunityCard id={12} title={"ปวดขี้"} owner={"owner"} />
                                </Button>
                            </Link>
                        // );
                    // })
                }
            </Stack>
        </div>
    );
}



export default CommuPostList;