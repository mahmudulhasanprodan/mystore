import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import SliderImgOne from "../../assets/HomeComponentpic/SliderOne.jpg"
import SliderImgTwo from "../../assets/HomeComponentpic/Slider2.jpg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SliderPart = () => {
// Custom Arrow Function is Here
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#9F9EA2",
        width: "35px",
        height: "35px",
        position: "absolute",
        top: "50%",
        left: "0px",
        transform: "translateY(-80%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full cursor-pointer">
        <p className="text-xl"><IoIosArrowBack /></p>
      </div>

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#9F9EA2",
        width: "35px",
        height: "35px",
        position: "absolute",
        right: "0%",
        zIndex: "1",
        top: "50%",
        transform: "translateY(-80%)",
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full cursor-pointer">
        <p className="text-xl">
          <IoIosArrowForward />
        </p>
      </div>
    </div>
  );
}
// Custom Arrow Function is Here
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div className="hidden lg:block">
        <Slider {...settings}>
          <div>
            <picture>
                <img src={SliderImgOne} alt={SliderImgOne} />
            </picture>
          </div>
          <div>
            <picture>
                <img src={SliderImgTwo} alt={SliderImgTwo} />
            </picture>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SliderPart
