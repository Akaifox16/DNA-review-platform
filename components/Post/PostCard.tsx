import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { PostCardProps } from "../../lib/type";

const PostCard = ({ id, owner, title }: PostCardProps) => {
    return (
        <Container>
            <Row>
                <Col>
                <Image src='/vercel.svg' width={124} height={124}/>
                </Col>
                <Col>
                    <Row>Product Name: { title }</Row>
                    <Row>Score</Row>
                    <Row>Reviewer: { owner }</Row>
                </Col>
            </Row>
        </Container>
    );
}

export default PostCard;