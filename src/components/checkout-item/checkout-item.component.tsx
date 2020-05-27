import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { deleteItem, decreaseItem, addItem } from './../../redux/cart/cart.actions'

import {iItem} from '../../interfaces/item-interface';

const CheckoutItem  = ( {cartItem, addItem, deleteItem, decreaseItem}:any ) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'> {name} </span>
                <span className='quantity'> 
                    <div className='arrow decrease'  onClick={() => decreaseItem(cartItem)}> &#10094; </div> 
                    <span className="value">{quantity}</span>
                    <div className='arrow increase' onClick={ () => addItem(cartItem)}> &#10095;</div> 
                 </span>
            <span className='price'> {price} </span>
            <span className='remove-button' onClick={ ()=>{ deleteItem(cartItem)} }>&#10005;</span>
        </div>
    )
}
const mapDispatchToProps = (dispatch: any) => ({
    addItem : (item:iItem) => dispatch(addItem(item)),
    deleteItem: (item:iItem) => dispatch(deleteItem(item)),
    decreaseItem : (item:iItem) => dispatch(decreaseItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem);