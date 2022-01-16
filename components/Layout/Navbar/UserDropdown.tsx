import { Dropdown } from "react-bootstrap";
import { TOKEN_KEY } from "../../../config";
import { useStorage } from "../../../hooks";

const UserDropdown = () => {
    const { removeItem } = useStorage();
    const clickHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        removeItem(TOKEN_KEY);
    }
    return (
        <Dropdown>
                    <Dropdown.Toggle
                    variant="success"
                    >
                        User
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                        href="/user">
                            profile
                        </Dropdown.Item>
                        <Dropdown.Item
                        href="/"
                        onClick={ e => { clickHandler(e)} }>
                            logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
    );
}

export default UserDropdown;