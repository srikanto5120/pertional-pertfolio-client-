import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Fade } from "react-reveal";
import "./Contact.css";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    to: "",
    subject: "",
    description: "",
  });

  const { to, subject, description } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFrom = async (e) => {
    e.preventDefault();
    await axios
      .post("https://warm-taiga-19161.herokuapp.com/users", user)
      .then((res) => setMsg(res.data.respMesg));
  };
  return (
    <div
      className="contact mt-5 "
      style={{ fontFamily: " Roboto Condensed', sans-serif" }}
    >
      <div className="container contact">
        <Row>
          <Col sm={12} md={6} className="mr-4">
            <Fade bottom>
              <h1 className="mb-5 fw-bold">Let's get in touch</h1>
              <h5 className="contact-text">
                I enjoy discussing new projects and design challenges. Please
                share as much info, as possible so we can get the most out of
                our first catch-up.
              </h5>
              <h3>Living In:</h3>
              <p>Thakurgoan Bangladesh</p>
              <h2>Call:</h2>
              <p>(+880)1737813575</p>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100009447675844"
                  target="_blank"
                >
                  <i className="fab p-3 icon fa-facebook"></i>
                </a>
                <a href="https://github.com/srikanto5120" target="_blank">
                  {" "}
                  <i className="fab icon fa-github"></i>
                </a>
                <a
                  href=" https://www.linkedin.com/in/sreekanta-singha-64b1b6203/"
                  target="_blank"
                >
                  {" "}
                  <i className="fab icon p-3 fa-linkedin"></i>
                </a>
              </div>
            </Fade>
          </Col>

          <Col sm={12} md={6}>
            <h2>Estimate your Project?</h2>

            <p
              className="mb-3 mt-2"
              style={{ color: "green", marginLeft: "57px" }}
            >
              <b>{msg}</b>
            </p>
            <Fade bottom>
              <Form onSubmit={handleFrom}>
                <Form.Group className="mb-3">
                  <Form.Label> Your Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="to"
                    value={to}
                    onChange={onInputChange}
                    placeholder="Enter Your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> What Your Name?</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={onInputChange}
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>How can I Help you?</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    rows={3}
                  />
                </Form.Group>
                <button
                  className="btn bg-primary btn-block text-white"
                  type="submit"
                >
                  {" "}
                  Send Message
                </button>
              </Form>
            </Fade>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
