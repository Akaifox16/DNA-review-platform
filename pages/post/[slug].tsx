import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Dropdown, Stack } from 'react-bootstrap';

import { Response, SlugProps } from "../../lib/type";
import { useAxios, useLayout, useOwnerChecker } from "../../hooks";
import { POSTS_QUERY, POST_BY_ID_QUERY } from "../../lib/query";
import { CommentSection } from "../../components";
import styles from '../../styles/Post.module.scss' ;

const Slug = ({ id, author, comments, content, tags } : SlugProps) => {
    const [owner, setOwner] = useState(false);
    
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
            <div className={styles.mid} >
                <article>
                    <div className={styles.tag}>
                        #{tags}
                    </div>
                    <ReactMarkdown className={styles.cv}
                        children={ `${content}` }
                       components= {{
                            img: ({node, src, ...props}) => 
                                                            <img className={styles.pic}
                                                            src={src as string}
                                                            width={700} 
                                                            />
                                                        
                        }}
                    />
                </article>
            </div>
            <div>
                
                    <h4 className={styles.tt} > Write Comment</h4>
            </div>
            <div >
                <CommentSection comments={ comments }  pid={id} />
            </div>
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
        const { id, owner: { name }, content, comments, tags } = data.data.post
        
        return {
            props:{
                id,
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