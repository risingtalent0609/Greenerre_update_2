import React from "react";

//import Components
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import CSS
import "./HomeContent.scss";

const HomeContent = () => {
  return (
    <Row lg={3} md={2} sm={1} className="g-4 m-5 home-content">
      <Col>
        <Link to="/services/esg">
          <Card className="p-8 ">
            <Card.Img variant="top" src="/home/esg.jpg" />
            <Card.Body>
              <Card.Title className="text-center">
                Corporate ESG Services
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col>
        <a href="/services/web3">
          <Card className="p-8">
            <Card.Img variant="top" src="/home/web3.webp" />
            <Card.Body>
              <Card.Title className="text-center">WEB3 SERVICES</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col>
        <Link to="/greendao">
          <Card className="p-8">
            <Card.Img variant="top" src="/home/greendao.webp" />
            <Card.Body>
              <Card.Title className="text-center">GREENDAO</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>

    // <CardGroup className="m-5">

    // </CardGroup>
  );
};

export default HomeContent;
