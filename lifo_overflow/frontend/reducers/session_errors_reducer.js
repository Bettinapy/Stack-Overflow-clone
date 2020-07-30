import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { LOCATION_CHANGE } from 'react-router-redux'
const defaultErrors = {
    session_error: []
}

const sessionErrorsReducer = (state = defaultErrors, action) => {
   debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign({}, { session_error: action.errors });
        case LOCATION_CHANGE:
            return defaultErrors;
        case RECEIVE_CURRENT_USER:
            return defaultErrors;
        default:
            return state;
    }
}

export default sessionErrorsReducer;