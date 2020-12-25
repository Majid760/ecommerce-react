import React from 'react';
import {connect} from 'react-redux';
import toggleCartHidden  from '../../redux/cart/action.js'
import cart  from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss'

const CartIcon =({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <img className="shopping-icon" src={cart} />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);