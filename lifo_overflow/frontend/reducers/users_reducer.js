import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_QUESTION, RECEIVE_QUESTIONS} from '../actions/question_actions';


const usersReducer = (state = {}, action) => {
   
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_QUESTION:
            return Object.assign({}, state, {[action.user.id]:action.user});
        case RECEIVE_QUESTIONS:
            return action.users
        default:
            return state;
    }
}

export default usersReducer;