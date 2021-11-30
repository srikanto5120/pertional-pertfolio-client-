import React, { useEffect } from "react";
import "./Protfolio.css";

import { Card, Col, Row } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="container" style={{ fontFamily: "'Poppins', sans-serif " }}>
      <Row>
        <Bounce left cascade>
          <div className="text-center my-5">
            <h4 className=" bg-color">Portfolio</h4>
            <h1>Some of my most recent projects</h1>
          </div>
        </Bounce>

        {
          // eslint-disable-next-line array-callback-return
          projects.map((project) => (
            <Col sm={12} md={4} className="g-3">
              <Fade bottom>
                <Card className="card">
                  <Card.Img
                    className="img-box"
                    variant="top"
                    src={project.img}
                  />
                  <Card.Body>
                    <div className="content">
                      <h4>{project.name}</h4>

                      <div className="d-flex   mt-5">
                        {/* <Link
                          to={`/projects/${project._id}`}
                          className="btn bg-primary me-5 text-white px-4 "
                        >
                          {" "}
                          More Details
                        </Link> */}
                        <a href={project.liveLink}>
                          {" "}
                          <button className="btn bg-primary text-white px-4">
                            {" "}
                            Visit
                          </button>
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Projects;