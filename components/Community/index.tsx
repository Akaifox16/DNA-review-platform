import Link from "next/link";
import { Button, Stack } from "react-bootstrap";
import { PostsDetailProps } from "../../lib/type";
import { CommunityDetailProps } from "../../lib/type/props";
import PostCard from "../Post/PostCard";
import CommunityCard from "./CommunityCard";

const CommuPostList = ({ commusDetail }:CommunityDetailProps) => {
    return (
        <div>
            
        
            <Stack gap={3} >
                {
<<<<<<< HEAD
                    postsDetail.map(post => {
                        const { id, title, owner} = post
                        return (
                            <Link href={`/post/${title}`} > 
                                <Button variant="outline-primary" >
                                    <PostCard id={id} title={title} owner={owner}  />
=======
                    // commusDetail.map(post => {
                        // const { id, name, tags} = post
                        // return (
                            <Link href={`/post/ปวดขี้`} > 
                                <Button variant="outline-primary">
                                    <CommunityCard id={12} title={"ปวดขี้"} owner={"owner"} />
>>>>>>> b103adab667e777ed3e6038454bc448a15bc727b
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