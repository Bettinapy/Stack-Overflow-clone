import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
// import {signup, login, logout} from './utils/session_api_util';
import configureStore from './store/store';
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    ReactDOM.render(<Root store={store} />, root);
});