import { ReactElement } from "react";
import { Button, Stack } from "react-bootstrap";
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
            <Stack gap={1}>
                <Button variant="outline-primary">
                    <Card name='test'/>
                </Button>
                <Button variant="outline-primary">
                    <Card name='test'/>
                </Button>
                <Button variant="outline-primary">
                    <Card name='test'/>
                </Button>
            </Stack>
        </div>
    );
}

export default SideSection;