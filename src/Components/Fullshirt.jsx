import { useState } from 'react';
import { Stack, Badge } from "react-bootstrap";


import '../css/App.css'
import BasketModel from '../Model/BasketModel'
import gg from '../tshirt.png'
import gyy from '../7168bMNpdsL._AC_SL1000_.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { TypeH4 } from 'react-bootstrap-icons';






function Fullshirt(props) {

const [size, setSize] = useState("")
const [nosubmit, setNosubmit] = useState("")



// const submitToCart = () => {
//   if (size !== "") {

//      props.action( [...props.cart, new BasketModel(
//       props.label.design, props.label.size, props.label.itemcode, props.label.price, 1, props.label.image)])
 
//   }
// };



const submitCart = () =>{ 
  if (size !== "") 
  {   props.action( new BasketModel(
  props.label.design, size, props.label.itemcode+size, props.label.price, 1, props.label.image));
  
}
else{
  setNosubmit("Please select a size")
}
}


  


    return (


    

<div className='side-by-side'>





<Carousel interval={null} variant='dark' style={{ width:"600px",border: "1px solid black", borderRadius: '10px',  }} >
      <Carousel.Item>
        <img  
          className="carousel-image"
          src={props.label.image} 
          alt="First slide"
        />
        <Carousel.Caption>
        {props.label.design} 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={props.label.image} 
          alt="Second slide"
        />
        <Carousel.Caption>
        {props.label.design} 
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>



    {/* <Form style={{backgroundColor: "grey"}}>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form> */}


        <div className='cart-checkout'>


<h2 className='full-price'>{props.label.formatPrice()}</h2>

<p>{props.index}</p>

<p>Item code:{props.label.itemcode}</p>
<p>Size selected: {size? size: "None selected"}</p>
<Stack  style={{width: "30%", textAlign: "centre"}} direction="vertical" gap={1}>{props.label.size.map((option, index) => {
     
     return  (
      <>


      {option == size ?
     <><Button size="sm" variant="warning" value={option} onClick={(e) => {setSize(e.target.value)}}>{option}</Button>
    </>
      :
      <><Button  size="sm"  variant="success" value={option} onClick={(e) => {setSize(e.target.value)}}>{option}</Button>
      </>
      }
  
  
      </> 


    )  })}
    </Stack>
    
{/* <Form.Select onChange={(e) => {setSize(e.target.value)}} aria-label="Default select example">

<option value="">Select size</option>
{props.label.size.map((el)=>{
  return (
  <option value={el}>{el}</option>
  )
})}

</Form.Select> */}

 <div  style={{margin: "40px 0"}} className="d-grid gap-2">

<Button  variant="outline-success" size="lg" onClick={submitCart}>Add to cart</Button></div>
<p className='warning'>{nosubmit}</p>

<p className='success'>{props.cartItems == 0 ? "" : 
props.cartItems == 1 ?`You have ${props.cartItems} item in your basket:` : 
`You have ${props.cartItems} items in your basket:`}</p>


</div>

 
           

</div>

    );
    
}

export default Fullshirt













