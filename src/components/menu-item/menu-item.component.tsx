import React from 'react';
import "./menu-item.styles.scss"

const MenuItem = ({id, title, imageUrl, size}:any) => (    
    <div 
        className={`${size} menu-item`}
        style={{
            backgroundImage: `url('${imageUrl}')`
        }}
    >          
        <div className="content">
            <h1 className = "title">
                {title.toUpperCase()}
            </h1>
            <span className = "subtitle">
                BUY NOW!
            </span>
        </div>            
    </div>        
);
export default MenuItem;