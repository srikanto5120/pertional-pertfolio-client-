import React from "react";
import "./Protfolio.css";
import img from "../../../images/match.png";
import { Card, Col, Row } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";

const Portfolio = () => {
  return (
    <div className="container">
      <Row>
      <Bounce left cascade>
      <div className="text-center my-5">
          <h4>Portfolio</h4>
          <h1>Some of my most recent projects</h1>
        </div>
      </Bounce>
        
        <Fade bottom>
        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>

            <div class="content">
              <h4>Project 01</h4>
             <p>Conmebol
              Copa America
              2021</p>
             <a href="https://srikanto5120.github.io/asignment-2/index.html" target="_blank"><button className="btn bg-primary text-white py-2 px-5">Visited</button></a>
            </div>
            </Card.Body>
          </Card>
        </Col>
        </Fade>
      </Row>
      {/* <Row>
         <Col sm={12}>
         <h1 class="protfolio-heading">My  <span class="about-heading">Project</span></h1>
        <div class="protfolio-container">
          <div class="box">
            <div class="box-img">
              <img src={img} alt=""/>
            </div>
            <div class="content">
              <h1 >Project 01</h1>
             <p>Conmebol
              Copa America
              2021</p>
             <a href="https://srikanto5120.github.io/asignment-2/index.html" target="_blank"><button class="visited-btn">Visited</button></a>
            </div>
          </div>
          </div>
          </Col>
      </Row> */}
    </div>
  );
};

export default Portfolio;
