import {
    RECEIVE_QUESTIONS, 
    RECEIVE_QUESTION, 
    REMOVE_QUESTION 
} from '../actions/question_actions';

import {RECEIVE_ANSWERS, RECEIVE_ANSWER, REMOVE_ANSWER} from '../actions/answer_actions';

const QuestionsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = {};
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            newState = Object.assign({}, state, { [action.question.id]: action.question })          
            return newState;
        case RECEIVE_ANSWER:
            newState = Object.assign({}, state, { [action.question.id]: action.question }) 
        case RECEIVE_ANSWERS:
            newState = Object.assign({}, state, { [action.question.id]: action.question }) 
        case REMOVE_QUESTION:
            newState = Object.assign({},state)
            delete newState[action.questionId];
            return newState;
        default:
            return state;

    }
}

export default QuestionsReducer;