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
    // let design=0;
    // for(let i=0;i<changes.length;i++){
    //   if(changes[i].type=="design")
    //    design=max(design,changes[i].data[0]);
    // }
    // if(design!=0){
    //     console.log(design,data); 
    //     setdata(data.slice(0,design))
    // }
  }

  function handleCost(){
    // let start=1e9,end=-1e9;
    // for(let i=0;i<changes.length;i++){
    //   if(changes[i].type=="cost")
    //    {
    //     start=min(start,changes[i].data[0]);
    //     end=max(end,changes[i].data[1]);
    //    }
    // }
    // if(start!=1e9 && end!=-1e9){
    //   setdata(data.filter((item)=>item.price>=start && item.price<=end));
    // }

  }
  function handleReset(){
    setdata(backup);
    setchanges([]);
  }
  function handleChanges(){
    console.log(changes);
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
    let design=0;
    for(let i=0;i<changes.length;i++){
      if(changes[i].type=="design")
       design=max(design,changes[i].data[0]);
    }
    if(design!=0){
        setdata(data.slice(0,design))
    }
   
    // handleDesign();
    // handleCost();
  }

  const cost=[
    {id:1,title:"Rs. 1500-4000",data:[1500,4000],type:"cost"},
    {id:2,title:"Rs. 4001-7000",data:[4001,7000],type:"cost"},
    {id:3,title:"Rs. 7001+",data:[7000,1000000],type:"cost"}
  ];
  const design=[{id:10,title:"2",data:[2],type:"design"},{id:20,title:"3",data:[3],type:"design"},{id:30,title:"3+",data:[6],type:"design"}];
  const type=[{id:11,title:"Loafers",data:"L",type:"d"},{id:21,title:"Sneakers",data:"S",type:"d"}];


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