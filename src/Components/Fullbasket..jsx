import Basket from "./Basket";
import { Table, Button } from "react-bootstrap";
import "../css/App.css";
import Selection from "./Selection";
import { Trash } from "react-bootstrap-icons/dist";

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


    
    <div className="full-basket">

      <Table striped={true} style={{width:"60%", marginTop:"50px" }}  hover >
      <thead>
      <tr>
      <th  colSpan={9}>Your basket</th>
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
              <tr key={option.itemcode}>
                <td>{index + 1} </td>
                <td>
                  {" "}
                  <img className="basket-image-sm" src={option.image} />
                </td>
                <td>{option.design} </td>
                <td>{option.itemcode} </td>
                <td>{option.price} </td>
                <td>{option.size} </td>
                <td>{option.quantity} </td>
                <td>{option.totalPrice()} </td>

                <td>
                  <Trash
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
            <td>{props.cartItems} items</td>
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
              <button  style={{height:'40px'}} className="cart-button-gn">Continue to secure checkout</button>
  
            </td>


          </tr>

          <tr>
          <td colSpan={2}>
              <button  style={{height:'40px'}}  onClick={()=> {props.setPage(-1)}}  className="cart-button-grey">Continue shopping</button>
  
            </td>
          </tr>
        </tbody>
      </Table>



      {/* <Selection callback={props.callback}/> */}
    </div>

    //
  );
}

export default Fullbasket;
