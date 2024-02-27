import { useState, useEffect } from 'react';
import '../css/Shirt.css'
import '../css/Basket.css'
function Basket(props) {

    const [cartTotal, setcartTotal] = useState(0)

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
      
    




      
  useEffect(() => {

    
    props.cart1.map((option, index) => {
        setcartTotal(cartTotal + option.totalPrice())
        })

 
  }, [cartTotal]);





// const total = 
//     props.cart.reduce((acc,el,)=>{acc+=el.price}, 0) 
// console.log(total);

    return (
    
    
    <>
        <span>Basket</span><span>Total fir all{cartTotal}</span>
        <div className='basket'>
     {props.cart1.map((option, index) => {
       
        

         return (
         <>
         <span> {option.price}  ({option.quantity})</span>
         <span >Totalpooo: {option.totalPrice()}   </span>
         
         <img className='basket-image' src={option.image} />
         {/* <span>{option.totalPrice()}</span> */}
         </>
         )
       
     })}<span>total basketuuu</span>
     </div>

     
 </>
    );





    
 
      
    }
    
    export default Basket;