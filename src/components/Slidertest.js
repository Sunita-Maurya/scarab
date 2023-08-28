import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


let cards = [
  {
    key: 1,
    img:"/images/heros/1.png",
  },
  {
    key: 2,
    img:"/images/heros/2.png",
  },
  {
    key: 3,
    img:"/images/heros/3.png",
  },
  {
    key: 4,
    img:"/images/heros/4.png",
  },
  {
    key: 5,
    img:"/images/heros/5.png",
  }
];


const CenterMode = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    centerPadding: "0",
    beforeChange: (current, next) => setActiveIndex(next) , 
  };



  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings} >
{
  cards.map((item,index)=>
  <div className="parent">
  <div     className={`border p-3 h-full transition-all ${
                index === activeIndex
                  ? "bg-[#EF8D30] active-img"
                  : index === (activeIndex - 1 + cards.length) % cards.length
                  ? "left-img"
                  : index === (activeIndex + 1) % cards.length
                  ? "right-img"
                  : ""
              }`}>
    <img src={item.img} alt="img" className="w-full h-full"/>
    <h1 className="text-2xl"> {item.key}</h1>
   
  </div>
  </div>)
}       
      </Slider>
    </div>
  );
};

export default CenterMode;
