import React from 'react';

import './collection-item.stye.scss';

const CollectionItem = ({id, name, price, imageUrl}:any) => (
    <div className='collection-item'>
        <div className='image'
            style={{backgroundImage: `url('${imageUrl}')`}}
        />
        <div className="collection-footer">
            {/* <img src={imageUrl} /> */}
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)
export default CollectionItem;