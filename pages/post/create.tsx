import { Card,  Form } from "react-bootstrap";
import { Input } from "../../components";

const CreatePost = () => {
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
                    <Input 
                        controlId="floatingContent"
                        label="Content"
                        type="textarea"
                        onChange={e => {
                            console.log(e.target.value)
                        }}
                    />
                </Form>
            </div>
        </Card>
    );
}

export default CreatePost;