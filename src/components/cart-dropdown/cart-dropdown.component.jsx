import React from 'react';
import Button from '../custom-button/custom-button.component.jsx'
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component.jsx'
import {connect} from 'react-redux'


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

const mapStateToProps=({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown); 