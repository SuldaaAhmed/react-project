import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#"><h3>Kasmaal <span>Constraction</span></h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="nav-link-custom">HOME</Nav.Link>
            <Nav.Link href="/About" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="/Services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="/Store" className="nav-link-custom">project</Nav.Link>
            <Nav.Link href="/New" className="nav-link-custom">New</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/SingUp"><FaUser /></Nav.Link>
            <Nav.Link href="/PaymentPages"><FaShoppingCart /></Nav.Link>
            <Nav.Link href="/"><FaSearch /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
