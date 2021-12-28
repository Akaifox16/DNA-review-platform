import { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../../styles/Layout.module.scss'

type LayoutProps = ({
    children,
}: {
    children: ReactElement
}) => ReactElement

const Layout: LayoutProps = ({ children }) => {
    return (
        <div>
            <div className={ styles.navbar }><Navbar /></div>
            <main>{ children }</main>
            <Footer />
        </div>
    );
}

export default Layout;