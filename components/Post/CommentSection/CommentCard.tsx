import Image from 'next/image';
import { Card, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { CommentLDBtn } from '../..';
import { useOwnerChecker } from "../../../hooks";

import { Comment, CommentCardProps } from "../../../lib/type";
import CommentDropdown from "./CommentDropdown";

import styles from '../../../styles/Home.module.scss';

const CommentCard = ({ token, comment: { id, content, owner, likes, dislikes }}: CommentCardProps) => {
    const author = useOwnerChecker( owner.name );

    return (
        <div key={id}>
            {/* <Card  className={styles.ins}> */}
                <div className={styles.ds} >
                { 
                    author && 
                    <CommentDropdown />
                }
                    {/* <Card.Text> */}
                        <ReactMarkdown 
                            children={ content } 
                            components= {{
                                img: ({node, src, ...props}) => <Image
                                src={src as string}
                                width={20} 
                                height={20}
                                />
                            }}
                        />
                    {/* </Card.Text> */}
                </div>
                <div className={styles.ins} >
                    <Stack gap={3} direction='horizontal' >    
                        <CommentLDBtn 
                            likes={likes}
                            dislikes={dislikes}
                            owner={token}
                            id={id}
                            />
                            <p>{ owner.name }</p>
                    </Stack>
                </div>
            {/* </Card> */}
        </div>
    );
}

export default CommentCard;