import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from "../hooks/useFetch";

export const CarouselRoomDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = useFetch();

  return (
    <>
      <div id="slider__container">
        <Slider {...settings}>
          {data[1].map((item) => (
            <img src={item} key={item} alt="room image" />
          ))}
        </Slider>
        <div className="slider__footer">
          <p>$ {new Intl.NumberFormat("es-CO").format(data[0])} COP / Noche</p>
        </div>
      </div>
    </>
  );
};
