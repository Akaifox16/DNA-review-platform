import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Dropdown, Stack } from 'react-bootstrap';

import { Response, SlugProps } from "../../lib/type";
import { useAuthChecker, useAxios, useLayout, useOwnerChecker, useUsername } from "../../hooks";
import { POSTS_QUERY, POST_BY_ID_QUERY } from "../../lib/query";
import { PostLDBtn, CommentSection } from "../../components";
import styles from '../../styles/Post.module.scss' ;

const Slug = ({ id, author, comments, content, tags, likes, dislikes, title } : SlugProps) => {
    const [owner, setOwner] = useState(false);
    const { token } = useAuthChecker();
    useEffect(()=> {
            const isOwner = useOwnerChecker(author);
            setOwner(isOwner);
    }, [])
    
    return (
        <div >
            <Stack className={styles.cv}>
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
            <h1>{title}</h1>
            <article>
                <ReactMarkdown className={styles.cv}
                    children={ `${content}` }
                    components= {{
                        img: ({node, src, ...props}) => <center>
                                                        <img
                                                        src={src as string}
                                                        width={700} 
                                                        
                                                        />
                                                        </center>
                    }}
                />
            </article>
            <PostLDBtn 
                owner={token.token}
                id={id}
                likes={likes}
                dislikes={dislikes}
            />
            <CommentSection comments={ comments }  pid={id} />
        </Stack>
        </div>

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if(params !== undefined){
        const { data }: Response = await useAxios(POST_BY_ID_QUERY, {slug: params.slug}, '');
        const { id, owner: { name }, content, comments, tags, likes, dislikes } = data.data.post
        
        return {
            props:{
                id,
                title: params.slug?.split('-').join(' '),
                likes,
                dislikes,
                author: name,
                content,
                comments,
                tags
            }
        }

    }
    
    return {
        props:{
            
        }
    }
}

Slug.getLayout = useLayout();

export default Slug;