import Image from "next/image";
import { Col, Container, Row, Button, Stack } from "react-bootstrap";
import { PostCardProps } from "../../lib/type";
import { CommunityCardProps } from "../../lib/type/props";

const CommunityCard = ({ id, name, tags }: CommunityCardProps) => {
    return (
        <Stack direction="horizontal" gap={3} className="postCard">
            <Image src='/vercel.svg' width={124} height={124}/>
<<<<<<< HEAD
            <Stack gap={3} >
                <div>Product Name: { title }</div>
                <div>Score: </div>
                <div>Reviewer: { owner }</div>
=======
            <Stack gap={3}>
                <div>Community : { name }</div>
                <div>tags : { tags }</div>
>>>>>>> b103adab667e777ed3e6038454bc448a15bc727b
            </Stack>
        </Stack>
    );
}

export default CommunityCard;