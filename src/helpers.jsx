// import 'bootstrap/dist/css/bootstrap.css';
// import Shirt from "./Components/Shirt";
// import Item from "./Model/Item";
// import { useEffect, useState, useCallback } from "react";
// import { def } from "./Data/definitions";
// // import Basket from "./Components/Basket";
// // import BasketModel from "./Model/BasketModel";
// // import Fullinfo from "./Components/Fullinfo";
// // import gg from "./tshirt.png";
// // import Home from "./Components/Home";
// // import Contact from "./Components/Fullbasket.";
// import Navcart from "./Components/Navcart";
// import Leftpanel from "./Components/Leftpanel";
// import Fullbasket from "./Components/Fullbasket.";

// // import { CartCheckFill } from "react-bootstrap-icons/dist";

// // import Spinner from 'react-bootstrap/Spinner';
// import Fullshirt from "./Components/Fullshirt.jsx";

// const removeFromCart = (itemcode) => {
//   const rr = basket.filter((el) => {
//     return el.itemcode !== itemcode;
//   });
//   setBasket(rr);
// };
// function itemcode(code) {
//     return function (element) {
//       return element.itemcode === code;
//     };
//   }

// const addToBasket = (a) => {
//   const zz = basket.findIndex(itemcode(a.itemcode));

//   if (zz != -1) {
//     basket[zz].quantity += 1;
//     setBasket([...basket]);
//   } else {
//     // let newItem = new BasketModel("Mike", "M", "67888", 44.90, 1)
//     // updateQuantity("67888", newItem)

//     setBasket([...basket, a]);
//   }
// };
// function callback(index) {
//   setPage(index);
// }

// function callbackpage(index) {
//   setPaginationSize(index);
// }

// function next(first) {
//   setMultipage(first);
//   let z = splitToNChunks([...def], paginationSize)[first - 1];
//   setSlicedata(z);
//   console.log("sliec", z);
// }




// // export {next,callbackpage,callback,addToBasket,removeFromCart,itemcode };
