import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const customNavbar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#2e027a" }}
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/" className="custom-wordmark">
          Tyler<span style={{ color: "#00C9A7" }}>Bos</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link-custom">
              <i
                className="bi bi-house me-1 nav-icon-custom"
                aria-hidden="true"
              ></i>{" "}
              Home
            </Nav.Link>
            <Nav.Link href="/portfolio" className="nav-link-custom">
              <i
                className="bi bi-journal-album me-1 nav-icon-custom"
                aria-hidden="true"
              ></i>{" "}
              Portfolio
            </Nav.Link>
            <Nav.Link href="/blog" className="nav-link-custom">
              <i
                className="bi bi-card-text me-1 nav-icon-custom"
                aria-hidden="true"
              ></i>{" "}
              Blog
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">
              <i
                className="bi bi-file-person me-1 nav-icon-custom"
                aria-hidden="true"
              ></i>{" "}
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">
              <i
                className="bi bi-megaphone me-1 nav-icon-custom"
                aria-hidden="true"
              ></i>{" "}
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default customNavbar;
