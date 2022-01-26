import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Dropdown, Stack } from 'react-bootstrap';

import { Response, SlugProps } from "../../lib/type";
import { useAuthChecker, useAxios, useLayout, useOwnerChecker } from "../../hooks";
import { POSTS_QUERY, POST_BY_ID_QUERY } from "../../lib/query";
import { CommentSection } from "../../components";


const Slug = () => {
    const [review, setReview] = useState<SlugProps>({
        author: "",
        content: "",
        comments: [],
        tags: []
    })
    const [owner, setOwner] = useState(false);
    const { token } = useAuthChecker();

    const router = useRouter();
    
    useEffect(  ()=> {
        
        useAxios(POST_BY_ID_QUERY, {slug: router.query.slug}, token.token)
        .then((res: Response) => {
            const { owner: { name }, content, comments, tags } = res.data.data.post
            setReview({...review,
                        author: name,
                        content,
                        comments,
                        tags });
        })
        .then(() => {
            const isOwner = useOwnerChecker(review.author);
            setOwner(isOwner);
        })
    
    }, [])
    
    return (
        <Stack>
            {
                owner && 
                <Dropdown>
                    <Dropdown.Toggle>
                        <Image 
                        src={'/favicon.ico'}
                        width={20}
                        height={20} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Edit</Dropdown.Item>
                        <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            }
            <article>
                <ReactMarkdown 
                    children={ `${review.content}` }
                />
            </article>
            <CommentSection comments={ review.comments } />
        </Stack>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data }: Response = await useAxios(POSTS_QUERY, {}, '');
    const paths = data.data.posts.map(post => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async() => {
    return {
        props:{

        }
    }
}

Slug.getLayout = useLayout();

export default Slug;