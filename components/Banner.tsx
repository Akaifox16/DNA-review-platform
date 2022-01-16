import { ReactElement } from "react";

type BannerProps = ({
    text
}:{
    text: String
}) => ReactElement;

const Banner:BannerProps = ({ text }) => {
    return (
        <div>
            { text }
        </div>
    );
}

export default Banner;