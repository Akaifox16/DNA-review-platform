import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Col, Row, Container, Stack } from "react-bootstrap";
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
                <Container>
                    <Row>
                        <Col
                            sm={8}>
                        </Col>
                        <Col>
                            <Link href='/post/create'>
                                <Button
                                    variant="success"
                                >
                                    Write New Review
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>       
                <Posts postsDetail={ postsDetail }/>    
            </Stack>
        </div>
    );
}

Post.getLayout = useLayout();

export default Post;