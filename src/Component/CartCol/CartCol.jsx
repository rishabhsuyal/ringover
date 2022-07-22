import React, { useContext } from 'react';
import { Cart } from '../../Context/Context';
import ItemsNavbar from '../ItemsNavbar/ItemsNavbar';
import CartIcon from '../../Photos/cart.png'
import './CartCol.css';
import CartComponent from '../CartComponent/CartComponent';

function CartCol() {

  const { cart, setcart } = useContext(Cart);
  return (
    <div className='cart-container'>
      <ItemsNavbar title={"CART"} icon={CartIcon} text="" />
      <div className='cart-block'>
        <CartComponent />
      </div>
      <div className='order-button'>
        <button className='cart-button-order'>Order</button>
      </div>
      
    </div>
  )
}

export default CartCol