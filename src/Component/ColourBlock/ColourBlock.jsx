import React from 'react'
import './ColourBlock.css';
function ColourBlock() {
  return (
    <div>
    <h3>Colours</h3>
    <div className='colour-block-container'>
    <div style={{backgroundColor:'blue'}} className='colour-block'></div>
    <div style={{backgroundColor:'pink'}} className='colour-block'></div>
    <div style={{backgroundColor:'yellow'}} className='colour-block'></div>
    <div style={{backgroundColor:'green'}} className='colour-block'></div>
    </div>

    </div>
  )
}

export default ColourBlock