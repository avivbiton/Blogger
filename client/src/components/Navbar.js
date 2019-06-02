import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="container text-muted text-center">
            <hr />
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-2 mb-2 mb-md-0">
                    <Link to="/" className="link-item">Posts</Link>
                </div>
                <div className="col-md-2 mb-2 mb-md-0">
                    <Link to="/" className="link-item">Contact Me</Link>
                </div>
                <div className="col-md-2 mb-2 mb-md-0">
                    <Link to="/" className="link-item">About</Link>
                </div>
                <div className="col-md-3">

                </div>
            </div>
            <hr />
        </nav>
    )
}

