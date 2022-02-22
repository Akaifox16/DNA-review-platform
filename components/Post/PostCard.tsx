import Image from "next/image";
import { Col, Container, Row, Button, Stack } from "react-bootstrap";
import { PostCardProps } from "../../lib/type";

const PostCard = ({ id, owner, title }: PostCardProps) => {
    return (
        
        <Stack direction="horizontal"  gap={3} className="postCard">
            
            <Image src='/vercel.svg' width={124} height={124}/>
            <Stack gap={3}>
                <div>Product Name: { title }</div>
                <div>Score: </div>
                <div>Reviewer: { owner }</div>
            </Stack>
        </Stack>
    );
}

export default PostCard;