import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from '../assets/2.jpg'
import logo2 from '../assets/3.jpg'


export const CarouselRoomDetails = () => {
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      }
    return (
        <div id='slider__container'>
            <Slider  {...settings} >
            <img src={logo} alt=""/>
                <img src={logo2} alt=""/>
                <img src={logo} alt=""/>
                <img src={logo2} alt=""/>
                <img src={logo} alt=""/>
                <img src={logo2} alt=""/>
                <img src={logo} alt=""/>
                <img src={logo2} alt=""/>

            </Slider>
        </div>
    )
}
