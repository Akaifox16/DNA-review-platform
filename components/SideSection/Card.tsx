import Image from "next/image";
import { ReactElement } from "react";

type CardProps = ({
    name
}:{
    name: String
}) => ReactElement

const Card: CardProps = ({ name }) => {
    return (
        <div>
            <Image src='/favicon.ico' width={32} height={32} />
            <p>{ name }</p>
        </div>
    );
}

export default Card;