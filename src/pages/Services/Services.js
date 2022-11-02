import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
//import Components
import Banner from "../../components/Banner/Banner";
import ServiceContent from "../../components/ServiceContent/ServiceContent";

const Services = () => {
  const { id } = useParams();

  useEffect(() => {
    let scrollDiv = 0;
    const offset = 100;
    //page margin 100px
    switch (id) {
      case "web3":
        scrollDiv =
          document.getElementsByClassName("web3-service")[0].offsetTop - offset;
        break;
      case "esg":
        scrollDiv =
          document.getElementsByClassName("esg-service")[0].offsetTop - offset;
        break;
      default:
        scrollDiv = 0 - offset;
        break;
    }
    window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  });
  return (
    <div className="mt-[100px]">
      <Banner title="Products and Services" />

      <ServiceContent />
    </div>
  );
};

export default Services;
