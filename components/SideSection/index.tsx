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
<<<<<<< HEAD
                            <Button variant="outline-primary" class="cardButtonCom">
                                <Card id={card.id} name={card.name}/>
                            </Button>
=======
                            <Link href={`/community/${card.name}`}>  
                                <Button variant="outline-primary">
                                    <Card id={card.id} name={card.name}/>
                                </Button>
                            </Link>  
>>>>>>> 633ea68537dd7ea52436684e94148373654e89d7
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