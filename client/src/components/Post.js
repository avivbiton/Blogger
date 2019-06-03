import React from "react";
import Moment from "react-moment";

export default function Post({ title, text, date }) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h1 className="card-title">
                   {title}
                </h1>
                <p className="card-text">{text}</p>
                <button className="btn btn-primary">Read More<i className="ml-2 align-middle fas fa-arrow-right"></i></button>
            </div>
            <div className="card-footer">
                <small className="text-muted">Posted <Moment fromNow>{date}</Moment></small>
            </div>
        </div>
    )
}
