import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import './collection-overview.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }:any) => (
    <div className='collections-overview'>{   
            collections.map( ({id, ...collectionProps} : {id:number} ) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
    }</div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionOverview);