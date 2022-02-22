import Image from "next/image";
import { Col, Container, Row, Button, Stack } from "react-bootstrap";
import { PostCardProps } from "../../lib/type";
import { CommunityCardProps } from "../../lib/type/props";

const CommunityCard = ({ id, name, tags }: CommunityCardProps) => {
    return (
        <Stack direction="horizontal" gap={3}>
            <Image src='/vercel.svg' width={124} height={124}/>
            <Stack gap={3}>
                <div>Community : { name }</div>
                <div>tags : { tags }</div>
            </Stack>
        </Stack>
    );
}

export default CommunityCard;