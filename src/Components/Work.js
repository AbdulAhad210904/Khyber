import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { FiArrowRight } from "react-icons/fi";
import ReactCardSlider from 'react-card-slider-component';
import  milkshake  from "../images/chocolate milkshake.jpeg";


const Work = () => {
  function sliderClick() {
    // Add your click event logic here
    console.log('Slider clicked!');
}
  const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
]
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et",
    },
  ];
  return (
    <>
    <ReactCardSlider slides={slides}/>
    <div className="box">
      <div className="image">
        <button className="price">$10.99 USD</button>
        <img src={milkshake} alt="Chocolate Milkshake" />
      </div>
      <h3 className="tittle">Classic Burger</h3>
      <p className="sub-tittle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum.
      </p>
    </div>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Browse menu by Category</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <button className="sec">
            Browse menu <FiArrowRight />{" "}
          </button>
          </div>
        ))}
      </div>
      
    </div>
    </>
  )
};

export default Work;
