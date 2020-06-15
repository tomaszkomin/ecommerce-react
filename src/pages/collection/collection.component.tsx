import React from 'react';
import {connect} from 'react-redux';
import './collection.component.scss';

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection, selectCollections } from '../../redux/shop/shop.selectors'
import ShopPage from '../shop/shop.component'; 
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CollectionPage = ({collection} : any) => {
    const { title, items } = collection
    console.log("COLLECTION FILTRED ");
    console.log(collection);
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map( (item:any) => (
                     <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
)}
const mapStateToProps = (state: any, ownProps: any) => ({
    collection: selectCollection( ownProps.match.params.collectionId )(state)
});
export default connect(mapStateToProps)(CollectionPage);