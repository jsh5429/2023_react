import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/campingslide.css'

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

export default class CampingSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows : true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const pictures = ['camp1.jpg','camp2.jpg','camp3.jpg', 'camp4.jpg', 'camp5.jpg'];

    return (
      <div style={{textAlign: "center", margin : "50px"}}>
        <h1 style={{color : "#A60311"}}>캠핑장 추천</h1>
        <Slider {...settings}>
        {
              pictures.map((camp)=>(
                <div>
                  <Card
                  style={{
                    backgroundImage : `url(${require(`../img/${camp}`)})`,
                    width : "100%",
                    height: "500px",
                    backgroundSize : "cover",
                    backgroundPosition : "center"
                  }}
                >
                  <Card.Body className="camp-slide-bar">
                  <Card.Title style={{padding : "20px", fontWeight : "bold", color : "white"}}>Card Title</Card.Title>
                  <Card.Text style={{marginBottom : "0"}}>캠핑장 설명</Card.Text>
                </Card.Body>
                </Card>
                </div>
              ))
            }
        </Slider>
      </div>
    );
  }
}