import React from 'react'
import cookie from "cookie";
import { Navigate } from 'react-router';

export default function ProtectedRoute(props) {
    const { component: Component, ...rest } = props

    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie);
        return cookies["loggedIn"] ? true : false;
    };


    return (
        checkAuth() === true ? (<Component {...rest} />) : (<Navigate to="/login" />)
    );
};


