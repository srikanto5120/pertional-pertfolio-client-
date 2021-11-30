import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";
import "./Skill.css";

const Skill = () => {
  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif " }}
      className="py-5 mt-5 skill-container"
    >
      <Container>
        <div className="text-center mb-5">
          <h4 className="bg-color">Resume</h4>
          <h1>A summary of My Resume</h1>
        </div>

        <Row>
          <Col sm={12} md={6}>
            <Bounce left cascade>
              <h2 className="mb-4">My Education</h2>
            </Bounce>
          </Col>
          <Col sm={12} md={6}>
            <Bounce left cascade>
              <h2 className="mb-4">My Experience</h2>
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className="resume-border">
            <Fade bottom>
              <h5 className="fw-bold">
                Bachelor's degree Political Science (2nd Years )
              </h5>
              <h6>National University/2018-2019</h6>
              <h6>Gpa:3.29(1st Year)</h6>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
              <hr />

              <h5 className="fw-bold">Higher Secondary School Certificate</h5>
              <h6>Pirganj Govt Collage/2017-2018</h6>
              <h6>Gpa:4.00(1st Year)</h6>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
              <hr />

              <h5 className="fw-bold">Secondary School Certificate</h5>
              <h6>Nakmorad Allimuddin Govt School/2009-2015</h6>
              <h6>Gpa:5.00</h6>
              <p className="mt-3 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
            </Fade>
          </Col>
          <Col sm={12} md={6} className="resume-border">
            <Fade bottom>
              <h5 className="fw-bold">
                Bachelor's degree Political Science (2nd Years )
              </h5>
              <h6>National University/2018-2019</h6>
              <h6>Gpa:3.29(1st Year)</h6>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
              <hr />

              <h5 className="fw-bold">Higher Secondary School Certificate</h5>
              <h6>Pirganj Govt Collage/2017-2018</h6>
              <h6>Gpa:4.00(1st Year)</h6>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
              <hr />

              <h5 className="fw-bold">Secondary School Certificate</h5>
              <h6>Nakmorad Allimuddin Govt School/2009-2015</h6>
              <h6>Gpa:5.00</h6>
              <p className="mt-3 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the dummy text.
              </p>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Bounce left cascade>
            <h2 className="mt-5 my-skill "> My Skills</h2>
          </Bounce>

          <Col sm={12} md={6} className="resume-border">
            <Bounce left cascade>
              <h4>Front-End</h4>

              <div className="d-flex justify-content-between">
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div className="skill">
                <div className="skill-level" style={{ width: "90%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div className="skill">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <p>BOOTSTRAP</p>
                <p>90%</p>
              </div>
              <div className="skill">
                <div className="skill-level" style={{ width: "90%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <p>JAVASCRIPT</p>
                <p>70%</p>
              </div>
              <div className="skill">
                <div className="skill-level" style={{ width: "70%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <p>REACT</p>
                <p>70%</p>
              </div>
              <div className="skill">
                <div className="skill-level" style={{ width: "70%" }}></div>
              </div>
              <div></div>
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
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <p>MongoDB</p>
                <p>70%</p>
              </div>
              <div className="skill">
                <div className="skill-level" style={{ width: "70%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <p>ExpressJs</p>
                <p>80%</p>
              </div>
              <div className="skill">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
              <div className="d-flex justify-content-between">
                <p>Firebase</p>
                <p>80%</p>
              </div>
              <div className="skill">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
