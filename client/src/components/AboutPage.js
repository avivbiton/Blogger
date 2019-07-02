import React, { Component } from 'react'

export default class AboutPage extends Component {
    render() {
        return (
            <div className="container">
                <h3>Hello, I'm Aviv Biton</h3>
                <p className="lead">Developing and blogging is a personal enjoyment for me. I aim to take a step further and make it into a professional career. I keep a portfolio with all of my personal projects, most of them are also open-source (including this website!). I encourage you to check it out.</p>
                <div className="row" style={{ fontSize: "150%" }}>
                    <div className="col-sm-1">
                        <div className="font-weight-bold">Website:</div>
                    </div>
                    <div className="col-sm-1">
                        <a href="https://avivbiton.website" target="_blank" rel="noopener noreferrer">https://avivbiton.website</a>
                    </div>

                </div>
                <div className="row" style={{ fontSize: "150%" }}>
                    <div className="col-sm-1">
                        <div className="font-weight-bold">Github:</div>
                    </div>
                    <div className="col-sm-1">
                        <a href="https://github.com/avivbiton" target="_blank" rel="noopener noreferrer">https://github.com/avivbiton</a>
                    </div>
                </div>
                <div className="row" style={{ fontSize: "150%" }}>
                    <div className="col-sm-1">
                        <div className="font-weight-bold">Email:</div>
                    </div>
                    <div className="col-sm-1">
                       aviv445@gmail.com
                    </div>
                </div>
            </div>
        )
    }
}
