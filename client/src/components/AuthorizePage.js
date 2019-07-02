import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthKey } from "../redux/actions/authActions";
import { applyAuthKey } from "../API/authAPI";

class AuthorizePage extends Component {
    constructor() {
        super();
        this.state = {
            key: ""
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submit() {
        this.props.setAuthKey(this.state.key);
        this.props.history.push("/");
        applyAuthKey(this.state.key);
    }

    render() {
        return (
            <div className="container">
                <input type="text" name="key" onChange={this.handleChange.bind(this)} value={this.state.key} />
                <button type="button" onClick={this.submit.bind(this)}>Submit</button>
            </div>
        )
    }
}



export default connect(null, { setAuthKey })(withRouter(AuthorizePage));