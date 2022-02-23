// import { ReactElement } from "react";
import { Button, Stack } from "react-bootstrap";
import { SideSectionProps } from "../../lib/type";
import Card from "./Card";

const SideSection= ({ name, cardlist }: SideSectionProps) => {
    return (
        <div>
            <h4>{ name }</h4>
            <Stack gap={1}>
                {
                    cardlist.map(card => {
                        return (
                            <Button variant="outline-primary" class="cardButtonCom">
                                <Card id={card.id} name={card.name}/>
                            </Button>
                        )
                    })
                }
                {/* <Button variant="outline-primary">
                    <Card name='test'/>
                </Button>
                <Button variant="outline-primary">
                    <Card name='test'/>
                </Button>
                <Button variant="outline-primary">
                    <Card name='test'/>
                </Button> */}
            </Stack>
        </div>
    );
}

export default SideSection;