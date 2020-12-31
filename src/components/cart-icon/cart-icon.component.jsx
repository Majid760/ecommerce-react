import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden } from '../../redux/cart/action.js'
import cart  from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

const CartIcon =({toggleCartHidden, itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <img className="shopping-icon" src={cart} />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())   
});

const mapStateToProps = (state) => ({
     itemCount: selectCartItemsCount(state)
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);