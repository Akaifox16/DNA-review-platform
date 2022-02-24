import { useRouter } from "next/router";
import { useState } from "react";
import { Card,  Form } from "react-bootstrap";
import { Tag } from "react-tag-input";

import { Input, TagInput } from "../../components";
import MarkdownEditor from "../../components/MarkdownEditor";
import { useCreatePost, useLayout, useAuthChecker } from "../../hooks";
import styles from '../../styles/Post.module.scss' ;
const CreatePost = () => {
    const [value, setValue] = useState<string | undefined>('');
    const [title, setTitle] = useState<string>('');
    const [tags, setTags] = useState<Tag[]>([]);
    const router = useRouter();

    const { token } = useAuthChecker();
    const post = useCreatePost();

    return (
        <div className={styles.ct}>
            {/* <Card  > */}
                <div  >
                    <div className={styles.tiCard}>
                {/* <Card.Title ><h1>Create your review</h1></Card.Title> */}
                <h1 className={styles.sen} >Create Rewiew</h1>
            </div>
            
            <div>
                <Form >
                    <div >
                        <Input 
                        controlId="floatingTitle"
                        label="Title"  
                        type="text"
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                    />
                    </div>

                    <TagInput
                        tags={tags}
                        setTags={setTags}
                    />
                    <h3 className={styles.space1}>Write your content</h3>
                    <MarkdownEditor 
                        value={value} height={620}
                        confirmText="Post"
                        setValue={setValue}
                        onClickCancel={e => {
                            e.preventDefault();
                            router.push('/post');
                        }}
                        onClickSuccess={e => {
                            post({slug: title.replace(/\s/g, '-'),
                                tags: tags.map(tag => tag.text),
                                content: value === undefined ? '' : value}, token.token);
                        }}
                    />
                </Form>
            </div> 
                </div>
           
        {/* </Card> */}
        </div>
        
    );
};

CreatePost.getLayout = useLayout();

export default CreatePost;

