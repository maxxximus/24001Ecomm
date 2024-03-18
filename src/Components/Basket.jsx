
import '../css/App.css'

import {Cart, CartCheckFill} from "react-bootstrap-icons/dist";



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
      



    return (
    
    
    <>

  
  
       
        <div onClick={()=>{props.action2(-2)}}  className='basket'>


        { props.cartItems  === 0 ?  
    <Cart title={"Basket empty"} size={40} style={{marginTop:"14px"}} /> :   
      <CartCheckFill title={"Items in Basket"} style={{marginTop:"14px"}}  size={40} />}

        <div className='basket-font-20'>Basket Total: {props.cartTotal1 ?  ` £${props.cartTotal1} (${props.cartItems})`: `£0.00`} </div>
            <ul>
            
     {props.cart1.map((option, index) => {
       
        

         return (
         <>
         <li key={option.itemcode+index}><img alt='item in basket' className='nav-image30' src={option.image ? option.image: `https://placehold.co/30x30`} /> ({option.size}) x {option.quantity}: £{option.totalPrice()} </li>
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