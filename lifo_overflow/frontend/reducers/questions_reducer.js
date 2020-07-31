import {RECEIVE_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from '../actions/question_actions';

const QuestionsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            return Object.assign({},state,{[action.question.id]:action.question});
        case REMOVE_QUESTION:
            let newState={};
            delete newState[action.questionId];
            return newState;
        default:
            return state;

    }
}

export default QuestionsReducer;