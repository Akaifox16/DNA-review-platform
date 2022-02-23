import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { Button, Stack } from "react-bootstrap";
import { MarkdownEditorProps } from "../../lib/type";
import rehypeSanitize from 'rehype-sanitize';
import styles from '../../styles/Post.module.scss' ;
const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
    );

const MarkdownEditor = ({   value, setValue, 
                            onClickCancel, 
                            onClickSuccess,
                            confirmText, height }: MarkdownEditorProps ) => {
    return (
        <div>
        <MDEditor 
            value={value} 
            onChange={setValue} 
            height={height} 
            previewOptions={{
                rehypePlugins: [[rehypeSanitize]]
            }}
        />
        <div className={styles.but}>
            <div  >
                <Stack direction='horizontal' >
                    <Button 
                        variant="secondary"
                        onClick={onClickCancel}>
                        cancel
                    </Button>
                    <div className={styles.padd}> </div>
                    <Button
                        variant="success"
                        onClick={onClickSuccess}>
                        { confirmText }
                    </Button>
                </Stack>
            </div>

        </div>
        </div>
    );
}

export default MarkdownEditor;