import React from 'react';
import './collection.style.scss';
import Button from '../custom-button/custom-button.component.jsx';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/action.js'

const Item=({item,addItem})=>{
        const{name,price,imageUrl}=item;
        return(
        <div className="collection-item">
                <div className="image"
                     style={{ 
                         backgroundImage:`url(${imageUrl})`
                      }}>
                </div>
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                <Button onClick={()=>addItem(item)} inverted>Add to cart</Button>
        </div>
)};

const mapDispatchToProps = (dispatch)=>({
        addItem:(item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(Item);