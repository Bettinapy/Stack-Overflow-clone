import React from "react";
import { withRouter, Redirect } from "react-router";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// why we need withRouter here? We did not use history, match or location prop

// what is exact? # same as <Route exact>
const Auth = ({ component: Component, path, loggedIn, exact }) => {

    return (
        <Route
            path={path}
            exact={exact}
            render={props =>
                !loggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
};

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));