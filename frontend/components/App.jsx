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
import QuestionShowContainer from '../components/question/question_show_container';
import QuestionListContinaer from '../components/question/question_list_container';
import HomePage from './home_page';
import EditAnswerFormContainer from './answers/edit_answer_form_container';


const App = () => (
    <div id="content" className="grid grid-center">
   
        <GreetingContainer />
   
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        
        <Route exact path="/questions" component={QuestionListContinaer} />
        <Route exact path='/search' component={QuestionListContinaer} />

        <QuestionAuthRoute exact path="/questions/ask" component={CreateQuestionFormContainer} />
        <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
        <QuestionAuthRoute exact path="/questions/:questionId/edit" component={EditQuestionFormContainer} />
        <QuestionAuthRoute exact path="/answers/:answerId/edit" component={EditAnswerFormContainer} />
        <Route exact path="/" component={HomePage} />
    </Switch>
    </div>
);

export default App;