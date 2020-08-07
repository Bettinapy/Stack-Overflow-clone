import * as UserApiUtil from '../utils/user_api_util';
import {receiveCurrentUser} from './session_actions';

export const fetchUser = (currentuserId) => {
    return dispatch => {
        return UserApiUtil.fetchUser(currentuserId)
            .then((payload) => dispatch(receiveCurrentUser(payload)))
    }
}

