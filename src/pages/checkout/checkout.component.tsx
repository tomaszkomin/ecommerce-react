import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems,selectCartTotal } from './../../redux/cart/cart.selectors';
import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ( {cartItems , cartTotal}:any) => (
    <div className='checkout-page'> 
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>{
            cartItems.map( (cartItem: any) =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )}
        <div className='total'>
            <span>TOTAL: {cartTotal}</span>
        </div>
        <div className='test-warning'>
            <h2>
                * THIS IS A TEST, USE THOOSE CREDENTIALS
                <br/>
                4242 4242 4242 4242 - 01/21 CVV: 123
            </h2>
        </div>
        <StripeCheckoutButton className="button" price={cartTotal}/>
    </div>
)
export const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage); 