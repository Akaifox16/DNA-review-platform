import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const PostCard = () => {
    return (
        <Container>
            <Row>
                <Col>
                <Image src='/vercel.svg' width={124} height={124}/>
                </Col>
                <Col>
                    <Row>Product Name</Row>
                    <Row>Score</Row>
                    <Row>Reviewer</Row>
                </Col>
            </Row>
        </Container>
    );
}

export default PostCard;