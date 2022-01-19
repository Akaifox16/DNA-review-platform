import Image from "next/image";
import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

type CardProps = ({
    name
}:{
    name: String
}) => ReactElement

const Card: CardProps = ({ name }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image 
                    src='/favicon.ico' 
                    width={32} 
                    height={32} />
                </Col>
                <Col>
                    <p>{ name }</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Card;