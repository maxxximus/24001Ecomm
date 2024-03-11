import "./css/App.css";

import "bootstrap/dist/css/bootstrap.css";
import Shirt from "./Components/Shirt";
import Item from "./Model/Item";
import { useEffect, useState, useCallback } from "react";
import { def } from "./Data/definitions";
import Basket from "./Components/Basket";
import BasketModel from "./Model/BasketModel";

import gg from "./tshirt.png";

import Navcart from "./Components/Navcart";
import Leftpanel from "./Components/Leftpanel";
import Fullbasket from "./Components/Fullbasket..jsx";
import Contact from "./Components/Contact.jsx";

import { CartCheckFill } from "react-bootstrap-icons/dist";

import Spinner from "react-bootstrap/Spinner";
import Fullshirt from "./Components/Fullshirt.jsx";
import Selection from "./Components/Selection.jsx";

function App() {
  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);

  const lenDataSet = def.length;
  console.log("rrrrrr", lenDataSet);
  const [shirts, setShirts] = useState(def); // holds entire dataset
  const [page, setPage] = useState(-1); // initial state is rendering Leftpanel
  const [multipage, setMultipage] = useState(1);
  const [paginationSize, setPaginationSize] = useState(10); // number of Shirts rendered by Leftpanel
  let [slicedata, setSlicedata] = useState(
    splitToNChunks([...def], paginationSize)[0]
  );

  const [basket, setBasket] = useState([]);
  let [randomSelection, setRandomSelection] = useState(randomDisplay([...def]));
  let [randomIndex, setRandomIndex] = useState(0);
  let [sorting, setSorting] = useState("");
  let [sortedArray, setSortedArray] = useState([]);
  // let [selectedItem, setSelectedItem] = useState([]);


  const [cartTotal1, setcartTotal1] = useState(0);
  const [cartItems, setCartItems] = useState(0);



  function randomDisplay(array) {  // generates 3 random items to display in Selection comp
    let result = [];
    for (let i = 3; i > 0; i--) {
      var item = Math.floor(Math.random() * array.length);
      result.push(array[item]);
    }
    return result;
  }

  function splitToNChunks(array, n) {
    let chunkSize = Math.ceil(array.length / n);
    let result = [];
    for (let i = chunkSize; i > 0; i--) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
  }

  const cc = splitToNChunks([...shirts], paginationSize);
  console.log("qqqq", cc[0]);



  // function itemcode(code) {
  //   return function (element) {
  //     return element.itemcode === code;
  //   };
  // }
  
  const findItem = (a) => {
    const zz = shirts.findIndex(itemcode(a));
  let result = []
    if (zz !== -1) {
     console.log("ddddd", shirts[zz]); 
     result.push(shirts[zz])
   return result
  
    }else{
      console.log("not");
    }
  };



  






  useEffect(() => {
    let tQuantity = basket.reduce(
      // Total number off items in basket
      (accumulator, el) => accumulator + el.quantity,
      0
    );

    let tPrice = basket.reduce(
      // Total price of basket
      (accumulator, el) => accumulator + el.totalPrice(),
      0
    );

    setcartTotal1(Number(tPrice.toFixed(2)));
    setCartItems(tQuantity);
  }, [basket]);




  useEffect(() => {

    function  sortArray(array, term){
      let result = [];
      array.map((option, index) => {
        if (option.design === term) {
          result.push(option);
        }
      
      });
    
      return result;
    };
    

  const newsort = sortArray(shirts, sorting)
  setSortedArray(newsort)


  }, [sorting]);




  const removeFromCart = (itemcode) => {
    const rr = basket.filter((el) => {
      return el.itemcode !== itemcode;
    });
    setBasket(rr);
  };

  function itemcode(code) {
    return function (element) {
      return element.itemcode === code;
    };
  }

  const addToBasket = (a) => {
    const zz = basket.findIndex(itemcode(a.itemcode));

    if (zz !== -1) {
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

  function sortitems(term) {
    setSorting(term);
  }

  function next(first) {
    setMultipage(first);
    let z = splitToNChunks([...def], paginationSize)[first - 1];
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
        return (
          <Leftpanel
            page={callbackpage}
            shirts={shirts}
            setSorting={sortitems}
            sizeDataSet={sorting ? sortedArray.length :shirts.length}
            callback={callback}
            next={next}
            multipage={multipage}
            slicedata={sorting ? sortedArray :slicedata}
            page1={paginationSize}
          />
        );

      case -2:
        return (
          <Fullbasket
            basket={basket}
            removeFromCart={removeFromCart}
            cartTotal1={cartTotal1}
            cartItems={cartItems}
            callback={callback}
            setPage={setPage}
          />
        );
      case -3:
        return <Contact />;

      default:
        return (
          <Fullshirt
            label={findItem(page)[0]}
            labelselect={randomSelection} //
            action={addToBasket}
            shirts={shirts}
            cartItems={cartItems}
            setPage={setPage}
            cart={basket}
            action1={callback}
            index={page}
          />
        );
    }
  };

  return (
    <div>
      <header className="App-header">
        {/* <div className="debugging">
          DEBUGGING:sorting: {sorting} random:{randomIndex} page:{page}{" "}
          pagination:{paginationSize} multipage:{multipage} 
        </div> */}
        <div className="header">
          <Navcart
            basket={basket}
            action={callback}
            cartTotal1={cartTotal1}
            cartItems={cartItems}
          />
        </div>

        {renderSwitch(page)}
      </header>
    </div>
  );
}

export { App };
