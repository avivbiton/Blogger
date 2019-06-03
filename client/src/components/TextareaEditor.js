import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from 'draft-js';

export default function TextareaEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    
    return (
        <div className="editor">
            <Editor
                editorState={editorState}
                onChange={editorState => setEditorState(editorState)}
                placeholder="enter some text..."

            />
        </div>
    )
}
