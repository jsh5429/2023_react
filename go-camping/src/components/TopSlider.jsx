import React from 'react'
import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/topslider.css';
import '../img/camp1.jpg';
import '../img/camp2.jpg';
import '../img/camp3.jpg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", height : "20px",
    width : "20px", right:"10px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", height : "20px",
    width:"20px", zIndex:"9", left:"10px" }}
      onClick={onClick}
    />
  );
}

export default class TopSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const pictures = ['camp1.jpg','camp2.jpg','camp3.jpg'];
    return (
        <div className='top-slider-style'>
            <Slider {...settings}>
            {
              pictures.map((camp)=>(
                <div>
                  <div
                  style={{
                    backgroundImage : `url(${require(`../img/${camp}`)})`,
                    width : "100%",
                    height: "700px",
                    backgroundSize : "cover",
                    backgroundPosition : "center",
                    marginTop : "30px"
                  }}
                />
                </div>
              ))
            }
            </Slider>
        </div>
    );
  }
}
