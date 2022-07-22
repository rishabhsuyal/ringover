import React,{useContext,useState} from 'react';
import './SideBarBlock.css';
import { Cart } from '../../Context/Context';


function SideBarBlock({title,arr}) {
  const { changes, setchanges } = useContext(Cart);
  
  function handleFilter(e){
    setchanges([...changes,e])
  }

  return (
    <div>
    <h3>{title}</h3>
    {
        arr.map(item=>
        <div>
        <input onChange={()=>handleFilter(item)}  type='checkbox'/>
        <label className='label'>{item.title}</label>
        </div>
        )
    }
    </div>
  )
}

export default SideBarBlock