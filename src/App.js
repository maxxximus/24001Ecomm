import "./css/App.css";
import "./css/Fullinfo.css"
import Shirt from "./Components/Shirt";
import Item from "./Model/Item";
import { useEffect, useState } from "react";
import { def } from "./Data/definitions";
import Basket from "./Components/Basket";
import BasketModel from "./Model/BasketModel";
import Fullinfo from "./Components/Fullinfo";
import gg from './tshirt.png'

function App() {
  const [shirts, setShirts] = useState(def);
  const [page, setPage] = useState(-1);
  const [multipage, setMultipage] = useState(1)
  let [slicedata, setSlicedata] = useState(def.slice(0,12))
  const[toggleBasket, setToggleBasket] = useState(false)
   
  const [basket, setBasket] = useState([
    // new BasketModel("London", "M", "55886", 27.40, 2),

  ])





  function itemcode(code) {
  return function (element) {
    return element.itemcode === code;
  };
}


  

// // const isLargeNumber = (element) => element.itemcode == "00000" ;
// function updateQuantity( code1, new1) {
//   const zz = basket.findIndex(itemcode(code1));
//   if ( zz != -1){
//   basket[zz].quantity += 1;
 
// } else{
  
// let temp = [...basket, new1]

// setBasket(temp)
// console.log();
// }
// }



const addToBasket = (a)=>{
  const zz = basket.findIndex(itemcode(a.itemcode));
  console.log("qqqqq", (a.itemcode));

  if ( zz != -1){
    basket[zz].quantity += 1;
    setBasket([...basket])
   
  }else{
// let newItem = new BasketModel("Mike", "M", "67888", 44.90, 1)
// updateQuantity("67888", newItem)

setBasket([...basket, a])
  }

}
function CallBack(index) {
  setPage(index);
}

function next(first) {
  let x = 1 + first
  setMultipage(x);
  let z = shirts.slice(multipage * 12,(multipage  * 12)+ 12)
  setSlicedata(z)
  console.log("sliec",z);
}

 console.log(basket);

  return (

    <div><span>counter: {multipage}</span>
      <header className="App-header">
        
        <div id="logo"><div id="nav"></div> <div id="basket"><Basket cart1={basket} /></div></div>
      
          <span>Page{page}</span>
       

          <div id="left">
          {slicedata.map((option, index) => {
         
              return <Shirt  label={option} ind={index} action={CallBack}/>;
            
          })} 

          <button onClick={()=>{next(multipage)}}>Next</button>
          </div>
       
          
          <div id="right">
           <Fullinfo label={slicedata[page]} 
           action={addToBasket} 
           action2={addToBasket} 
           cart={basket} 
           index={page} 
           toggle={toggleBasket}
           actiontoggle={setToggleBasket}
           />
        </div>



      
    
  
      </header>
    </div>

  );
}

export { App };
