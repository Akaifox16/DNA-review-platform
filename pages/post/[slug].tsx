import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Dropdown, Stack } from 'react-bootstrap';

import { Response, SlugProps, Tag } from "../../lib/type";
import { useAuthChecker, useAxios, useLayout, useOwnerChecker, useUsername } from "../../hooks";
import { DELETE_POST_QUERY, EDIT_POST_QUERY, POSTS_QUERY, POST_BY_ID_QUERY } from "../../lib/query";
import { PostLDBtn, CommentSection, TagInput } from "../../components";
import styles from '../../styles/Post.module.scss' ;
import { useRouter } from "next/router";
import MarkdownEditor from "../../components/MarkdownEditor";

const Slug = ({ id, author, comments, content, tags, likes, dislikes, title } : SlugProps) => {
    const [owner, setOwner] = useState(false);
    const { token } = useAuthChecker();
    const [newtags, setTags] = useState<Tag[]>(tags.map(tag=> {
        return {
            id: tag,
            text: tag
        }
    }));
    const [newTitle, setTitle] = useState(title);
    const [newContent, setContent] = useState<string | undefined>(content)
    const [edit, setEdit] = useState(false);
    const router = useRouter();
    useEffect(()=> {
            const isOwner = useOwnerChecker(author);
            setOwner(isOwner);
    }, [])
    
    return (
        <div >
            <Stack className={styles.cv}>
            <div className={styles.mid} >
                <div className={styles.inl} >
                    <div>
                        {
                            edit
                            ? <input
                            value={newTitle} 
                            onChange={e => {
                                setTitle(e.target.value)
                            }} />
                            :  <h1 className={styles.tag}>{title}</h1>
                        }
                    </div>
                    <div className={styles.ed} >
                        {
                            (owner && !edit) &&
                            <Dropdown>
                                <Dropdown.Toggle>
                                    <Image 
                                    src={'/favicon.ico'}
                                    width={20}
                                    height={20} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                    onClick={e => {
                                        setEdit(true);
                                    }}
                                    >Edit</Dropdown.Item>
                                    <Dropdown.Item
                                    onClick={e => {
                                        useAxios(DELETE_POST_QUERY, {pid: id}, token.token)
                                        .then(res => {
                                            router.push('/');
                                        })                                    
                                    }}
                                    >Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                    </div>
                    <div>

                    </div>

                </div>
            <article>
                <div className={styles.tag}>
                    {/* #{tags} */}
                    {edit
                    ? <TagInput 
                        tags={newtags}
                        setTags={setTags}
                    />
                    : tags.map(tag => {
                        return '#' + tag;
                    }).join(' ')
                    }
                </div>
                {
                    edit
                    ? <MarkdownEditor
                        value={newContent} height={640}
                        confirmText="save change"
                        setValue={ setContent }
                        onClickCancel={e => {
                            e.preventDefault();
                            setEdit(false);
                        }}
                        onClickSuccess={e => {
                            e.preventDefault();
                            useAxios(EDIT_POST_QUERY, {
                                post: {
                                    slug: newTitle.replace(/\s/g, '-'),
                                    content: newContent,
                                    tags: newtags.map(tag=> tag.text)
                                },
                                pid: id,
                            }, token.token)
                            .then(res => {
                                setEdit(false);
                                router.push(`/post/${newTitle.replace(/\s/g, '-')}`);
                                router.reload();
                            })
                        }}
                    />
                    : <ReactMarkdown className={styles.cv}
                        children={ `${content}` }
                        components= {{
                            img: ({node, src, ...props}) => 
                                                            <img className={styles.pic}
                                                            src={src as string}
                                                            width={700} 
                                                            
                                                            />
                                                            
                        }}
                    />

                }
            <div className={styles.like}>
                {!edit && <PostLDBtn 
                    owner={token.token}
                    id={id}
                    likes={likes}
                    dislikes={dislikes}
                />}
            </div>
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
        const { id, owner: { name }, content, comments, tags, likes, dislikes } = data.data.post
        
        const newcomments = comments.map(comment => {
            return {
                id: comment.id,
                content: comment.content,
                owner: comment.owner.name,
                likes: comment.likes.map(like => {
                    return like.owner.name;
                }),
                dislikes: comment.dislikes.map( dislike => {
                    return dislike.owner.name;
                }) ,
            }
        });

        console.log(newcomments);
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