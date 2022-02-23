import Image from "next/image";
import { Col, Container, Row, Button, Stack } from "react-bootstrap";
import { PostCardProps } from "../../lib/type";
import styles from '../../styles/Home.module.scss' ;
const PostCard = ({ owner, tags, title }: PostCardProps) => {
    // console.log(tags)

    return (
        <div>
            
            <Stack direction="horizontal"  gap={3} className={styles.showCard}>
                
                <div className={styles.k} >
                    <Image  className={styles.ll}src='/new-post.png' width={80} height={80}/>
                </div>
                
                
                <Stack gap={3}>
                <div>Product Name: { title }</div>
                <div>Tag: {tags.join(' ')}</div>
                <div>Reviewer: { owner }</div>
                </Stack>
            </Stack>
        </div>

    );
}

export default PostCard;