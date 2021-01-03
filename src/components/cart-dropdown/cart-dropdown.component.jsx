import React from 'react';
import Button from '../custom-button/custom-button.component.jsx'
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component.jsx'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selector.js'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/action.js'
import {withRouter} from 'react-router-dom';

const CartDropDown =({cartItems,history,dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>)
                : <span className="empty-message">Your cart is empty!</span>
            }
        </div>
        <Button onClick={()=>{history.push('/checkout');dispatch(toggleCartHidden())}}>Go To Checkout</Button>
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropDown)); 