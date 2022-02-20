import Image from 'next/image';
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useOwnerChecker } from "../../../hooks";

import { Comment } from "../../../lib/type";
import CommentDropdown from "./CommentDropdown";

const CommentCard = ({ id, content, owner }: Comment) => {
    const author = useOwnerChecker( owner.name );

    return (
        <div key={id}>
            <Card style={{ width: '18rem' }}>
                { 
                    author && 
                    <CommentDropdown />
                }
                <Card.Title>{ owner.name }</Card.Title>
                <Card.Text>
                    <ReactMarkdown 
                        children={ content } 
                        components= {{
                            img: ({node, src, ...props}) => <Image
                                                            src={src as string}
                                                            width={200} 
                                                            height={200}
                                                            />
                        }}
                    />
                </Card.Text>
            </Card>
        </div>
    );
}

export default CommentCard;