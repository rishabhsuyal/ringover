import React,{useContext} from 'react';
import './FilterCol.css';
import ItemsNavbar from '../ItemsNavbar/ItemsNavbar';
import filter from '../../Photos/filter.png';
import SideBarBlock from '../SideBarBlock/SideBarBlock';
import ColourBlock from '../ColourBlock/ColourBlock';
import { Cart } from '../../Context/Context';
function FilterCol() {
  const {data,setdata,changes, setchanges,backup } = useContext(Cart);
  function max(a,b){
    return a>b?a:b;
  }
  function min(a,b){
    return a>b?b:a;
  }
  
  function handleDesign(){
    let design=-1e9;
    for(let i=0;i<changes.length;i++){
      if(changes[i].type=="design")
       design=max(design,changes[i].data[0]);
    }
    if(design>0){
      if(design!=1000)
       {
        console.log(design); 
        setdata(data.slice(design))
       }
    }
  }

  function handleCost(){
    let start=1e9,end=-1e9;
    for(let i=0;i<changes.length;i++){
      if(changes[i].type=="cost")
       {
        start=min(start,changes[i].data[0]);
        end=max(end,changes[i].data[1]);
       }
    }
    if(start!=1e9 && end!=-1e9){
      setdata(data.filter((item)=>item.price>=start && item.price<=end));
    }
    console.log(start,end);

  }
  function handleReset(){
    setdata(backup);
  }
  function handleChanges(){
    handleDesign();
    handleCost();
    setchanges([]);
  }

  const cost=[
    {id:1,title:"Rs. 1500-4000",data:[1500,4000],type:"cost"},
    {id:2,title:"Rs. 4001-7000",data:[4001,7000],type:"cost"},
    {id:3,title:"Rs. 7001+",data:[7000,1000000],type:"cost"}
  ];
  const design=[{id:1,title:"2",data:[2],type:"design"},{id:1,title:"3",data:[3],type:"design"},{id:1,title:"3+",data:[1000],type:"design"}];
  const type=[{id:1,title:"Loafers",data:"L",type:"d"},{id:1,title:"Sneakers",data:"S",type:"d"}];


  return (
    
    <div className='filter-col-container'>
    <ItemsNavbar title="FILTER" icon={filter} text="" />
    <div className='filter-col-sub'>
      <SideBarBlock title="Cost" arr={cost}/>
      <ColourBlock/>
      <SideBarBlock title="Design Templates" arr={design}/>
      <SideBarBlock title="Type" arr={type} />
    </div>
    <div className='filter-order-button'>
      <button className='filter-cart-button-order' onClick={handleChanges}>Apply</button>
      <button className='filter-cart-button-order' onClick={handleReset}>Reset</button>
    </div>
    </div>
  )
}

export default FilterCol