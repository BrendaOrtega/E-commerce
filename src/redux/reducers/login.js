import {combineReducers} from 'redux'
import {
    FACEBOOK_LOGIN_SUCCESS,
    GOOGLE_LOGIN_SUCCESS,
    LOCAL_LOGIN_SUCCESS
} from '../actions/session.actions';

export function user(state={}, action){
    switch(action.type){
        case FACEBOOK_LOGIN_SUCCESS:
            return action.user;
        case GOOGLE_LOGIN_SUCCESS:
            return action.user;
        case LOCAL_LOGIN_SUCCESS:
            return action.user;
        case "LOGOUT_SUCCESS":
            return {};
        default:
            return state;
    }
}

// export const session = combineReducers({
//     user
// });

