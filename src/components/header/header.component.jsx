import React from 'react';
import {Link} from 'react-router-dom';
import logo  from '../../assets/crown.svg';
import './header.style.scss';
import {auth} from '../../firebase/firebase.util.js';
import {connect} from 'react-redux';

const Header=({currentUser})=>(

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
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);