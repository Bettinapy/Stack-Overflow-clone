import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import { LOCATION_CHANGE } from 'react-router-redux'
const defaultErrors = {
    session_error: []
}

const sessionErrorsReducer = (state = defaultErrors, action) => {
 
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign({}, { session_error: action.errors });
        case CLEAR_ERRORS:
            return defaultErrors;
        case RECEIVE_CURRENT_USER:
            return defaultErrors;
        default:
            return state;
    }
}

export default sessionErrorsReducer;