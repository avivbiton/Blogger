import React, { useState } from "react";
import { stateToHTML } from "draft-js-export-html";
import RichTextEditor from "./RichTextEditor";
import { createPost } from "../API/postAPI";
import { withRouter } from "react-router-dom";
import { useInput } from "../utils/inputHook";


function CreatePost({ history }) {

    const { value:title, bind:bindTitle } = useInput("");
    const { value:image, bind:bindImage } = useInput("");
    const [html, setHtml] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function onEditorChange(content) {
        const html = stateToHTML(content);
        setHtml(html);
    }


    return (
        <div className="container">
            <h1>New Post</h1>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label for="postTitle">Title</label>
                        <input type="text" id="postTitle" className="form-control" {...bindTitle} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="postImage">Local Image path</label>
                        <input type="text" id="postImage" className="form-control" {...bindImage} />
                    </div>
                </div>
                <div className="col-12">
                    <RichTextEditor setOnChange={content => onEditorChange(content)} />
                    <div className="py-4" dangerouslySetInnerHTML={{ __html: html }}>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary btn-lg" disabled={isLoading}
                        onClick={() => { 
                            setIsLoading(true);
                            createPost(title, image, html)
                                .then(() => history.push("/"))
                                .catch(error => console.error(error));
                        }}>POST</button>
                </div>
            </div>
        </div>
    )
}




export default withRouter(CreatePost);