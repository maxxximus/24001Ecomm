import "./css/App.css";

import 'bootstrap/dist/css/bootstrap.css';
import Shirt from "./Components/Shirt";
import Item from "./Model/Item";
import { useEffect, useState, useCallback } from "react";
import { def } from "./Data/definitions";
// import Basket from "./Components/Basket";
// import BasketModel from "./Model/BasketModel";
// import Fullinfo from "./Components/Fullinfo";
// import gg from "./tshirt.png";
// import Home from "./Components/Home";
// import Contact from "./Components/Fullbasket.";
import Navcart from "./Components/Navcart";
import Leftpanel from "./Components/Leftpanel";
import Fullbasket from "./Components/Fullbasket.";

// import { CartCheckFill } from "react-bootstrap-icons/dist";

// import Spinner from 'react-bootstrap/Spinner';
import Fullshirt from "./Components/Fullshirt.jsx";

function App() {

  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);
 
  const lenDataSet = def.length
  console.log("rrrrrr", lenDataSet);
  const [shirts, setShirts] = useState(def);
  const [page, setPage] = useState(-1);
  const [multipage, setMultipage] = useState(1);
  const [paginationSize, setPaginationSize] = useState(5);
  let [slicedata, setSlicedata] = useState(splitToNChunks([...def], paginationSize )[0]);  // sets initial pagination1 to 12 
  // const [toggleBasket, setToggleBasket] = useState(true);

  const [basket, setBasket] = useState([]);


  const [cartTotal1, setcartTotal1] = useState(0)
  const [cartItems, setCartItems] = useState(0)


  function splitToNChunks(array, n) {
    let chunkSize = Math.ceil(array.length / n)
    let result = [];
    for (let i = chunkSize; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
  }
  
  const cc = splitToNChunks([...shirts], paginationSize)
  console.log("qqqq", cc[0])




useEffect(()=> {


  let tQuantity = basket.reduce(         // Total number off items in basket
    (accumulator, el) => accumulator + el.quantity,
    0,
  );

  let tPrice = basket.reduce(     // Total price of basket
    (accumulator, el) => accumulator + el.totalPrice(),
    0,
  );


setcartTotal1(Number(tPrice.toFixed(2)))
setCartItems(tQuantity)

}, [basket])


  function itemcode(code) {
    return function (element) {
      return element.itemcode === code;
    };
  }


  function Rightpanel() {
    return (
      <div id="right">
        <Fullshirt
          label={slicedata[page] ? slicedata[page] : shirts[1]}  // 
          action={addToBasket}
          shirts={shirts}
          cartItems={cartItems}
          
 
          cart={basket}
          index={page}
    
        
        />
      </div>
    );
  }

  const addToBasket = (a) => {
    const zz = basket.findIndex(itemcode(a.itemcode));
  

    if (zz != -1) {
      basket[zz].quantity += 1;
      setBasket([...basket]);
    } else {
      // let newItem = new BasketModel("Mike", "M", "67888", 44.90, 1)
      // updateQuantity("67888", newItem)

      setBasket([...basket, a]);
    }
  };
  function callback(index) {
    setPage(index);
  }

  function callbackpage(index) {
    setPaginationSize(index);


   
  }


  function next(first) {
  
    setMultipage(first);
    let z = splitToNChunks([...def], paginationSize)[first-1]
    setSlicedata(z);
    console.log("sliec", z);
  }


  // const Routes = {
  //   "-3": () =>  <Rightpanel /> ,
  //   "/home": () => <Home />,
   
  // };


  




const renderSwitch = (param) => {
  switch (param) {
    case -1:
      return < Leftpanel page={callbackpage} 
      sizeDataSet={lenDataSet}


      callback={callback} next={next}
        multipage={multipage} slicedata={slicedata} 
        page1={paginationSize}/> 
    case -2:
      return  <Fullbasket 
      basket={basket}  
 
      cartTotal1={cartTotal1}
      cartItems={cartItems} /> 
    default:
      return <Rightpanel /> 
  }
};




  return (
    <div>





  



      <header className="App-header">
   
    
    
    <div className="header"> < Navcart basket={basket} action={callback} cartTotal1={cartTotal1} cartItems={cartItems}/> </div>


{renderSwitch(page)}

      </header>
    </div>
  );
}

export { App };
