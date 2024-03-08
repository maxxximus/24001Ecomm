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
 
      <Navbar className="nav-mini" style={{display:"flex", zIndex: "-1", backgroundColor: "blue"  ,flexDirection:"row"}}expand="lg"  >
      <Container>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
      </Container>
    </Navbar>

    <Basket action2={props.action} 
    cart1={props.basket} 
    cartTotal1={props.cartTotal1}
     cartItems={props.cartItems}/>
  
  
    </>
    )
  
  
  
  
  }

  export default Navcart