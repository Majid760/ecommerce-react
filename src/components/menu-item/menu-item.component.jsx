import React from 'react';
import {withRouter,Link} from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem=({title,imageUrl,size,history,urlLink,match})=>(

    console.log(history),
    console.log(urlLink),
    console.log('this is match url'+match.url),
    console.log('this is  url'+urlLink),
    console.log(urlLink+match.url),
    
    <div style={{ backgroundImage:`url(${imageUrl})` }}  
        className={`${size} menu-item`} 
        onClick={()=>history.push(`${match.url}${urlLink}`)}
        >
        <div className="background-image" ></div>
        
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW!</span>
        </div>
        
    </div>
   

);


export default withRouter(MenuItem);