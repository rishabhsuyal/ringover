import React,{useContext} from 'react';
import './CartBlock.css';
import { Cart } from '../../Context/Context';


function CartBlock({ obj }) {
   const {image, title, price, quantity}=obj
   const {cart,setcart}=useContext(Cart);
   function handleDelete(){
    setcart( cart.filter( (item)=>item.id!=obj.id ))
   }

    return (
        <div className='cart-block-container'>
            <div className='cart-block-subcontainer'>
                <img src={image} className='cart-block-image' />
                <h3>{title}</h3>
                
            </div>
            <div className='cart-block-subcontainer'>
                <h3>{`${quantity} X $${price}`}</h3>
                <button onClick={handleDelete} className='cart-button'>D</button>
            </div>

        </div>
    )
}

export default CartBlock