//define routes in App.jsx
import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import CreateQuestionFormContainer from './question/create_question_form_container';
import EditQuestionFormContainer from './question/edit_question_form_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from '../utils/route_util';
import { QuestionAuthRoute } from '../utils/question_route_util';
const App = () => (
    <div id="content" className="grid grid-center">
   
        <GreetingContainer />
   
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <QuestionAuthRoute exact path="/questions/ask" component={CreateQuestionFormContainer} />
        <QuestionAuthRoute exact path="/questions/:questionId/edit" component={EditQuestionFormContainer} />
    </Switch>
    </div>
);

export default App;