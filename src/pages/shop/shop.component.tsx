import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from './../../redux/shop/shop.selectors';
import CollectionPreview from './../../components/collection-preview/collection-preview.component';


const ShopPage = ({collections}:any) => (        
        <div className="shopPage">
            {
                collections.map( ({id, ...collectionProps} : {id:number} ) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
)
const mapStateToProps = () => createStructuredSelector({
    collections : selectCollections
});
export default connect(mapStateToProps)(ShopPage);