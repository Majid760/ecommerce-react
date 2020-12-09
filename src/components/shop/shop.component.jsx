import React from 'react';
import SHOPDATA from './shop-data.js'
import './shop.style.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';


class Shop extends React.Component {
    constructor(props) {
        super();
        this.state={
            collections:SHOPDATA,
        }
    }


    render() {
        const collections = this.state.collections;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Shop;