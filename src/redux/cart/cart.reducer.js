import ACTIONTYPE from './type.js';
const INITIAL_STATE = {
    hidden: true,
};


const CartReducer =(state=INITIAL_STATE ,action) => {

    switch(action.type) {
        case ACTIONTYPE.TYPE:
            return {
                ...state,
                hidden:!state.hidden
            }
        break;
        default:
            return state;
    }

}

export default CartReducer;