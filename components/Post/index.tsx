import Link from "next/link";
import { Button, Stack } from "react-bootstrap";
import { PostCardListProps } from "../../lib/type";
import PostCard from "./PostCard";
import styles from '../../styles/Home.module.scss' ;
const PostList = ({ postlist }:PostCardListProps) => {
    return (
        <div>
            <Stack gap={3}>
                {
                    postlist.map(post => {
                        const { id, title, owner} = post
                        return (
                            <Link href={`/post/${title}`} > 
                                <Button variant="outline-primary" className={styles.postbutton} >
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