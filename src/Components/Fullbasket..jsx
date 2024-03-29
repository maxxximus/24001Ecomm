
import { Table} from "react-bootstrap";
import "../css/App.css";

import { Trash } from "react-bootstrap-icons/dist";
import Footer from "./Footer";

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

    
    <div className="full-basket">
{props.cartItems > 0 && 
      <Table striped={true} style={{width:"60%", marginTop:"50px" }}  hover >
      <thead>
      <tr>
      <th  colSpan={9}>Your basket: {props.cartItems} items</th>
      </tr>
      </thead>
        <thead>
          <tr>
            <th>#</th>
            <th>Item </th>
            <th>Brand</th>
            <th>Item code</th>
            <th>Price/item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {props.basket.map((option, index) => {
            return (
              <tr key={option.itemcode+"1"}>
                <td>{index + 1} </td>
                <td>
 
                  <img onClick={()=>{props.callback(option.itemcode.replace(`${option.size}`, ''))}} alt={option.design} className="basket-image-sm" src={option.image ? option.image:`https://placehold.co/60x60`} />
                </td>
                <td>{option.design} </td>
                <td>{option.itemcode} </td>
                <td>{option.price} </td>
                <td>{option.size} </td>
                <td>{option.quantity} </td>
                <td>{option.totalPrice()} </td>

                <td>
                  <Trash
                  alt="Remove from basket"
                    className="bin-hover"
                    onClick={() => {
                      props.removeFromCart(option.itemcode);
                    }}
                    size={25}
                  />
                </td>
              </tr>
            );
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
}
      <Table    striped style={{ height: "300px", width:"30%", marginTop:"50px" }}>
        <thead>
          <tr>
            <th  colSpan={2}>
              ORDER SUMMARY 
            </th>
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.cartItems} items</td>
            <td>{props.cartTotal1 ? `£${props.cartTotal1}` : `£0.00`} </td>
          </tr>

          <tr style={{borderBottom:"1px solid black"}}>
            <td>TOTAL</td>
            <td>
              {props.cartTotal1
                ? `£${props.cartTotal1}`
                : `Your basket is empty`}
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <button  style={{height:'40px'}} className="cart-button-gn">Secure checkout</button>
  
            </td>


          </tr>

          <tr>
          <td colSpan={2}>
              <button  style={{height:'40px'}}  onClick={()=> {props.setPage(-1)}}  className="cart-button-grey">Continue shopping</button>
  
            </td>
          </tr>
        </tbody>
      </Table>



   
    </div>
    <Footer /> </>

  
  );
}

export default Fullbasket;
