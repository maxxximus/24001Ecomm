import '../css/App.css'
import {Form,Button} from 'react-bootstrap/';
import Footer from './Footer';




function Contact() {

    // parent - App.js
    

  


    return (
<>
<div className='form-style'> 
<h5>Contact us</h5>
        <Form style={{width: "94%", margin:"50px auto"}}>
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
    
</div>  < Footer /></>
    );


    }

export default Contact;