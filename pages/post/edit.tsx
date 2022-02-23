import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Tag } from "react-tag-input";
import { Input, TagInput } from "../../components";
import MarkdownEditor from "../../components/MarkdownEditor";
import { useAuthChecker, useEditPost } from "../../hooks";

const Edit = () => {
    const [value, setValue] = useState<string | undefined>('');
    const [title, setTitle] = useState<string>('');
    const [tags, setTags] = useState<Tag[]>([]);
    const router = useRouter();

    const { token } = useAuthChecker();
    const edit = useEditPost();

    return (
        <Card>
            <Card.Title>
                <h1>Edit your review</h1>
            </Card.Title>
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
                    <TagInput 
                        tags={tags}
                        setTags={setTags}
                    />
                    <h3>Edit your Content</h3>
                    <MarkdownEditor 
                        value={value} height={620}
                        confirmText="Edit"
                        setValue={setValue}
                        onClickCancel={e => {
                            e.preventDefault();
                            router.back();
                        }}
                        onClickSuccess={e => {
                            
                        }}
                    />
                </Form>
            </div>
        </Card>
    );
}

export default Edit;