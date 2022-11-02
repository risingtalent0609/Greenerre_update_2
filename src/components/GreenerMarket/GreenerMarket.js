import React from "react";
import { Row, Col } from "react-bootstrap";
import HButton from "../HButton/HButton";

//import CSS
import "./GreenerMarket.scss";
const GreenerMarket = () => {
  const toWeb2Marketplace = () => {
    window.open("https://web2marketplace.greenerre.sg/", "_blank");
  };

  const toWeb3Marketplace = () => {
    window.open("https://web3marketplace.greenerre.sg/", "_blank");
  };

  return (
    <div className="p-5 mt-[100px]">
      <h1 className="text-center mb-5">TheGreenerMarket</h1>
      <Row className="border-2 market-container">
        <Col className="p-5" lg={6} xs={12}>
          <ul>
            <li>Features sustainable products and produce</li>
            <li>
              Retail partners may offer products of services through this
              channel
            </li>
            <li>Utilise either fiat or $GD tokens</li>
            <li>No transaction fee</li>
            <li>Offer rebates for make ‘sustainable choice’ products</li>
            <li>Sustainable supply-chain products and services</li>
          </ul>
        </Col>
        <Col
          lg={6}
          xs={12}
          className="marketplace-control d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/marketplace.webp')`,
          }}
        >
          <div className="p-5 d-flex align-items-center justify-content-center">
            <HButton
              text="Web 3"
              className="mr-4"
              handleClick={toWeb3Marketplace}
            />{" "}
            &nbsp;&nbsp;&nbsp;
            <HButton text="Good & Service" handleClick={toWeb2Marketplace} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GreenerMarket;
