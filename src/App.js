import "./css/App.css";
import Shirt from "./Components/Shirt";
import Item from "./Model/Item";
import { useState } from "react";
import { def } from "./Data/definitions";
import Basket from "./Components/Basket";

function App() {
  const [shirts, setShirts] = useState(def);
  const [page, setPage] = useState();
  
  const [basket, setBasket] = useState([])



  // {false  && (<div id="smily"></div>)}

 

  return (
    <div>
      <header className="App-header">
        <div id="main">
          {shirts.slice(0, 10).map((option, index) => {
         
              return <Shirt format={option.formatPrice()} label={option} ind={index}  cart={basket} action={setBasket}/>;
            
          })}
        </div>
        <div id="basket"><Basket cart1={basket} /></div>
      </header>
    </div>
  );
}

export { App };
