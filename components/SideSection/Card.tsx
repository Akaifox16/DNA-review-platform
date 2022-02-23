import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { CardProps } from "../../lib/type";

const Card= ({ name }: CardProps) => {
    return (
        <Container class="cardContain">
            <Row>
                {/* <Col>
                    <Image 
                    src='/favicon.ico' 
                    width={32} 
                    height={32} />
                </Col> */}
                <Col>
                    <p>{ name }</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Card;