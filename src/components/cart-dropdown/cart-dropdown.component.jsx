import React from 'react';
import Button from '../custom-button/custom-button.component.jsx'
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component.jsx'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selector.js'


const CartDropDown =({cartItems}) =>(
    <div className="cart-dropdown">
        <div className="cart-item">
            {
                cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <Button>Go To Checkout</Button>
    </div>
)

const mapStateToProps=(state) => ({
    cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropDown); 