import React from 'react';
import './collection.style.scss';


const Item=({id,name,price,imageUrl})=>(

        <div className="collection-item">
                <div className="image"
                     style={{ 
                         backgroundImage:`url(${imageUrl})`
                      }} ></div>
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
            </div>

);

export default Item;