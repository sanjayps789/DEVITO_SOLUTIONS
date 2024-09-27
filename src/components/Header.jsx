import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
function Header() {
  const [show, setShow] = useState(false)
  return (
    <>
    <Navbar style={{backgroundColor:'#76A6E6'}} expand="lg" className="w-100 py-4">
      <Container>
        <Navbar.Brand href="#home">
          <img  src={logo} className='img-fluid w-100' alt="devito.logo" />
        </Navbar.Brand>  
        <button onClick={() => setShow(!show)}  className='btn fs-2 d-block d-lg-none'><i className="fa-solid fa-bars text-white"></i></button>

          <Nav className="ms-auto  d-lg-flex d-none">
            <Nav.Link className='text-white' href="#home">Projects</Nav.Link>
            <Nav.Link className='text-white' href="#link">Technology</Nav.Link>
            <Nav.Link className='text-white' href="#link">Careers</Nav.Link>
            <Nav.Link className='text-white' href="#link">About Us</Nav.Link> 
            <Nav.Link className='text-white' href="#link">Contact Us</Nav.Link>
          </Nav>   
      </Container>

      {show &&
        <Navbar collapseOnSelect expand="lg" className="w-100 d-block d-lg-none" style={{backgroundColor:'#786E5'}}  show={show} >
      <Container>
        <Nav className="me-auto py-4">
            <Nav.Link className='text-white' href="#home">Projects</Nav.Link>
            <Nav.Link className='text-white' href="#link">Technology</Nav.Link>
            <Nav.Link className='text-white' href="#link">Careers</Nav.Link>
            <Nav.Link className='text-white' href="#link">About Us</Nav.Link> 
            <Nav.Link className='text-white' href="#link">Contact Us</Nav.Link>
          </Nav>   
      </Container>
      </Navbar>}
    </Navbar>
  
    </>
  )
}

export default Header