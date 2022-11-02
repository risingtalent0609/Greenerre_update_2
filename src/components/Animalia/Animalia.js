import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";

// import CSS
import "./Animalia.scss";
const Animalia = () => {
  return (
    <div className="p-5">
      <h1>Animalia</h1>
      <Row lg={2} xs={1} className="border-2">
        <Col>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/carousel/carousel1.jpg"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/carousel/carousel2.jpg"
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/carousel/carousel3.jpg"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/carousel/carousel4.jpg"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="bg-slate-100 p-5 d-flex align-items-center justify-content-center flex-column">
          <h2>How it works</h2>
          <ul className="animalia-lists">
            <li>Ultra-high resolution, realistic renders of animals</li>
            <li>
              Meticulously rigged and animated with pre-programmed logic to
              imitate an animal’s natural movements and reactions based on
              environmental interactions
            </li>
            <li>VR application with motion gesture pen or hand gestures</li>
            <li>Dissect anatomical layers</li>
            <li>Digitize your pet*</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Animalia;
