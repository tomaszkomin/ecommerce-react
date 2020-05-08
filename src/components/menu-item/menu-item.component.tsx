import React from 'react';
import "./menu-item.styles.scss"
import { MenuItemInterface } from './../../interfaces/menu-interface';

const MenuItem = ( {id, title, imageUrl, size} : MenuItemInterface) => (    
    <div className={`${size} menu-item `}>
        <div className='background-image' style={{backgroundImage: `url('${imageUrl}')`}}/>          
        <div className="content">
            <h1 className = "title">{title.toUpperCase()}</h1>
            <span className = "subtitle">BUY NOW!</span>
        </div>
    </div>    
);
export default MenuItem;