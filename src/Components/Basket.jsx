import { useState } from 'react';
import '../css/Shirt.css'
function Basket(props) {

    const [cartTotal, setcartTotal] = useState(0)
// const total = 
//     props.cart.reduce((acc,el,)=>{acc+=el.price}, 0) 
// console.log(total);

    return (
    
    
    <div id="basket">
        <h3>Basket</h3>
     {props.cart1.map((option, index) => {
         
         return (
         <><p> {option.price} </p></>
         )
       
     })}
     <h5>Total {props.cart1.reduce((total, item)=>total+(item.price),0)}</h5>
 </div>
    );





    
 
      
    }
    
    export default Basket;