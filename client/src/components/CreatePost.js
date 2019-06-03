import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from 'draft-js';

export default function CreatePost() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());



    function toggleBold() {
        console.log("bold");
        setEditorState(RichUtils.toggleInlineStyle(
            editorState,
            "BOLD"
        ));
    }

    return (
        <div className="container">
            <h1>Editor</h1>
            <div className="border" style={{ height: "400px" }}>
                <button className="btn btn-secondary" onClick={() => toggleBold()}>Bold</button>
                <Editor
                    editorState={editorState}
                    onChange={editorState => setEditorState(editorState)}
                    placeholder="enter some text..."

                />
            </div>
        </div>
    )
}


