import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; //캐러셀 라이브러리
import "slick-carousel/slick/slick-theme.css";

import Mainimage from "../../assets/Image/Mainimage.svg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="flex items-center justify-center">
        <img src={Mainimage} style={{ margin: "auto" }} />
      </div>
      <div className="flex items-center justify-center" style={{ height: "100vh" }}>
        <img src={Mainimage} style={{ margin: "auto" }} />
      </div>
    </Slider>
  );
};
export default SimpleSlider;
