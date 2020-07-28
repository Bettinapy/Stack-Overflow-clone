//define routes in App.jsx
import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route} from 'react-router-dom';
const App = () => (
    <>
    <div>
        <h1>lifo overflow auth</h1>
        <GreetingContainer />
    </div>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    </>
);

export default App;