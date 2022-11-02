import React from "react";
import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import TokenObtain from "../TokenObtain/TokenObtain";
//import CSS
import "./GreenDAOla.scss";
const GreenDAOla = () => {
  return (
    <div className="p-5 text-center token-item mt-[100px]">
      <h1 className="text-center">GreenDAOla($GD)</h1>
      <span className="text-center">
        Governance token/Stable coin for sustainability ecosystem
      </span>

      <Row
        lg={2}
        md={1}
        sm={1}
        xs={1}
        className="d-flex align-items-end justify-content-center mt-4"
      >
        <Col>
          <div className="d-grid gap-2">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/token.png" alt="GreenDAOla" />
            </div>
          </div>
          <Row className="mt-4">
            <Col>
              <Button variant="success" className="w-100">
                BUY
              </Button>
            </Col>
            <Col>
              <Button variant="danger" className="w-100">
                SELL
              </Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Card>
            <Card.Header>SUPPLY</Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  Total Supply: 5,000,000,000 tokens
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Header>VALUE</Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>Value is 1 $GD = $1 SGD</ListGroup.Item>
                <ListGroup.Item>
                  AI algorithm determines ESG offset value per token
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <h2 className="text-start">How to obtain $GD token?</h2>
        <TokenObtain />
      </Row>
    </div>
  );
};

export default GreenDAOla;
