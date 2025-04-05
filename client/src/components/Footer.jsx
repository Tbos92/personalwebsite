import { Navbar, Container, Nav } from "react-bootstrap";
import OffCanvasContact from "./OffCanvasContact";
import { useState } from "react";

function Footer() {
  return (
    <Navbar
      fixed="bottom"
      bg="dark"
      variant="dark"
      className="justify-content-center"
    >
      <Container className="justify-content-between">
        <Navbar.Text>&copy; {new Date().getFullYear()} Tyler Bos</Navbar.Text>
        <Nav>
          <Nav.Link
            href="https://www.linkedin.com/in/tyler-bos-62292b107/"
            target="_blank"
            className="nav-link-custom"
          >
            <i
              className="bi bi-linkedin me-1 nav-icon-custom"
              aria-hidden="true"
            ></i>
          </Nav.Link>
          <Nav.Link
            href="https://github.com/Tbos92"
            target="_blank"
            className="nav-link-custom"
          >
            <i
              className="bi bi-github me-1 nav-icon-custom"
              aria-hidden="true"
            ></i>
          </Nav.Link>
          <OffCanvasContact />
          <Nav.Link href="/privacy" className="text-light">
            Privacy
          </Nav.Link>
          <Nav.Link href="/terms" className="text-light">
            Terms
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
