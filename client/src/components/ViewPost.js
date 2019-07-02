import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { fetchPost } from "../API/postAPI";
import Moment from "react-moment";
import Loading from "./Loading";

function ViewPost({ history, match }) {

    const [post, setPost] = useState(false);

    useEffect(() => {
        const getPostFrombackend = async () => {
            const postId = match.params.id;
            try {
                const data = await fetchPost(postId);
                setPost(data);
            } catch {
                history.push("/not-found");
            }
        };
        getPostFrombackend();
    }, [match.params.id, history]);

    if(post === false) return <LoadingDisplay />

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={post.image} alt={post.title} style={{width: "100%", height: "350px"}} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3 className="display-4">{post.title}</h3>
                    <p className="lead bg-secondary text-white py-2 pl-2 rounded">Posted <Moment fromNow>{post.date}</Moment></p>
                    <hr />
                </div>
            </div>
            <div className="row">
                    <div className="col">
                        <p className="px-2 post-text" dangerouslySetInnerHTML={{__html: post.text}} />                          
                    </div>
                </div>
        </div>
    )
}


function LoadingDisplay() {
    return (
        <Loading center width="3" height="3" />
    )
}

export default withRouter(ViewPost);