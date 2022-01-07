import { ReactElement } from "react";
import { Layout } from "../components";

const PointShop = () => {
    return (
        <div>
            this is Point Shop
        </div>
    );
}

PointShop.getLayout = (page:ReactElement) => {
    return (
        <Layout>
            { page }
        </Layout>
    )
}

export default PointShop;