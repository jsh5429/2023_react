import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from 'react-youtube';

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
      tyle={{ ...style, display: "block", background: "none", height : "20px",
    width:"20px", zIndex:"9", left:"10px" }}
      onClick={onClick}
    />
  );
}

export default class VideoSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows : true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      width : "500px"
    };
    return (
      <div style={{backgroundColor : ""}}>
        <h1>안전수칙 동영상</h1>
        <Slider {...settings}>
          <YouTube
            videoId="8U7O0Lh6uX0"
            opts={{
              width : "500px",
              height : "300px",
              playerVars : {
                autoplay : 1,
                rel : 0,
                modestbranding : 1,
              }
            }}
            onEnd={(e)=>{e.target.stopVideo(0);}}
          />
          
          <div>
            <YouTube 
              videoId="4aru6TnPDfY"
              opts={{
                width : "500px",
                height : "300px",
                playerVars : {
                  autoplay : 1,
                  rel : 0,
                  modestbranding : 1,
                }
              }}
            onEnd={(e)=>{e.target.stopVideo(0);}}
            />
          </div>

          <div>
            <YouTube 
              videoId="4aru6TnPDfY"
              opts={{
                width : "500px",
                height : "300px",
                playerVars : {
                  autoplay : 1,
                  rel : 0,
                  modestbranding : 1,
                }
              }}
            onEnd={(e)=>{e.target.stopVideo(0);}}
            />
          </div>
          <div>
            <YouTube 
              videoId="4aru6TnPDfY"
              opts={{
                width : "500px",
                height : "300px",
                playerVars : {
                  autoplay : 1,
                  rel : 0,
                  modestbranding : 1,
                }
              }}
            onEnd={(e)=>{e.target.stopVideo(0);}}
            />
          </div>
        </Slider>
      </div>
    );
  }
}