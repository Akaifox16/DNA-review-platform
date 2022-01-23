import { FloatingLabel, Form } from "react-bootstrap";
import { FloatingInputProps } from "../../lib/type";

const Input = ({ controlId, label, type, onChange } : FloatingInputProps) => {
    return (
        <FloatingLabel
            controlId={ controlId }
            label={ label }>
            <Form.Control
            type={ type }
            placeholder={ label }
            onChange={ onChange } 
            />
        </FloatingLabel>
    );
}

export default Input;