import '../css/App.css'

import Card from 'react-bootstrap/Card'

import ListGroup from 'react-bootstrap/ListGroup';

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


<Card  key={props.label.itemcode} className="shirt-hover"  onClick={()=>{props.action(props.label.itemcode, props.index)}} >
      <Card.Img    style={{  objectFit: "cover", height : "100%", width: "100%"
 }}   src={props.label.image? props.label.image : `https://placehold.co/200x200`} alt={props.label.design} />
      <Card.Body className="d-flex flex-column justify-content-end ">
        
        <ListGroup   variant="flush">
        <ListGroup.Item variant="secondary"><h4><span className="shirts-lg">{props.label.design}</span><span className="shirts-sm" >{props.label.formatPrice()}</span></h4></ListGroup.Item>
        {/* <ListGroup.Item variant="info"><h4>{props.label.itemcode}</h4></ListGroup.Item> */}

        <ListGroup.Item variant="secondary">        <Stack direction="horizontal" gap={1}>{props.label.size.map((option, index) => {
     
            return  (
            <Badge key={option} pill bg="primary">
      {option}
            </Badge>
           )  })}
           </Stack>
     </ListGroup.Item>
      </ListGroup>
        {/* <Button key={props.ind} onClick={()=>{props.action(props.ind)}}  variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>




    );























    
 
      
    }
    
    export default Shirt;