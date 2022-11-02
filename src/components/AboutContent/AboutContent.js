import React from "react";

import "./AboutContent.scss";
const AboutContent = () => {
  return (
    <div className="container py-5">
      <div className="row p-4">
        <div className="col-md-6 col-sm-12 content-item text-center">
          <h3>Mission</h3>
          <span>
            To make sustainability easily accessible for businesses and
            individuals.
          </span>
        </div>
        <div className="col-md-6 col-sm-12 content-item text-center right-item">
          <h3>VISION</h3>
          <span>
            A futuristic civilization with modern comforts through innovative
            solutions; for a sustainable future.
          </span>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-lg-5 col-md-8 col-sm-12 mx-auto text-center about-me">
          <img src="/56_JPG.webp" alt="frederick" />
          <p className="mt-5">
            Since 2018, our founder Frederick has been developing sustainable
            solutions to challenges in the global food supply chain. Today he
            sets out to help businesses adopt sustainable ESG plans and
            solutions through digitisation; providing accountability to
            stakeholders and, for a better future for our planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
