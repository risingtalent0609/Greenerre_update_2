import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./HomeCarousel.scss";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-container mt-[100px]"
      >
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="/slide/esg-reporting.jpg"
            alt="First slide"
          />

          <Link>
            <div className="banner-description">
              {/* <img
                src="/slide/esg-reporting.jpg"
                width="150px"
                alt="esg reporting"
              /> */}
              What is ESG Reporting? <br /> And why should it be your
              organization's new focus?
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="/slide/slide1.webp"
            alt="Second slide"
          />

          <Link>
            <div className="banner-description">
              {/* <img
                src="/slide/tree-planting.jpg"
                width="150px"
                alt="tree planting"
              /> */}
              Do you know you can EARN while doing sustainable activities?{" "}
              <br />
              You can click here to find an activity near you today.
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="/slide/slide3.webp"
            alt="Third slide"
          />
          <Link>
            <div className="banner-description">
              {/* <img
                src="/slide/web3-business.png"
                width="150px"
                alt="web3 business"
              /> */}
              How your business can use WEB3?
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
      <div>
        <div
          style={{
            position: "absolute",
            top: "20%",
            width: "100%",
            display: "flex",
            "justify-content": "center",
          }}
          id="logoImage"
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              "padding-left": "100px",
              "padding-right": "100px",
            }}
          >
            <img src="/Greenerre word.jpg" width="500px" alt="site logo" />
            <h3 style={{ color: "green", marginLeft: "20px" }}>
              Sustainability Made Easy
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
