import Image from 'next/image';
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { CommentLDBtn } from '../..';
import { useOwnerChecker } from "../../../hooks";

import { Comment, CommentCardProps } from "../../../lib/type";
import CommentDropdown from "./CommentDropdown";

const CommentCard = ({ token, comment: { id, content, owner, likes, dislikes }}: CommentCardProps) => {
    const author = useOwnerChecker( owner.name );

    return (
        <div key={id} >
            <Card style={{ width: '18rem',  }} class="commuCard">
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
                <CommentLDBtn 
                    likes={likes}
                    dislikes={dislikes}
                    owner={token}
                    id={id}
                />
                </Card.Text>
            </Card>
        </div>
    );
}

export default CommentCard;