import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import { iItem } from './../../interfaces/item-interface';

import CustomButton from '../form-button/form-button.component';
import CartItem from './../cart-item/cat-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems, history , dispatch }:any) => { return (
    <div className='cart-dropdown'>
        <div className ='cart-items' />
            <CustomButton onClick={()=> {
                    dispatch(toogleCartHidden())
                    history.push('/checkout');                    
            }}>
            GO TO CHECKOUT
            </CustomButton>
        {
            cartItems.length ?
            cartItems.map( (cartItem: iItem) => (
                <CartItem key={cartItem.id} item={cartItem}></CartItem>
            )) 
            :
            <span className='empty-message'>Your cart is empty</span>
        }
        </div>
)}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));