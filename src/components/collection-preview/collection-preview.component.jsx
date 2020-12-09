import React from 'react';
import './collection-preview.style.scss'
import Item from '../../components/collection-item/collection-item.component.jsx';

const CollectionPreview=({title,items}) => {
  
return  <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,idx) => idx < 4 )
                         .map(({id, ...othersItemProps})=>
                            (
                                <Item key={id} {...othersItemProps}></Item>
                            )
                    )
                }
            </div>
        </div>

} 

export default CollectionPreview;
