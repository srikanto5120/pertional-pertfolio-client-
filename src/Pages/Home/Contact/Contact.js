import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

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
      .post("http://localhost:5001/users", user)
      .then((res) => setMsg(res.data.respMesg));
  };
  return (
    <div>
      <Row>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}>
          <p class="mb-3 mt-2" style={{ color: "green", marginLeft: "57px" }}>
            <b>{msg}</b>
          </p>
          <Form onSubmit={handleFrom}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="to"
                value={to}
                onChange={onInputChange}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={subject}
                onChange={onInputChange}
                placeholder=" name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Example textarea</Form.Label>
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
              Send Mail
            </button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
