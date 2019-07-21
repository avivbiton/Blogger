import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchAll } from "../API/postAPI";
import Loading from "./Loading";
import { setPosts as cachePosts } from "../redux/actions/postActions";

function PostsDisplayer({ blogPosts, cachePosts }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (blogPosts.length === 0) {
            fetchAll()
                .then(data => {
                    setPosts(data);
                    cachePosts(data);
                });
        } else {
            setPosts(blogPosts);
        }
    }, [blogPosts, cachePosts]);

    if (posts.length === 0)
        return <LoadingDisplay />

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


function LoadingDisplay() {
    return (
        <div className="container text-center">
            <div className="lead">Fetching posts...</div>
            <Loading center width="3" height="3" />
        </div>
    )
}

const mapStateToProps = (state) => ({
    blogPosts: state.postReducer.posts
});

export default connect(mapStateToProps, { cachePosts })(PostsDisplayer);