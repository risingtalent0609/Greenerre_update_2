import React from "react";
import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./Ecosystem.scss";

import EcosystemItem from "../EcosystemItem/EcosystemItem";
import GreendaoContent from "../GreendaoContent/GreendaoContent";
const Ecosystem = () => {
  return (
    <>
      <div id="logo_ecosystem">
        <img src="/greenDAO_invis_bg.png" alt="logo goes here" />
      </div>
      <div className="p-5">
        <h1 className="text-center mt-10 mb-10 text-success fs-0">Ecosystem</h1>
        <Row lg={3} md={2} xs={1} className="eco-content">
          <Col className="mb-2">
            <EcosystemItem
              className="my_pic"
              text="Altlanteans Official Club"
              alink="https://altlanteansoc.com/"
              type="out"
              image="/aoc.jpg"
            />
          </Col>
          <Col className="mb-2">
            <EcosystemItem
              className="my_pic"
              text="GreenDAOla"
              alink="/greenDAOla"
              image="/token.png"
              type="local"
            />
          </Col>
          {/* <Col className="mb-2">
            <EcosystemItem
              text="Vpets"
              alink="/vpets"
              image="/vpets.png"
              type="local"
            />
          </Col> */}
          <Col className="mb-2">
            <EcosystemItem
              className="my_pic"
              text="TheGreenerMarket"
              alink="/market"
              image="marketplace.png"
              type="local"
            />
          </Col>
          {/* <Col className="mb-2">
          <EcosystemItem
            text="Coming soon"
            alink="/soon"
            image="/coming-soon.png"
          />
        </Col> */}
        </Row>
      </div>
      <div>
        <GreendaoContent />
      </div>
    </>
  );
};

export default Ecosystem;
