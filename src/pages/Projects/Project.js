import React from "react";

//import Components
import BlogItem from "../../components/BlogItem/BlogItem";
const Project = () => {
  return (
    <div className="container mt-[100px]">
      <h1 className="text-center p-5">PROJECTS</h1>
      <div className="row px-5">
        <div className="col-md-6 col-sm-12 px-0">
          <BlogItem
            imgURL="/projects/token.webp"
            title="GreenDAO"
            content=""
            position="top-left"
          />
        </div>
        <div className="col-lg-6 col-md-12 px-0 right-item">
          <BlogItem
            imgURL="/projects/network.webp"
            title="Kenek"
            content="A revolutionary and disruptive ecosystem to manage your contacts and Kenek. Providing a sustainable alternative to traditional name cards, with a powerful organisation system to sort your contact any way you want. Kenek frequently organises networking sessions across various industries to encourage growth and collaboration."
            position="top-right"
          />
        </div>
        <div className="col-lg-6 col-md-12 px-0">
          <BlogItem
            imgURL="/projects/aircapsulate.webp"
            title="AIRCAPSULATE"
            content="A portable personal climate-control system to ensure maximum comfort in any climate."
            position="bottom-left"
          />
        </div>
        <div className="col-md-6 col-sm-12 px-0 right-item">
          <BlogItem
            imgURL="/projects/rapture.webp"
            title="Project Rapture"
            content="COMING SOON"
            position="bottom-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
