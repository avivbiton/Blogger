import React, { useState, useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';
import { validateAuth } from '../API/authAPI';


const RestrictedRoute = ({ component: Component, ...rest }) => {

    const [state, setState] = useState({ loaded: false, auth: false });

    useEffect(() => {
        validateAuth()
            .then(valid => {
                setState({ loaded: true, auth: valid });
            })
    }, [])

    if (state.loaded === false) return null;
    return (
        <Route {...rest} render={props => {
            return (
                state.auth === true ?
                    <Component {...props} />
                    : <Redirect to="/" />
            )
        }} />
    );
};


export default RestrictedRoute;