import ACTIONTYPE from './type.js';
import {addItemToCart} from './cart.util.js'
const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
};


const CartReducer =(state=INITIAL_STATE ,action) => {

    switch(action.type) {
        case ACTIONTYPE.TYPE:
            return {
                ...state,
                hidden:!state.hidden
            }
        break;
        case ACTIONTYPE.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
            break;
        default:
            return state;
    }

}

export default CartReducer;