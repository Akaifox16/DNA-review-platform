import Link from "next/link";
import { Button, Stack } from "react-bootstrap";
import { PostCardListProps } from "../../lib/type";
import PostCard from "./PostCard";
import styles from '../../styles/Home.module.scss' ;
const PostList = ({ postlist }:PostCardListProps) => {
    console.log(postlist)
    return (
        <div>
            <Stack gap={3}>
                {
                    postlist.map(post => {
                        const { id, title, owner, tags} = post
                        return (
                            <Link href={`/post/${title}`} > 
                                <Button variant="outline-primary" >
                                    <PostCard id={id} title={title} owner={owner} tags={tags} />
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