import React from 'react';
import CollectionItem from './../collection-item/collection-item.component';

import './collection-preview.style.scss';
import { iItem } from '../../interfaces/item-interface';

const CollectionPreview = ({title, items }:any) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map((item:iItem) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)
export default CollectionPreview;