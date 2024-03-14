import { useState, useEffect} from 'react';
import { Stack, Badge, Alert, Button, Nav, Accordion, Tabs, Tab } from "react-bootstrap";


import '../css/App.css'
import BasketModel from '../Model/BasketModel'
import gg from '../tshirt.png'

import Carousel from 'react-bootstrap/Carousel';

import Selection from './Selection';

import ListGroup from 'react-bootstrap/ListGroup';






function Fullshirt(props) {

const [size, setSize] = useState("")
const [nosubmit, setNosubmit] = useState("")
const [loading, setLoading] = useState(false); // used by add to cart button

      // parent app.js 
      // props:
      // label={slicedata[page] ? slicedata[page] : shirts[1]} 
      // labelselect={randomSelection} // 
      // action={addToBasket}
      // shirts={shirts}
      // cartItems={cartItems}
      // setPage={setPage}
      // cart={basket}
      // index={page}

        
  useEffect(() => {

    window.scrollTo(0, 0)  // ensures re-render scrolls to top of page


    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // adds loading text to cart button
    }

    if (loading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        submitCart()
      });
    }

  }, [loading, props.index]);

  const handleClick = () => setLoading(true);


const submitCart = () =>{ 
  if (size !== "") 
  { props.action( new BasketModel(
  props.label.design, size, props.label.itemcode+size, props.label.price, 1, props.label.image));
  setNosubmit("")
}
else{
  setNosubmit("Please select a size")
}
}


  


    return (

      <div id="right">
    

<div className='side-by-side'>





<Carousel interval={null} variant='dark' style={{ width:"600px", borderRadius: '10px',  }} >
      <Carousel.Item>
        <img  
          className="carousel-image"
          src={props.label.image? props.label.image : `https://placehold.co/800x800`} 
          alt="First slide"
        />
        <Carousel.Caption>
        {props.label.image? props.label.design : `No image supplied`}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src={props.label.image? props.label.image : `https://placehold.co/800x800`} 
          alt="Second slide"
        />
        <Carousel.Caption>
        {props.label.image? props.label.design : `No image supplied`}
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>





        <div className='cart-checkout'>

     <h1><span className='h1-brand'>{props.label.design}</span>
     <span className='h1-item'>{props.label.itemname}</span></h1>
<h3 >{props.label.formatPrice()}</h3>



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


<Button     disabled={loading}  variant="outline-success" size="lg"   onClick={!loading ? handleClick : null}>
{loading && size  ? 'Adding…' : 'Add to Basket'}</Button></div>
<p className='warning'>{nosubmit}</p>

<p className='success' onClick={()=> {props.setPage(-2)}} >{props.cartItems == 0 ? "" : 
props.cartItems == 1 ?`You have ${props.cartItems} item in your basket:` : 
`You have ${props.cartItems} items in your basket:`}</p>



{/* <div  style={{margin: "40px 0"}} className="d-grid gap-2">

<Button variant="outline-secondary" size="lg"  >Continue shopping</Button></div> */}
<div style={{height:"200px", marginTop:"50px"}}>
      <Tabs
      tabClassName='text-dark'
      defaultActiveKey="contact"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Details" title="Details">
      {props.label.details}
      </Tab>
      <Tab eventKey="Returns" title="Returns">
    <p>You can now return your online order in a few easy steps.Select your preferred tracked returns service. We have print at home, paperless and collection options available. You have 28 days to return your order from the date it’s delivered. Exclusions apply.</p>
      </Tab>
      <Tab   eventKey="contact" title="Links..." >
      <Nav  className="justify-content-start"   bg="dark" activeKey="/#home">
        <Nav.Item >
          <Nav.Link  variant="pills"  onClick={()=> {props.setPage(-1)}}href="/#home">Back to shopping</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  onClick={()=> {props.setPage(-2)}} href="/#basket">Go to basket</Nav.Link>
        </Nav.Item>
       
       
      </Nav>
      </Tab>
    </Tabs>
    </div>
    

</div>

 
           

</div>
<div className='random-selection'>    
  < Selection 
                                        label={props.labelselect} 
                                        action={props.action1}/></div>


</div>
    );
    
}

export default Fullshirt













