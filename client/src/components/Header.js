import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-dark text-white" style={{paddingTop: "3.5rem", paddingBottom: "3.54rem"}}>
            <div className="container text-center">
                <h1 className="display-2"><Link className="text-white text-decoration-none" to="/">Aviv Biton's Blog</Link></h1>
                <p className="lead">Web development & programming</p>
            </div>
        </header>
    )
}
