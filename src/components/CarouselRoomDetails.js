import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/2.jpg";
import logo2 from "../assets/3.jpg";
import logo3 from "../assets/4.jpg";
import logo4 from "../assets/5.jpg";
import logo5 from "../assets/6.jpg";

export const CarouselRoomDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="slider__container">
      <Slider {...settings}>
        <img src={logo} alt="" />
        <img src={logo2} alt="" />
        <img src={logo} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo} alt="" />
      </Slider>
      <div className="slider__footer">
        <p>50.000 COP / Noche</p>
      </div>
    </div>
  );
};
