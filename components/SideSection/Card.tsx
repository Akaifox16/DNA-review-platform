import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { CardProps } from "../../lib/type";
import styles from '../../styles/Home.module.scss' ;

const Card= ({ name }: CardProps) => {
    return (
        <div>
           
                    <Container className={styles.cardContain}>
            <Row>
                {/* <Col>
                    <Image 
                    src='/favicon.ico' 
                    width={32} 
                    height={32} />
                </Col> */}
                <Col>
                {/* <Image 
                    src='/new-post.png' 
                    width={32} 
                    height={32} /> */}

                    
                    <p>{ name }</p>
                </Col>
            </Row>
        </Container>
        </div>

    );
}

export default Card;