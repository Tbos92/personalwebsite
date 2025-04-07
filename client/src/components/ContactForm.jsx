import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" contolId="formNameFields">
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="First name"
              className="mb-3"
            >
              <Form.Control typer="text" placeholder="First name" />{" "}
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Last name"
              className="mb-3"
            >
              <Form.Control typer="text" placeholder="Last name" />{" "}
            </FloatingLabel>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" contolId="formBasicEmail">
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address, example email@example.com"
              className="mb-3"
            >
              <Form.Control
                typer="email"
                placeholder="Email address, example email@example.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />{" "}
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Phone number, example: 123-456-7890"
              className="mb-3"
            >
              <Form.Control
                type="tel"
                placeholder="Phone number, example: 123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />{" "}
            </FloatingLabel>
          </Col>
        </Row>
        <Form.Text className="text-muted">
          I'll never share your contact details with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTextarea1">
        <FloatingLabel
          controlId="floatingInput"
          label="Have a message for me?"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            style={{ height: "120px" }}
            placeholder="Have a message for me?"
          />
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
