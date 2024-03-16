import Basket from "./Basket"
import '../css/App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {HouseFill, EnvelopeFill, DoorOpenFill,BagCheckFill,Link45deg } from "react-bootstrap-icons/dist";






function Navcart(props){


  const placement = "top"





    return(
  <>
  <div>


    {/* <svg fill="#00ff00" height="90px" width="90px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-44.33 -44.33 384.19 384.19" xmlSpace="preserve" stroke="#040cfb" stroke-width="8.865779999999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="7.683676000000001"> <g> <path d="M147.763,44.074c12.801,0,23.858-8.162,27.83-20.169c-7.578,2.086-17.237,3.345-27.83,3.345 c-10.592,0-20.251-1.259-27.828-3.345C123.905,35.911,134.961,44.074,147.763,44.074z"></path> <path d="M295.158,58.839c-0.608-1.706-1.873-3.109-3.521-3.873l-56.343-26.01c-11.985-4.06-24.195-7.267-36.524-9.611 c-0.434-0.085-0.866-0.126-1.292-0.126c-3.052,0-5.785,2.107-6.465,5.197c-4.502,19.82-22.047,34.659-43.251,34.659 c-21.203,0-38.749-14.838-43.25-34.659c-0.688-3.09-3.416-5.197-6.466-5.197c-0.426,0-0.858,0.041-1.292,0.126 c-12.328,2.344-24.538,5.551-36.542,9.611L3.889,54.965c-1.658,0.764-2.932,2.167-3.511,3.873 c-0.599,1.726-0.491,3.589,0.353,5.217l24.46,48.272c1.145,2.291,3.474,3.666,5.938,3.666c0.636,0,1.281-0.092,1.917-0.283 l27.167-8.052v161.97c0,3.678,3.001,6.678,6.689,6.678h161.723c3.678,0,6.67-3.001,6.67-6.678V107.66l27.186,8.052 c0.636,0.191,1.28,0.283,1.915,0.283c2.459,0,4.779-1.375,5.94-3.666l24.469-48.272C295.629,62.428,295.747,60.565,295.158,58.839z "></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M147.763,44.074c12.801,0,23.858-8.162,27.83-20.169c-7.578,2.086-17.237,3.345-27.83,3.345 c-10.592,0-20.251-1.259-27.828-3.345C123.905,35.911,134.961,44.074,147.763,44.074z"></path> <path d="M295.158,58.839c-0.608-1.706-1.873-3.109-3.521-3.873l-56.343-26.01c-11.985-4.06-24.195-7.267-36.524-9.611 c-0.434-0.085-0.866-0.126-1.292-0.126c-3.052,0-5.785,2.107-6.465,5.197c-4.502,19.82-22.047,34.659-43.251,34.659 c-21.203,0-38.749-14.838-43.25-34.659c-0.688-3.09-3.416-5.197-6.466-5.197c-0.426,0-0.858,0.041-1.292,0.126 c-12.328,2.344-24.538,5.551-36.542,9.611L3.889,54.965c-1.658,0.764-2.932,2.167-3.511,3.873 c-0.599,1.726-0.491,3.589,0.353,5.217l24.46,48.272c1.145,2.291,3.474,3.666,5.938,3.666c0.636,0,1.281-0.092,1.917-0.283 l27.167-8.052v161.97c0,3.678,3.001,6.678,6.689,6.678h161.723c3.678,0,6.67-3.001,6.67-6.678V107.66l27.186,8.052 c0.636,0.191,1.28,0.283,1.915,0.283c2.459,0,4.779-1.375,5.94-3.666l24.469-48.272C295.629,62.428,295.747,60.565,295.158,58.839z "></path> </g> </g> 
   
    </svg> */}
  </div>




      <Container>
      <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Navbar.Brand  onClick={()=>{props.action(-1)}} href="#home"><h1>Mr.Tee</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{props.action(-1)}}  className='ms-3' href="#home"><HouseFill className='ms-2' title={"Home"} size={26}  /><p>Home</p></Nav.Link>
            <Nav.Link onClick={()=>{props.action(-2)}}  className='ms-3' href="#cart"><BagCheckFill className='ms-2'  title={"Basket"}size={26} /><p>Basket</p></Nav.Link>
            <Nav.Link onClick={()=>{props.action(-3)}}  className='ms-3' href="#contact"> <EnvelopeFill  className='ms-3'title={"Contact"} size={26}/><p>Contact</p></Nav.Link>
            <Nav.Link onClick={()=>{props.action(-4)}}  className='ms-3 me-3' href="#login"><DoorOpenFill className='ms-2' title={"Login"} size={26}/><p>Login</p></Nav.Link>
            <NavDropdown className='mt-4'  title="Links" id="basic-nav-dropdown">  
            
              <NavDropdown.Item href="#info">
                Company information
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{props.action(-3)}}href="#contact">Contact us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{props.action(-4)}} href="#login">
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