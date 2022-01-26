import { useRouter } from "next/router";
import { useState } from "react";
import { Card,  Form } from "react-bootstrap";

import { Input } from "../../components";
import MarkdownEditor from "../../components/MarkdownEditor";
import { useCreatePost, useLayout, useAuthChecker } from "../../hooks";

const CreatePost = () => {
    const [value, setValue] = useState<string | undefined>('');
    const [title, setTitle] = useState<string>('');
    const router = useRouter();

    const { token } = useAuthChecker();
    const post = useCreatePost();

    return (
        <Card>
            <Card.Title><h1>Create your review</h1></Card.Title>
            <div>
                <Form>
                    <Input 
                        controlId="floatingTitle"
                        label="Title"  
                        type="text"
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                    />
                    <Input 
                        controlId="floatingTag"
                        label="Tag"
                        type="text"
                        onChange={e => {
                            console.log(e.target.value)
                        }}
                    />
                    <h3>Write your content</h3>
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
                                tags: [],
                                content: value === undefined ? '' : value}, token.token);
                        }}
                    />
                </Form>
            </div>
        </Card>
    );
};

CreatePost.getLayout = useLayout();

export default CreatePost;

