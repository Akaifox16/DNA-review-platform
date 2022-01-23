import { useRouter } from "next/router";
import { useState } from "react";
import { Card,  Form } from "react-bootstrap";

import { Input } from "../../components";
import MarkdownEditor from "../../components/MarkdownEditor";
import { useLayout } from "../../hooks";

const CreatePost = () => {
    const [value, setValue] = useState<string | undefined>('');
    const router = useRouter();

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
                            console.log(e.target.value)
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

                        }}
                    />
                </Form>
            </div>
        </Card>
    );
}

CreatePost.getLayout = useLayout();

export default CreatePost;