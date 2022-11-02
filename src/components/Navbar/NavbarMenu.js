import React from "react";
import { useState } from "react";
//import Components
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import BookModal from "../BookModal/BookModal";

//import CSS
import "./NavbarMenu.scss";
const NavbarMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };

  const handleBook = () => {
    setShow(false);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" className="pl-5">
          <img src="/logo.webp" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100vh" }}
            navbarScroll
          >
            <Nav.Link href="/" className="px-4">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="px-4">
              About
            </Nav.Link>
            <Nav.Link href="/services" className="px-4">
              Services
            </Nav.Link>
            <Nav.Link href="/greendao" className="px-4">
              GreenDAO
            </Nav.Link>
            <NavDropdown
              title="More"
              id="navbarScrollingDropdown"
              className="px-4"
            >
              <NavDropdown.Item href="/project">Projects</NavDropdown.Item>
              {/* <NavDropdown.Item href="/outreach-education">
                Outreach &amp; Education
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/advisor">
                Board of Advisors
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex px-4">
              <button
                type="button"
                className="btn-consultation"
                onClick={handleOpen}
              >
                Book a Consultation
              </button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <BookModal show={show} onClose={handleClose} onBook={handleBook} />
    </Navbar>
  );
};

export default NavbarMenu;
