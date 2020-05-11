import React from 'react';
import SHOP_DATA from './shop.data'

import CollectionPreview from './../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        //  const collections = this.state.collections;
        //  shortcut thats same as above!!!
        const {collections} = this.state;        
        return (<div className="shopPage">
            {
                collections.map( ({id, ...collectionProps} : {id:number} )=> (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>)
    }
}
export default ShopPage;