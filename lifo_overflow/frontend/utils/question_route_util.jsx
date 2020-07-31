import React from "react";
import { withRouter, Redirect } from "react-router";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const QuestionAuth = ({ component: Component, path, loggedIn, exact }) => {

    return (
        <Route
            path={path}
            exact={exact}
            render={props =>
                loggedIn ? <Component {...props} /> : 
                           <Redirect to={{
                                        pathname: "/login",
                                        search: "?question"
                                    }} />
                                }
        />
    )
};

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const QuestionAuthRoute = withRouter(connect(mapStateToProps)(QuestionAuth));