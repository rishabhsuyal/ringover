import React from 'react';
import ItemsNavbar from '../ItemsNavbar/ItemsNavbar';
import ShoeCollection from '../ShoeCollection/ShoeCollection';
import search from '../../Photos/search.webp';
import './ItemsCol.css';

function ItemsCol() {
  return (
    <div className='items-container'>
    <ItemsNavbar title="SHOES" icon={search} text="sort by" />
    <ShoeCollection/>
    </div>
  )
}

export default ItemsCol