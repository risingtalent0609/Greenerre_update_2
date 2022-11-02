import React from "react";
import { Row, Col } from "react-bootstrap";

//import Component
import CStatistics from "../CStatistics/CStatistics";
import VPetsCategory from "../VPetsCategory/VpetsCategory";

//import CSS
import "./Vpets.scss";
const VPets = () => {
  return (
    <div className="p-5 text-center">
      <h1 className="text-center">VPets</h1>
      <span className="text-center">Game-for-Good mobile pet simulator</span>
      <Row className="border mt-5" xs={1} lg={2}>
        <Col className="d-flex align-items-center justify-content-center bg-slate-100">
          <img src="/vpets.png" width="300px" height="300px" alt="vpets" />
        </Col>
        <Col className="p-5 d-flex flex-column align-items-center justify-content-center">
          <VPetsCategory />

          <div className="grid gap-2 text-lg mt-5">
            <p className="text-start">
              Connected to <b>Polygon Blockchain</b> via Smart Contract
            </p>
            <p className="text-start">
              VPets aims to eliminate cruel and unsustainable animal trade such
              as puppy/kitten mills, trade of exotic and endangered animals,
              trophy hunting, invasive species and zoos and aquariums
            </p>
            <p className="text-start">
              VPets will actively support existing projects which deal with
              animal welfare such as ACRES, SPCA and various other non-profit
              veterinary clinics and shelters
            </p>
          </div>
          <div>
            {/* <CBreadcrumb /> */}
            <CStatistics />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VPets;
