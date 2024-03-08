import '../css/App.css'
import BasketModel from '../Model/BasketModel';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


function Shirt(props) {


    // parent - leftpanel.js


    // props  label={option}
    //       key={option.itemcode}
    //       ind={index}
    //       action={props.callback}
    
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


<Card key={props.label.itemcode} className="shirt-hover" onClick={()=>{props.action(props.ind)}} >
      <Card.Img    style={{  objectFit: "cover", height : "100%", width: "100%"
 }} src={props.label.image} alt={props.label.design} />
      <Card.Body className="d-flex flex-column justify-content-end ">
        
        <ListGroup   variant="flush">
        <ListGroup.Item variant="info"><h2>{props.label.formatPrice()}</h2></ListGroup.Item>
        <ListGroup.Item variant="info">{props.label.itemcode}  </ListGroup.Item>
        <ListGroup.Item variant="info">        <Stack direction="horizontal" gap={1}>{props.label.size.map((option, index) => {
     
            return  (
            <Badge pill bg="primary">
      {option}
            </Badge>
           )  })}
           </Stack>
     </ListGroup.Item>
      </ListGroup>
        {/* <Button key={props.ind} onClick={()=>{props.action(props.ind)}}  variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>






      // <div className="shirt"  key={props.ind}   onClick={()=>{props.action(props.ind)}} >
   
          
      //     <div className="image"><img src={props.label.image} /> <p>{props.ind}</p></div>
      //      <div className="shirt-info"> {/*<p>{props.label.design}</p> */}
      //     {/* <p>{props.label.itemcode}</p> */}
      //     <p>{props.label.formatPrice()}</p>
      //     {props.label.size.map((option, index) => {
         
      //    return <div className='size-options'>{option}</div>
      //     })}
  
        
          
      //     {/* <button onClick={() => props.action( [...props.cart, new BasketModel(props.label.design, props.label.size, props.label.itemcode, props.label.price, 1)]) }>Buy</button> */}
      //         </div>
  
         
          
      
      // </div>
    );





    // return (
    //   <div className="main">
   
    //       <div>
    //       <div id="image"><img src={profile.picture.large} /><p> Age: {profile.dob.age}</p></div>
    //       <div id="profile"> <h2>{profile.name.first} {profile.name.last}{false  && (<div id="smily"></div>)}
    //           </h2><p> Location: {profile.location.city}, {profile.location.country}</p><p>{}</p>
    //           <button onClick={() => {props.action(  [...props.friends,  new Profile(profile.name.first+" "+ profile.name.last, 65, "image", "london")] )}}>Friend Request</button></div>
  
         
    //       </div>
      
    //   </div>
    // );



















    
 
      
    }
    
    export default Shirt;