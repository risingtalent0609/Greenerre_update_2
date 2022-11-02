import React from "react";

//import CSS
import "./Banner.scss";
const Banner = (props) => {
  return (
    <div
      className="banner-item align-items-center justify-content-center d-flex"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 77, 25, 0.5), rgba(0, 77, 55, 0.5)), url('${process.env.PUBLIC_URL}/banner.jpg')`,
      }}
    >
      <h1 className="text-center">{props.title}</h1>
    </div>
  );
};

export default Banner;
