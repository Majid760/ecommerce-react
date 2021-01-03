import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden } from '../../redux/cart/action.js'
import cart  from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'


const CartIcon =({toggleCartHidden, itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <img className="shopping-icon" src={cart} />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())   
});

const mapStateToProps = createStructuredSelector({
     itemCount: selectCartItemsCount
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);