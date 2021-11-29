import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar style={{backgroundColor:"#fff",color:"black",fontSize:20}} collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="#home">Sreekanta</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link style={{color:"black"}} href="">Home</Nav.Link>
            <Nav.Link  style={{color:"black"}} href="">About</Nav.Link>
            <Nav.Link  style={{color:"black"}} href="">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;