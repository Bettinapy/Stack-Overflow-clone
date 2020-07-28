import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultErrors = {
    session_error: []
}

const sessionErrorsReducer = (state = defaultErrors, action) => {
   
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign({}, { session_error: action.errors });
        case RECEIVE_CURRENT_USER:
            return defaultErrors;
        default:
            return state;
    }
}

export default sessionErrorsReducer;