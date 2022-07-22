import React from 'react'

import "./Block.css";

function Block({image,name,post,arr}) {
    return (
        <div className='blocks-container'>
        <img className='profile-image' src={image}/>
            <div className='text-block'>
                <h2 className='name-heading'>{name}</h2>
                <h3 className='post-heading'>{post}</h3>
                <div className='image-container'>
                    {arr.map(i=><img  className='icon-image' src={i} />)}
                </div>
            </div>

        </div>
    )
}

export default Block