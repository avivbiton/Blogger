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

            <div className="row">
                {posts.map(post =>
                    <div key={post._id} className="col-lg-4 col-md-6 mb-4">
                        <Post id={post._id} title={post.title}
                            date={post.date} image={post.image} />
                    </div>
                )}
            </div>

        </div>
    )
}
