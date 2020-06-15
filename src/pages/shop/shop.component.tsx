import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from './../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}:any) => { 
    console.log("++++++++++++++++++++++++MATCH ======================");
    console.log(match);
    return (        
        <div className="shopPage">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route> 
        </div>
    )
}

export default ShopPage;