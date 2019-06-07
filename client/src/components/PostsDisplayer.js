import React, { useState, useEffect } from "react";
import Post from "./Post";
import { fetchAll } from "../API/postAPI";

export default function PostsDisplayer() {

    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        fetchAll()
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="container">

            {posts.map(post => <Post key={post._id} id={post._id} title={post.title} text={post.text} date={post.date} />)}

        </div>
    )
}
