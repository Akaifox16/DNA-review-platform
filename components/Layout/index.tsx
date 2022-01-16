import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from '../../styles/Layout.module.scss';

type LayoutProps = ({
    children,
}: {
    children: ReactElement
}) => ReactElement ;

const Layout: LayoutProps = ({ children }) => {
    return (
            <Container>
                <Row>
                    <Col><Navbar /></Col>
                </Row>
                <Row>
                    <Col>
                        <main>{ children }</main>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container>
    );
}

export default Layout;