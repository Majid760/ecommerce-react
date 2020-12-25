import React from 'react';
import Button from '../custom-button/custom-button.component.jsx'
import './cart-dropdown.style.scss';


const CartDropDown =() =>(
    <div className="cart-dropdown">
        <div className="cart-item"></div>
        <Button>Go To Checkout</Button>
    </div>
)

export default CartDropDown;