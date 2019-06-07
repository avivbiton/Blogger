import React, { useState } from "react";
import { stateToHTML } from "draft-js-export-html";
import RichTextEditor from "./RichTextEditor";

export default function CreatePost() {

    const [html, setHtml] = useState(null);

    function onEditorChange(content) {
        const html = stateToHTML(content);
        setHtml(html);
    }

    return (
        <div className="container">
            <h1>Editor</h1>
            <RichTextEditor setOnChange={content => onEditorChange(content)} />
            <div className="py-4" dangerouslySetInnerHTML={{__html: html}}>
                
            </div>
        </div>
    )
}


