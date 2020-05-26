import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentUser } from './../../redux/user/user.actions';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from './../../assets/logo.svg';
import CartIcon  from './../cart-icon/cart-icon.component';   
import './header.styles.scss';
import CartDropdown from './../cart-dropdown/cart-dropdown-component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from './../../redux/cart/cart.selectors';
import { selectCurrentUser } from './../../redux/user/user.selectors';

const HeaderComponent = ({currentUser, hidden}:any) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/contact">CONTACT</Link>
            { currentUser && currentUser.displayName ? 
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link> 
            }
            <CartIcon></CartIcon>
        </div>
        { hidden ? null : <CartDropdown/>}
        
    </div>
)
//get state from root reducer
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(HeaderComponent);