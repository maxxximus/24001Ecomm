import Basket from "./Basket";
import {Table, Button} from 'react-bootstrap';
import '../css/App.css'
import Selection from "./Selection";


function Fullbasket(props) {

    // parent - App.js

    // props           basket={basket}  
    //               removeFromCart={removeFromCart}
    //               cartTotal1={cartTotal1}
    //               cartItems={cartItems} 
    
    // class Item {
    //   constructor(design, size, image, itemcode, price) {
    //     this.design = design;
    //     this.size = size;
    //     this.image = image;
    //     this.itemcode = itemcode;
    //     this.price = price
    //   }
    // }
    
    // export default Item;


  



    return (






<>

        <Table striped={true}  style={{width:"80%", margin: "50px auto"}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Item </th>
            <th>Item </th>
            <th>Price/item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Total price</th>
        
          </tr>
        </thead>
        <tbody>
        {props.basket.map((option, index) => {
            return(
        <tr key={option.itemcode}>
             <td>{index+1} </td>
             <td>   <img className='basket-image-sm' src={option.image} /></td>
             <td>{option.itemcode} </td>
             <td>{option.price} </td>
             <td>{option.size} </td>
             <td>{option.quantity} </td>
             <td>{option.totalPrice()} </td>
         
             <td ><Button onClick={()=>{props.removeFromCart(option.itemcode)}} variant="outline-danger">Remove</Button></td>
             
           </tr>
            )})}
       
       <tr>
             <td></td>
             <td><h4>Basket total:</h4>  </td>
             <td> </td>
             <td> </td>
             <td> </td>
         <td></td>
      
             <td><h5>{props.cartTotal1 ? `£${props.cartTotal1}`:`Your basket is empty`}</h5></td>
             <td> </td>
           </tr>
    
      
        </tbody>
      </Table>
{/* <Selection callback={props.callback}/> */}
      </>

//   
    );









    
 
      
    }
    
    export default Fullbasket;