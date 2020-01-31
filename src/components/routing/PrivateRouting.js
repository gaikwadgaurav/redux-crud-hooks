import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const users = JSON.parse(localStorage.getItem('users'));
    return (
        <Route {...rest} render={props => (
            users !== undefined ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    );
}
export default PrivateRoute