import Image from "next/image";

const PostCard = () => {
    return (
        <div>
            <Image src='/vercel.svg' width={124} height={124}/>
            <h3>Product Name</h3>
            <p>Score</p>
            <p>Reviewer</p>
        </div>
    );
}

export default PostCard;