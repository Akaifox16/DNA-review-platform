import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Col, Row, Container, Stack } from "react-bootstrap";
import { Communitys } from "../../components";
import { useAxios, useLayout, useLoginContext } from "../../hooks";
import { USER_POSTS_QUERY } from "../../lib/query";
import { PostCardProps, Response } from "../../lib/type";
import { CommunityCardProps } from "../../lib/type/props";

const Community = () => {
    const [commusDetail, setCommusDetail] = useState<CommunityCardProps[]>([]);
    const { token } = useLoginContext();
    useEffect(() => {
        useAxios(USER_POSTS_QUERY, {}, token.token)
        .then( ({ data }: Response) => {
            const details = data.data.userPosts.map(post => {
                const { slug, id ,tags} = post
                const name = "string"
                return { id, name , tags};
            })

            setCommusDetail(details)
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
                <Communitys commusDetail={ commusDetail }/>    
            </Stack>
        </div>
    );
}
Community.getLayout = useLayout();
export default Community;