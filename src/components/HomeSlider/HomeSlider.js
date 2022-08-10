import React from "react";
import { Carousel } from "react-bootstrap";
const HomeSlider = () => {
  return (
    <div className="slideshow slideshow-wrapper pb-section">
      <div className="home-slideshow">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slideshow-banners/Factory_Web_Banner.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slideshow-banners/M33-8-128-u.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slideshow-banners/sohoj-kisti-web-banner.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slideshow-banners/tab-a2019-offer.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slideshow-banners/viber_image_2022-05-24_17-00-21-874.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slideshow-banners/Your_all_necessities_under_on_roof.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeSlider;
