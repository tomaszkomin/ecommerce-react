import React from 'react';
import { connect } from 'react-redux';
import { iItem } from './../../interfaces/item-interface';
import CustomButton from '../form-button/form-button.component';
import CartItem from './../cart-item/cat-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}:any) => { return (
    <div className='cart-dropdown'>
        <div className ='cart-items' />
        {
            cartItems.map( (cartItem: iItem) => (
                <CartItem key={cartItem.id} item={cartItem}></CartItem>
            ))
        }
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)}
const mapStateToProps = ({ cart: {cartItems}}:any) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown);