import React, { MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { toogleCartHidden } from './../../redux/cart/cart.actions';
import { selectCartItemsQuantity } from './../../redux/cart/cart.selectors'

import {ReactComponent as ShoppingIcon} from './../../assets/shopping-icon.svg';
import { iItem } from './../../interfaces/item-interface';
import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toogleCartHidden, itemCount} : { toogleCartHidden: MouseEventHandler, itemCount:number}) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon />
        <span className='item-count'>{itemCount}</span>
    </div>
);
const mapStateToProps = createStructuredSelector({ 
    itemCount : selectCartItemsQuantity
})
const mapDispatchToProps = (dispatch: any) => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})
export default connect( mapStateToProps, mapDispatchToProps)(CartIcon);