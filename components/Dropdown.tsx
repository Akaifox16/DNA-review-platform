import { ReactElement } from "react";

type DropdownProps = ({
    name,
    children
}: {
    name:string,
    children:ReactElement
}) => ReactElement

const Dropdown:DropdownProps = ({ name, children}) => {
    return (
        <div className="dropdown m-2">
            <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
                { name }
            </button>
            <ul
            className="dropdown-menu"
            >
                { children }
            </ul>
        </div>
    );
}

export default Dropdown;