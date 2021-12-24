import { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = ({
    children,
}: {
    children: ReactElement
}) => ReactElement

const Layout: LayoutProps = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{ children }</main>
            <Footer />
        </div>
    );
}

export default Layout;