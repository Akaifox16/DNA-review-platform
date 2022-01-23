import { Dropdown } from "react-bootstrap";

const CommentDropdown = () => {
    return (
        <div>
            <Dropdown>
                <Dropdown.Menu>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default CommentDropdown;