import { useState, useEffect } from 'react';
import '../css/App.css'

import {Trash, Cart, CartCheckFill } from "react-bootstrap-icons/dist";

function Basket(props) {

    // parent Navcart


    // props  action2={props.action} 
    // cart1={props.basket} 
    // cartTotal1={props.cartTotal1}
    //  cartItems={props.cartItems}

   

    // class BasketModel {
    //     constructor(design, size, itemcode, price, quantity) {
    //       this.design = design;
    //       this.size = size;
    //       this.quantity = quantity;
    //       this.itemcode = itemcode;
    //       this.price = price;
    //     }
      
    //     formatPrice() {
    //       return `£${this.price}`;
    //     }
    //   }
      
    




      
//   useEffect(() => {


//         setcartTotal(cartTotal + option.totalPrice())
        

 
//   }, [cartTotal]);





    return (
    
    
    <>

  
  
       
        <div onClick={()=>{props.action2(-2)}}  className='basket'>


        { props.cartItems  == 0 ?  
    <Cart size={35} style={{margin:"5px"}} /> :   
      <CartCheckFill style={{margin:"5px"}}  size={35} />}

        <div className='basket-font-20'>Basket Total: {props.cartTotal1 ?  ` £${props.cartTotal1} (${props.cartItems})`: `£0.00`} </div>
            <ul>
            
     {props.cart1.map((option, index) => {
       
        

         return (
         <>
         <li> {option.itemcode} ({option.size}) x {option.quantity}: £{option.totalPrice()} </li>
         {/* <span >Totalpooo: {option.totalPrice()}   </span> */}
         {/* <span >items: {option.totalItems()}   </span> */}
         
    
         {/* <span>{option.totalPrice()}</span> */}
         </>
         )
       
     })}
     </ul>
     </div>

     
 </>
    );





    
 
      
    }
    
    export default Basket;