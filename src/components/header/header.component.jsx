import React from 'react';
import {Link} from 'react-router-dom';
import logo  from '../../assets/crown.svg';
import './header.style.scss';
import {auth} from '../../firebase/firebase.util.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropDown from '../cart-dropdown/cart-dropdown.component.jsx';
import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector.js';
import {selectCurrentUser} from '../../redux/user/user.selector.js';

const Header=({currentUser,hidden})=>(

    <div className="header">
        <Link className="logo-container" to='/'>
            <img src={logo} className="logo" alt="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>Shop</Link>
            <Link className="option" to='/shop'>Contact</Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to='/signin'>SIGN IN</Link>
            }
            <CartIcon/> 
        </div>
        {hidden?null:<CartDropDown/>
}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);