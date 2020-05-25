import React from 'react';
import FormButton from './../form-button/form-button.component'

import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cart.actions';
import { iItem } from './../../interfaces/item-interface'
import './collection-item.stye.scss';

const CollectionItem = ({item, addItem }:{item:iItem,addItem:any})=> {
    const { id, name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className='image'
                style={{backgroundImage: `url('${imageUrl}')`}}
            />
            <div className="collection-footer">
                {/* <img src={imageUrl} /> */}
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <FormButton onClick={() => addItem(item)} inverted>
                 ADD TO CART
            </FormButton>
        </div>
)}
const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item:iItem) => dispatch(addItem(item))
})
export default connect( null, mapDispatchToProps)(CollectionItem); 