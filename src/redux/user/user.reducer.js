import {UserActionTypes} from './user.type.js';
const INITIAL_STATE={
    currentUser:null
};

const userReducer = (state=INITIAL_STATE,action)=>{

    switch(action.type)
    {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
        break;
        default:
            return state;
    }
}

export default userReducer;