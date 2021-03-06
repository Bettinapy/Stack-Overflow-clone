import * as APIUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const receiveCurrentUser = ({user, questions={}, answers={}}) => {
    
    return {
        type: RECEIVE_CURRENT_USER,
        user, 
        questions,
        answers
    }
};

export const logoutCurrentUser = () => {
    
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = (errors) => {
   
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    }
}
export const login = (user) => {
    
    return (dispatch) => {
        
        return (
            APIUtil.login(user).then(
                (user) => dispatch(receiveCurrentUser(user)),
                (response) => dispatch(receiveErrors(response.responseJSON))
            )
        )
    }
};

export const logout = () => {
    
    return (dispatch) => {
      
        return (
            APIUtil.logout().then(
                () => dispatch(logoutCurrentUser()),
                (response) => dispatch(receiveErrors(response.responseJSON))
            )
        )
    }
};

export const signup = (user) => {
    
    return (dispatch) => {        
        return (
            APIUtil.signup(user).then(
                (returnUser) => {                    
                    return (
                        dispatch(receiveCurrentUser(returnUser))
                    )
                },
                (response) => {                    
                    return (
                        dispatch(receiveErrors(response.responseJSON))
                    )

                }
            )
        )
    }
}