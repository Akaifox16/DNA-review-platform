import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { Button, Stack } from "react-bootstrap";
import { MarkdownEditorProps } from "../../lib/type";

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
        <MDEditor value={value} onChange={setValue} height={height} />
        <div>
            <Stack direction='horizontal' >
                <Button
                    variant="secondary"
                    onClick={onClickCancel}>
                    cancel
                </Button>
                <Button
                    variant="success"
                    onClick={onClickSuccess}>
                    { confirmText }
                </Button>
            </Stack>
        </div>
        </div>
    );
}

export default MarkdownEditor;