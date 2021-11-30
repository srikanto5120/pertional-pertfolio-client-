import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([0]);
  console.log(details);

  useEffect(() => {
    fetch(`https://warm-taiga-19161.herokuapp.com/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const {
    name,
    overview1,
    overview2,
    overview3,
    screenshot1,
    screenshot2,
    screenshot3,
    technology,
    liveLink,
  } = details;

  return (
    <div className="w-75 mx-auto">
      <Row>
        <Col md={6}>
          <Fade left>
            <img className=" w-100 full-img" src={screenshot1} alt=""></img>
          </Fade>
        </Col>
        <Col>
          <Fade right>
            <img className="w-100 " src={screenshot2} alt=""></img>
          </Fade>
          <br />

          <Fade right>
            <img className="w-100 mt-4 " src={screenshot3} alt=""></img>
          </Fade>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif ",
              background: "#f8f9fa",
              padding: "20px ",
              marginTop: "50px",
            }}
          >
            <h4>{name}</h4>
            <h6>Overview</h6>
            <ul>
              <li>{overview1}</li>
              <li>{overview2}</li>
              <li>{overview3}</li>
            </ul>
            <h6>Technology</h6>
            <p>{technology}</p>
            <a className="btn bg-primary text-white px-5" href={liveLink}>
              {" "}
              Visit
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
