import React from "react";
import { Row, Col } from "react-bootstrap";

import TokenObtainItem from "../TokenObtainItem/TokenObtainItem";
//import CSS
import "./TokenObtain.scss";
const TokenObtain = () => {
  return (
    <div className="ecosystem-control">
      <Row lg={5} md={2} xs={1} className="eco-content">
        <Col className="mb-2">
          <TokenObtainItem text="Direct purchase/Investment" />
        </Col>
        <Col className="mb-2">
          <TokenObtainItem text="Airdrop to AOC holders" />
        </Col>
        <Col className="mb-2">
          <TokenObtainItem text="Approved Partners’ projects" />
        </Col>
        <Col className="mb-2">
          <TokenObtainItem text="“Mining” though ‘Green Activities’" />
        </Col>
        <Col className="mb-2">
          <TokenObtainItem text="Staking" />
        </Col>
      </Row>
    </div>
  );
};

export default TokenObtain;
