import { FloatingLabel, Form } from "react-bootstrap";
import { FloatingInputProps } from "../../lib/type";
import styles from '../../styles/Post.module.scss' ;
const Input = ({ controlId, label, type, onChange } : FloatingInputProps) => {
    return (
        <FloatingLabel
            controlId={ controlId }
            label={ label }
            className={styles.tc}>
            <Form.Control
            type={ type }
            placeholder={ label }
            onChange={ onChange } 
            />
        </FloatingLabel>
    );
}

export default Input;