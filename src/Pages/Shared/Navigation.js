import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#fff",
        color: "black",
        fontSize: 20,
        fontFamily: "'Poppins', sans-serif ",
      }}
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/home#home">
          {" "}
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={HashLink} style={{ color: "black" }} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} style={{ color: "black" }} to="/home#about">
              About
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              style={{ color: "black" }}
              to="/home#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link as={Link} style={{ color: "black" }} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              style={{ color: "black" }}
              to="/home#contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
