import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_QUESTION, RECEIVE_QUESTIONS} from '../actions/question_actions';
import {RECEIVE_ANSWER, RECEIVE_ANSWERS} from '../actions/answer_actions';

const usersReducer = (state = {}, action) => {
   
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        debugger
        case RECEIVE_QUESTION:
            // return Object.assign({}, state, {[action.user.id]:action.user});
            return Object.assign({}, state, action.users);
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_QUESTIONS:
            return Object.assign({}, state, action.users);
        case RECEIVE_ANSWERS:
            return Object.assign({}, state, action.users);
        default:
            return state;
    }
}

export default usersReducer;