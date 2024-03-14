import '../css/App.css'
import {Form,Button} from 'react-bootstrap/';




function Contact(props) {

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


        <Form style={{width: "50%", margin:"100px auto"}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your enquiry</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        
      <Button disabled="true" variant="primary" type="submit">
        Submit
      </Button>
      </Form>

    );


    }

export default Contact;