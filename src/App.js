import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect, useState, useCallback } from "react";
import { def } from "./Data/definitions";

import Navcart from "./Components/Navcart";
import Leftpanel from "./Components/Leftpanel";
import Fullbasket from "./Components/Fullbasket..jsx";
import Contact from "./Components/Contact.jsx";
import Login from "./Components/Login.jsx";
import { getCountries } from "./apiservice.js";
import { resultcart } from "./localstorage.jsx";
import Fullshirt from "./Components/Fullshirt.jsx";


function App() {
  const [products, setProducts] = useState([]);

  const lenDataSet = def.length;

  const [shirts, setShirts] = useState(def); // holds entire dataset
  const [page, setPage] = useState(-1); // initial state is rendering Leftpanel
  const [multipage, setMultipage] = useState(1); // used with pagination to render correct slice
  const [paginationSize, setPaginationSize] = useState(10); // number of Shirts rendered by Leftpanel
  let [slicedata, setSlicedata] = useState(
    splitToNChunks([...def], paginationSize)[0]
  );

  let [randomSelection, setRandomSelection] = useState(randomDisplay([...def]));// 3 random items to display
  // let [randomIndex, setRandomIndex] = useState(0);
  let [sorting, setSorting] = useState("");
  let [sortedArray, setSortedArray] = useState([]);
  // let [selectedItem, setSelectedItem] = useState([]);

  const [cartTotal1, setcartTotal1] = useState(0); // total price of cart
  const [cartItems, setCartItems] = useState(0); // number of items in cart

  const [basket, setBasket] = useState(resultcart || []); // array of contents of basket
  // mine working

  //   useEffect(() => {

  //     fetch("http://localhost:3002/item",  {
  //       headers:{
  //         accept: 'application/json',
  //         'User-agent': 'learning app',
  //       }
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setCountries(data.recordset[1007]))
  //       .catch(error => {console.log("error",error)})
  //   }, []);

  // console.log("fffffffff",countries?countries:"hhhh");

  async function fetchCountries() {
    const result = await getCountries(1);
    setProducts(result.recordset);
  }

  useEffect(() => {
    fetchCountries();
  }, []);



  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  /**
   *  displays random items to display in Fullshirt
   * and sets randomSelection state - changes with new page state

   */
  useEffect(() => {
    let v = randomDisplay([...shirts]);
    setRandomSelection(v);
  }, [page]);

  /**
   *  generates 3 random items to display in Selection comp
   *
   * @param {array}
   * @returns {array}
   */
  function randomDisplay(array) {
    let result = [];
    for (let i = 3; i > 0; i--) {
      var item = Math.floor(Math.random() * array.length);
      result.push(array[item]);
    }
    return result;
  }

  /**
   *  generates slice of full recordset dependent on pagination size
   *
   * @param {array}
   * @returns {array}
   */
  function splitToNChunks(array, n) {
    let chunkSize = Math.ceil(array.length / n);
    let result = [];
    for (let i = chunkSize; i > 0; i--) {
      result.push(array.splice(0, paginationSize));
    }
    return result;
  }

  /**
   *  finds 1 object from recordset based on itemcode
   *
   * @param {string} a
   * @returns {array}
   */
  const findItem = (a) => {
    const zz = shirts.findIndex(itemcode(a));
    let result = [];
    if (zz !== -1) {
      result.push(shirts[zz]);
      return result;
    } else {
      console.log("not");
    }
  };

  // sets cart total and number of items in cart
  // fires on change of basket state
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
    /**
     *  generates array of objects based on sort term (brand)
     * and adds to state sortedArray
     *
     * @param {array}
     * @param {string} term
     * @returns {array}
     */
    function sortArray(array, term) {
      let result = array.filter((option, index) => option.design === term);
      return result
        }

    const newsort = sortArray(shirts, sorting);

    setSortedArray(newsort);
  }, [sorting]);

  /**
   *  removes item from cart by excluding item from new array and setting new array to cart
   *
   * @param {string} itemcode
   * @returns {array}
   */
  const removeFromCart = (itemcode) => {
    const rr = basket.filter((el) => {
      return el.itemcode !== itemcode;
    });
    setBasket(rr);
  };

  /**
   *  closure used by add/remove from cart to find if item code matches
   *
   * @param {string} code
   * @returns {boolean}
   */
  function itemcode(code) {
    return function (element) {
      return element.itemcode === code;
    };
  }

  /**
   *  adds to basket - if item in basket increase quantity by 1 if not
   * add new item to existing array from basket
   *
   * @param {object} a
   *
   */
  const addToBasket = (a) => {
    const zz = basket.findIndex(itemcode(a.itemcode));

    if (zz !== -1) {
      basket[zz].quantity += 1;
      setBasket([...basket]);
    } else {
      setBasket([...basket, a]);
    }
  };

  /**
   *  sets current page based on itemcode of product or -1 for all items, -2 for basket
   *
   * @param {*} index
   */
  function callback(index) {
    setPage(index);
  }

  /**
   * sets pagination size
   *
   * @param {integer} index
   */
  function callbackpage(index) {
    setPaginationSize(index);
  }

  /**
   *  sets sorting based on brand
   *
   * @param {string} term
   */
  function sortitems(term) {
    setSorting(term);
  }

  /**
   * used by pagination to splice full recordset into chunks based on pagination size
   * and put new slice in Slicedata
   *
   * @param {integer} first
   */
  function next(first) {
    setMultipage(first);
    let z = splitToNChunks([...def], paginationSize)[first - 1];
    setSlicedata(z);
  }

  /**
   *  renders current page based on page state
   *  -1 which renders home page with items listed (Leftpanel)
   *  -2 is fullbasket
   * -3 is contact
   * all others are default and renders Fullshirt based on itemcode
   *
   * @param {*} param
   * @returns {object}
   */
  const renderSwitch = (param) => {
    switch (param) {
      case -1:
        return (
          <Leftpanel
            page={callbackpage}
            shirts={shirts}
            setSorting={sortitems}
            sizeDataSet={sorting ? sortedArray.length : shirts.length}
            callback={callback}
            next={next}
            multipage={multipage}
            slicedata={sorting ? sortedArray : slicedata}
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

      case -4:
          return <Login />;
  

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
        {/* products.map((el) => {return el.design}) */}

        {/* <div className="debugging">
          DEBUGGING:sorting: "{}" random:{randomIndex} page:{page} pagination:
          {paginationSize} multipage:{multipage}
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
