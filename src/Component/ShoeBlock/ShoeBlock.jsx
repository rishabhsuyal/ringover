import React from 'react';
import "./ShoeBlock.css";
import Start from '../../Photos/star.png';

function ShoeBlock({ image, title, price, id ,bgcolor}) {
    return (
        <div className='shoe-block-container'>
            <img className='shoe-block-image' src={image} />
            <div className='shoe-info'>
                <h2 className='shoe-block-heading'>{title}</h2>
                <div className='shoe-block-subcontainer'>
                    <h2 className='price-heading'>{`Rs. ${price}/-`}</h2>
                    <img className='reviews-image' src={Start} />
                </div>
            </div>
        </div>
    )
}

export default ShoeBlock