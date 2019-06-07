import React, { useState, useEffect } from "react";
import Post from "./Post";

export default function PostsDisplayer() {

    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        // do some api fetching here
        setPosts([{ id: 1, title: "Authentication with Express.js and JWT Tokens", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis architecto natus consequatur expedita officiis, eveniet rerum dignissimos eos inventore qui esse reprehenderit magni libero dolorum fuga omnis mollitia ut! Culpa harum architecto in recusandae, veniam, voluptatibus nihil totam facilis temporibus, reiciendis officiis voluptatum. Facilis exercitationem aut fugiat officia, iure dicta!", date: new Date(Date.now()) }, { id: 2, title: "Authentication with Express.js and JWT Tokens", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis architecto natus consequatur expedita officiis, eveniet rerum dignissimos eos inventore qui esse reprehenderit magni libero dolorum fuga omnis mollitia ut! Culpa harum architecto in recusandae, veniam, voluptatibus nihil totam facilis temporibus, reiciendis officiis voluptatum. Facilis exercitationem aut fugiat officia, iure dicta!", date: new Date(Date.now()) },]);
    }, []);

    return (
        <div className="container">

            {posts.map(post => <Post key={post.id} id={post.id} title={post.title} text={post.text} date={post.date} />)}

        </div>
    )
}
