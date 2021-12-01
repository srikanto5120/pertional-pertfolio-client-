import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      className="mt-5"
      style={{ fontFamily: "'Poppins', sans-serif " }}
    >
      <Container>
        <Fade bottom>
          <h5 className="text-center bg-color">About me</h5>
          <h2 className="text-center ">Know Me More</h2>
          <Row>
            <Col sm={12} md={7}>
              <h3>
                Hi, I'm <span className="fw-bold">Sreeknata Singha</span>
              </h3>
              <p>
                I'm a designer & developer with a passion for web design. I
                enjoy developing simple, clean and slick websites that provide
                real value to the end user. Thousands of clients have procured
                exceptional results while working with me. Delivering work
                within time and budget which meets client’s requirements is our
                moto.
              </p>
            </Col>
            <Col sm={12} md={4}>
              <h1 className="fw-bold text-center year">20</h1>
              <h4 className="fw-bold text-center "> Years of Experience</h4>
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row className="mt-5">
            <Col sm={6} md={3}>
              <h6 className="myself-heading">Name:</h6>
              <h5 className="myself-info fw-bold">Sreekanta Singha</h5>
            </Col>
            <Col sm={6} md={3}>
              <h6 className="myself-heading">Email:</h6>
              <h5 className="myself-info fw-bold">shreekantaray@gmail.com</h5>
            </Col>
            <Col sm={6} md={3}>
              <h6 className="myself-heading">Date of Birth:</h6>
              <h5 className="myself-info fw-bold">22 January,1999</h5>
            </Col>
            <Col sm={6} md={3}>
              <h6>From:</h6>
              <h5 className="myself-info fw-bold">Thakurgoan Bangladesh</h5>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default About;
