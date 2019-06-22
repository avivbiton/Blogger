import React from "react";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";

function Post({ id, title, date, image, history }) {

    return (
        <article className="card shadow-sm h-100">

            <button className="btn p-0" onClick={() => {
                history.push(`/post/${id}`)
            }} >
                <img src={image} className="post-card-img" alt={title}
                />
            </button>
            <div className="card-body">
                <h3 className="card-title">
                    {title}
                </h3>
            </div>
            <div className="card-footer">
                <small className="text-muted">Posted <Moment fromNow>{date}</Moment></small>
            </div>

        </article>
    )
}

export default withRouter(Post);
