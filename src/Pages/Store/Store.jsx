import React from 'react'
import FilterCol from '../../Component/FilterCol/FilterCol';
import CartCol from '../../Component/CartCol/CartCol';
import ItemsCol from '../../Component/ItemsCol/ItemsCol';
import './Store.css';

function Store() {
  return (
    <div className='home-container'>
      <FilterCol />
      <ItemsCol />
      <CartCol />
    </div>
  )
}

export default Store