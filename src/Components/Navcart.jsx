import Basket from "./Basket"
import '../css/App.css'
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Navcart(props){






    return(
  <>




      
      <Container>
      <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">Mr-Tee</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{props.action(-1)}} href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{props.action(-2)}} href="#cart">Basket</Nav.Link>
            <NavDropdown title="Links" id="basic-nav-dropdown">  
            
              <NavDropdown.Item href="#info">
                Company information
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{props.action(-3)}}href="#contact">Contact us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#login">
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>

    <Basket action2={props.action} 
    cart1={props.basket} 
    cartTotal1={props.cartTotal1}
     cartItems={props.cartItems}/>
  
  
    </>
    )
  
  
  
  
  }

  export default Navcart