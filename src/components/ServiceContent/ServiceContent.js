import React from "react";

//import CSS
import "./ServiceContent.scss";
const ServiceContent = () => {
  return (
    <div className="container">
      <div className="row service-item esg-service my-5 mx-5">
        <div className="col-md-6 col-sm-12 py-5 px-4">
          <h2 className="sm:text-center">ESG Services</h2>
          <ol type="1">
            <li>ESG Reporting</li>
            <li>Productivity and Sustainability Grant Application</li>
            <li>Renewable Energy Solutions</li>
            <li>Carbon Accounting/ Energy Audit</li>
            <li>CSR/ Outreach Opportunities</li>
            <li>Carbon Offset Credits</li>
          </ol>
        </div>
        <div className="col-md-6 col-sm-12 p-0 d-none d-md-block">
          <img src="/services/esg.webp" width="100%" alt="esg" />
        </div>
      </div>
      <div className="row service-item web3-service my-5 mx-5">
        <div className="col-md-6 col-sm-12 py-5 px-4">
          <h2 className="sm:text-center">WEB3 Services</h2>
          <ul>
            <li>Development, Deployment and Testing of</li>
            <ul>
              <li>Blockchain protocols</li>
              <li>Smart contracts</li>
              <li>NFTs</li>
              <li>Marketplace</li>
              <li>Tokensation</li>
            </ul>
            <li>Virtual Reality/Augmented Reality applications</li>
            <li>Metaverse Creation</li>
            <li>Community Management</li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12 p-0 d-none d-md-block">
          <img src="/services/web3.webp" width="100%" alt="web3" />
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
