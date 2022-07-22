import React from 'react';

import './ItemsNavbar.css';


function ItemsNavbar({title,icon,text}) {
  return (
    <div className='item-navbar-container'>
    <h1 className='item-heading' >{title}</h1>
    <div className='item-navbar-subcontainer'>
        <img className='search-icon' src={icon}/>
        {
          text!==""?<button className='button'>{text}</button>:null
        }
    </div>
    </div>
  )
}

export default ItemsNavbar