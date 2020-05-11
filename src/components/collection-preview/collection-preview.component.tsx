import React from 'react';
import CollectionItem from './../collection-item/collection-item.component';

import './collection-preview.style.scss';
const CollectionPreview = ({title, items }:any) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items
            .filter(( items:{} ,idx:number) => idx < 4)
            .map((item:any)  => (
                <CollectionItem key={item.id} {...item}/>
            ))
        }
        </div>
    </div>
)
export default CollectionPreview;