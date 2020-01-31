import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, location, ...rest }) => {
    const users = JSON.parse(localStorage.getItem('users'));
    return (
        <Route {...rest} render={props => (
            !users ? <Component {...props} />
                : <Redirect to='/home' />
        )} />
    );
}
export default PublicRoute
