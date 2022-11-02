import React from "react";

import { Accordion, Row, Col } from "react-bootstrap";

//import CSS
import "./Faq.scss";
const Faq = () => {
  return (
    <div className="p-4 faq-control mt-5">
      <h1 className="text-center pb-4">Frequently Asked Questions (FAQ)</h1>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="d-none d-md-flex"></Col>
        <Col xs={12} sm={8}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Questions #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Questions #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col className="d-none d-md-flex"></Col>
      </Row>
    </div>
  );
};

export default Faq;
