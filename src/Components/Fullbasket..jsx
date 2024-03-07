import Basket from "./Basket";
import Table from 'react-bootstrap/Table';
import '../css/App.css'


function Fullbasket(props) {

    // parent - App.js
    
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
        <tr>
             <td>{index+1} </td>
             <td>   <img className='basket-image-sm' src={option.image} /></td>
             <td>{option.itemcode} </td>
             <td>{option.price} </td>
             <td>{option.size} </td>
             <td>{option.quantity} </td>
             <td>{option.totalPrice()} </td>

           </tr>
            )})}
       
       <tr>
             <td>TOTAL</td>
             <td>  </td>
             <td> </td>
             <td> </td>
             <td> </td>
         <td></td>
      
             <td>Cart total: £{props.cartTotal1} </td>
        
           </tr>
    
      
        </tbody>
      </Table>

      </>

//         <div className="basket-full">Full basket
//         <p>Number of item{props.cartItems}</p>
//         <p>Cart total: £{props.cartTotal1}</p>
    
     
     
//      {props.basket.map((option, index) => {
       
        

//          return (
//          <>
       
//          {/* <span >Totalpooo: {option.totalPrice()}   </span> */}
         
//          <img className='basket-image-large' src={option.image} />
//          <span>size ({option.size}) {option.price}  ({option.quantity})</span>
//          {/* <span>{option.totalPrice()}</span> */}
//          </>
//          )
       
//      })}
    
//         <button onClick={() => props.actiontoggle(!props.toggle)  }>   Close basket</button>

// </div>
        
    );









    
 
      
    }
    
    export default Fullbasket;