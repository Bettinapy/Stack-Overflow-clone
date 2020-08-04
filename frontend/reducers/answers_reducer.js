import {
    RECEIVE_ANSWERS,
    RECEIVE_ANSWER,
    REMOVE_ANSWER
} from '../actions/answer_actions';

import {RECEIVE_QUESTION} from '../actions/question_actions';

const AnswersReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_QUESTION:
            return action.answers;
        case RECEIVE_ANSWERS:
            return action.answers;
        case RECEIVE_ANSWER:
            newState = Object.assign({}, state, { [action.answer.id]: action.answer })

            return newState;
        case REMOVE_ANSWER:
            newState = Object.assign({}, state)
            delete newState[action.answerId];
            return newState;
        default:
            return state;

    }
}

export default AnswersReducer;