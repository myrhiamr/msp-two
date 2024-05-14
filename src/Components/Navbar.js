import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MainLogo from '../images/MainLogo.jpg'; 

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{ backgroundColor: '#FFFDF9' }}>
        <Navbar.Brand as={Link} to="/">
          <img
            src={MainLogo} 
            alt="Logo"
            style={{ height: '120px', marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ fontSize: '25px' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/reviews" style={{ fontSize: '25px' }}>Reviews</Nav.Link>
            <NavDropdown style={{ fontSize: '25px' }} title="Bouquets" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/bouquet-one">Daisy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bouquet-two">Garden Roses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bouquet-three">Tulips</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about-us">About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
