import Image from 'next/image';
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { CommentLDBtn } from '../..';
import { useOwnerChecker } from "../../../hooks";

import { Comment, CommentCardProps } from "../../../lib/type";
import CommentDropdown from "./CommentDropdown";
<<<<<<< HEAD
import styles from '../../../styles/Post.module.scss' ;
const CommentCard = ({ id, content, owner }: Comment) => {
=======

const CommentCard = ({ token, comment: { id, content, owner, likes, dislikes }}: CommentCardProps) => {
>>>>>>> 898680a109e95b88031fa266912cdf2f1460810a
    const author = useOwnerChecker( owner.name );

    return (
        <div key={id}>
            <Card  className={styles.cap}>
                { 
                    author && 
                    <CommentDropdown />
                }
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
<<<<<<< HEAD
                        />
=======
                    />
                <CommentLDBtn 
                    likes={likes}
                    dislikes={dislikes}
                    owner={token}
                    id={id}
                />
>>>>>>> 898680a109e95b88031fa266912cdf2f1460810a
                </Card.Text>
                    <p>{ owner.name }</p>
            </Card>
        </div>
    );
}

export default CommentCard;