import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './Cart';

function Navbars() {

  let products= useSelector(state=>state.cart)

  return (
    <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redux-toolkit</Navbar.Brand>
  
          <Nav className="me-auto">
            <Nav.Link to='/' as={Link}>Products</Nav.Link>  
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              <Nav.Link to='/cart' as={Link}>My Bag {products.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars