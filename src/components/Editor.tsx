import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import "@blocknote/core/style.css";
import "@blocknote/react/style.css";
import "@blocknote/core/fonts/inter.css";

interface EditorProps {
    onChange: () => void;
    initialContent?: string;
    editable?: boolean;
    onGetContent?: (content: string) => void; // Callback to expose content
}

const Editor: React.FC<EditorProps> = ({
    onChange,
    initialContent,
    editable,
    onGetContent,
}) => {
    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock[])
            : undefined,
    });

    // Call the onGetContent callback with the content
    const handleChange = () => {
        const content = JSON.stringify(editor.document); // Use your method
        if (onGetContent) {
            onGetContent(content);
        }
    };

    return (
        <div className="-mx-[55px] my-4">
            <BlockNoteView
                editor={editor}
                editable={editable}
                theme="light"
                onChange={handleChange}
            />
        </div>
    );
};

export default Editor;
