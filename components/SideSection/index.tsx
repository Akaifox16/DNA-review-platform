// import { ReactElement } from "react";
import Link from "next/link";
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
                            <Link href={`/${name === 'Ranking' ? 'user': name}/${card.name.replace(/\s/g, '-')}`}>  
                                <Button variant="outline-primary" class="cardButtonCom">
                                    <Card id={card.id} name={card.name}/>
                                </Button>
                            </Link>  
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