import { GetStaticPaths, GetStaticProps } from "next";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { CommentSection, Posts } from "../../components";
import ChatSection from "../../components/Community/chatSection";
import chatSection from "../../components/Community/chatSection";
import { useAxios, useLayout } from "../../hooks";
import { COMMUNITIES_QUERY, COMMUNITY_POST_QUERY } from "../../lib/query";
import { Comment, Post, PostCardProps, Response } from "../../lib/type";

type Props = {
    params: string
    posts: PostCardProps[]
    comment: Comment[]
}

const Slug = ({ params, posts, comment }: Props) => {

    return (
        <div>
            {params}
                <Stack gap={3} direction="horizontal">
                    
                    {/* <Row>
                        <Col sm={8} />
                        <Col>

                        </Col>
                    </Row> */}
                    <Posts postlist={posts} />
                    <ChatSection comments={comment} pid={""} />
                </Stack>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: {data: {communities}} }: Response = await useAxios(COMMUNITIES_QUERY, {}, '');
    const paths = communities.map(commu => ({
        params: {
            slug: commu.name.replace(/\s/g, '-')
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if(params !== undefined){
        const { data: {data: { commuPosts,commuComment }} }: Response = await useAxios(COMMUNITY_POST_QUERY, {slug: params.slug}, '');
        const posts = commuPosts.map(commu => {
            return  {
                id: commu.id,
                title: commu.slug,
                tags: commu.tags,
                owner: commu.owner.name,
            }
        })
        const comment = commuComment.map(comment => {
            const { id, content, owner: {name} } = comment;
            return {
                id, content, owner: name
            }
        })
        return {
            props:{
                params: params.slug,
                posts,
                comment
                // id,
                // author: name,
                // content,
                // comments,
                // tags
            }
        }

    }
    
    return {
        props:{
            // params
        }
    }
}

Slug.getLayout = useLayout();

export default Slug;