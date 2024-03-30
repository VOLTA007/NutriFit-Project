import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: false
  };
  return (
    <div style={{ width: "100%", overflow: "hidden" }}> {/* Ensure the slider doesn't overflow its container */}
      <Slider {...settings} style={{ width: "100%" }}> {/* Set the width of the slider to 100% */}
        <div>
          <img src="./Gym1.jpg" alt="Gym 1" />
        </div>
        <div>
          <img src="./Gym2.jpg" alt="Gym 2" />
        </div>
        <div>
          <img src="./Gym3.jpg" alt="Gym 3" />
        </div>
      </Slider>
    </div>
  );
}
