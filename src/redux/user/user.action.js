import {UserActionTypes} from './user.type.js';
export const setCurrentUser = (user)=>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload:user,
})