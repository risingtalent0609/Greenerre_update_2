import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

//import CSS
import "./Help.scss";

const Help = () => {
  return (
    <div className="p-5">
      <h1 className="text-center pb-4">Need Help?</h1>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="d-none d-md-flex"></Col>
        <Col xs={12} sm={8}>
          <Form>
            <Form.Control
              type="text"
              placeholder="Enter ticket subject"
              className="mb-3"
            ></Form.Control>
            <Form.Control as="textarea" rows={5} className="mb-3" />
            <div className="d-flex justify-content-end align-items-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
        <Col className="d-none d-md-flex"></Col>
      </Row>
    </div>
  );
};

export default Help;
