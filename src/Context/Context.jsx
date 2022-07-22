import {createContext, useState} from 'react';
export const Cart=createContext();

const Context = ({children}) => {  
  const product=
        [
            {
                id: 1,
                image: "https://i.im.ge/2022/07/21/FdBayS.jpg",
                title: "KSL 01",
                price: 2000,
            },
            {
                id: 2,
                image: "https://i.im.ge/2022/07/21/FdBUWK.png",
                title: "KSW 01",
                price: 2500,
            },
            {
                id: 3,
                image: "https://i.im.ge/2022/07/21/FdBayS.jpg",
                title: "ROYALS 01",
                price: 3000,
            },
        {
            id: 4,
            image: "https://i.im.ge/2022/07/21/FdBayS.jpg",
            title: "KSL 02",
            price: 3500,
        },
        {
            id: 5,
            image: "https://i.im.ge/2022/07/21/FdBUWK.png",
            title: "KSW 02",
            price: 2000,
        },
        {
            id: 6,
            image: "https://i.im.ge/2022/07/21/FdBayS.jpg",
            title: "ROYALS 02",
            price: 4500,
        }
    ]  

  const [backup, setbackup] = useState(product)
  const [cart, setcart] = useState([]);
  const [data,setdata]=useState(product);
  const [changes, setchanges] = useState([]);
  
    

  return (
    <Cart.Provider value={{cart,setcart,data,setdata,changes, setchanges,backup}}>
    {children}
    </Cart.Provider>
  )
}

export default Context;