import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="mt-5 skill-container">
      <Container>
        <Row>
        <Bounce left cascade>
        <h2 className="text-center mb-5 "> My Skills</h2>
      </Bounce>
    
          <Col sm={12} md={6}>
        
          <Bounce left cascade>
          <h4>Front-End</h4>
             
            <div className="d-flex justify-content-between">
              <p>HTML</p>
              <p>90%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"90%"}}></div>
            </div>
            <div className="d-flex justify-content-between">
              <p>CSS</p>
              <p>80%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"80%"}}></div>
            </div>
            <div className="d-flex justify-content-between">
              <p>BOOTSTRAP</p>
              <p>90%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"90%"}}></div>
            </div>
            <div className="d-flex justify-content-between">
              <p>JAVASCRIPT</p>
              <p>70%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"70%"}}></div>
            </div>
            <div className="d-flex justify-content-between">
              <p>REACT</p>
              <p>70%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"70%"}}></div>
            </div>
            </Bounce>
          </Col>
         
         
          <Col sm={12} md={6}>
          <Bounce right cascade> 
              <h4>Back-End</h4>
              <div className="d-flex justify-content-between">
              <p>NodeJs</p>
              <p>80%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"80%"}}></div>
            </div>
              <div className="d-flex justify-content-between">
              <p>MongoDB</p>
              <p>70%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"70%"}}></div>
            </div>
              <div className="d-flex justify-content-between">
              <p>ExpressJs</p>
              <p>80%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"80%"}}></div>
            </div>
              <div className="d-flex justify-content-between">
              <p>Firebase</p>
              <p>80%</p>
            </div>
            <div className="skill">
              <div className="skill-level" style={{width:"80%"}}></div>
            </div>
            </Bounce>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
