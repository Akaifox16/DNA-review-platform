import { ReactElement } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

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
        <Stack gap={3}>
            <Navbar />
            <main>{ children }</main>
            <Footer />
        </Stack>
    );
}

export default Layout;