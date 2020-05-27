import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems,selectCartTotal } from './../../redux/cart/cart.selectors';
import './checkout.styles.scss';
import CartItem from '../../components/cart-item/cat-item.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

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
        </div>
        {
            cartItems.map( (cartItem: any) =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <div className='total'>
            <span>TOTAL: {cartTotal}</span>
        </div>
    </div>
)
export const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage); 