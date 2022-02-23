import { ReactElement, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from '../../styles/Layout.module.scss';
import { SearchContext } from "../../context";

type LayoutProps = ({
    children,
}: {
    children: ReactElement
}) => ReactElement ;

const Layout: LayoutProps = ({ children }) => {
    const [filter, setFilter] = useState<string>('');
    return (
        <Stack gap={3} className = "homepages">
            <SearchContext.Provider value={{ filter, setFilter }} >
                <Navbar />
                <main>{ children }</main>
            </SearchContext.Provider>
            {/* <Footer /> */}
        </Stack>
    );
}

export default Layout;