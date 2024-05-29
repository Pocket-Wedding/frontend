import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; //캐러셀 라이브러리
import "slick-carousel/slick/slick-theme.css";

import Mainimage from "../../assets/Image/Mainimage.svg";
import Mainimage2 from "../../assets/Image/Mainimage2.svg";
import Mainimage3 from "../../assets/Image/Mainimage3.svg";
import Mainimage4 from "../../assets/Image/Mainimage4.svg";
import Mainimage5 from "../../assets/Image/Mainimage5.svg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="flex items-center justify-center">
        <img src={Mainimage} style={{ margin: "auto" }} />
      </div>
      <div className="flex items-center justify-center">
        <img src={Mainimage2} style={{ margin: "auto" }} />
      </div>
      <div className="flex items-center justify-center">
        <img src={Mainimage3} style={{ margin: "auto" }} />
      </div>
      <div className="flex items-center justify-center">
        <img src={Mainimage4} style={{ margin: "auto" }} />
      </div>
      <div className="flex items-center justify-center">
        <img src={Mainimage5} style={{ margin: "auto" }} />
      </div>
    </Slider>
  );
};
export default SimpleSlider;
