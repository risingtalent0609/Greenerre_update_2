import React from "react";

//import Components
import Banner from "../../components/Banner/Banner";
import AboutContent from "../../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div className="mt-[100px]">
      <Banner title="About" />
      <AboutContent />
    </div>
  );
};

export default About;
