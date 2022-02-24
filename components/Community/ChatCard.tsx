import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

type Props ={
    owner: string
    content: string
}

const ChatCard = ({ owner, content }:Props) => {
    return (
        <div>
            <Card>
                <Card.Title>{ owner }</Card.Title>
                <ReactMarkdown 
                            children={ `${content}` }
                            components= {{
                                img: ({node, src, ...props}) => 
                                                                <img 
                                                                src={src as string}
                                                                width={700} 
                                                                
                                                                />
                                                                
                            }}
                        />
            </Card>
        </div>
    );
}

export default ChatCard;