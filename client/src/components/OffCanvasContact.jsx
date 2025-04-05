import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ContactForm from "./ContactForm";

function OffCanvasContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact Me!
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Form!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContactForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasContact;
