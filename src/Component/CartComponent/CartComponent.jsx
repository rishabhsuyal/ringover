import React,{useContext} from 'react';
import './CartComponent.css';
import CartBlock from '../CartBlock/CartBlock';
import { Cart } from '../../Context/Context';

function CartComponent() {
    const {cart,setcart}=useContext(Cart);
    
  return (
    <div>
    {
        cart.map(item=>
        <CartBlock  
        obj={item}
        />)
    }
    </div>
  )
}

export default CartComponent