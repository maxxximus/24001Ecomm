import '../css/App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Footer from './Footer';
function Login() {

    // parent - App.js

  
  


    return (
        <>
<div className='form-style'> 
<h5>Log in to your account / New User</h5>

<Form style={{width: "94%", margin:"50px auto"}}>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text >
        Your password must be 8-20 characters long.
      </Form.Text>
      </Form.Group>
        
      <Button disabled="true" variant="primary" type="submit">
        Submit
      </Button>
      </Form>
<h5>Forgotten your password?</h5>
   


 
</div>
<Footer /></>
    );


    }

export default Login;