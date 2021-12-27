import { ReactElement } from "react";
import Card from "./Card";

type SideSectionProps = ({
    name,
}: {
    name: String
}) => ReactElement

const SideSection:SideSectionProps = ({ name }) => {
    return (
        <div>
            <h4>{ name }</h4>
            <ul>
                <Card name='test'/>
            </ul>
        </div>
    );
}

export default SideSection;