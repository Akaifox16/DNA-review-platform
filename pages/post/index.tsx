import { ReactElement } from "react";
import { Layout } from "../../components";

const Post = () => {
    return (
        <div>
            This is your post
        </div>
    );
}

Post.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            { page }
        </Layout>
    )
}

export default Post;