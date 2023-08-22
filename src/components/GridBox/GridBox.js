import React from "react";
import { useState, useEffect } from "react";
import "./GridBox.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LeftNavigation from "../Carousel/LeftNavigation/LeftNavigation";
import RightNavigation from "../Carousel/RightNavigation/RightNavigation";

function GridBox({ title, data, type }) {
  const [buttonText, setButtonText] = useState("Show all");
  const [isCollapse, setIsCollapse] = useState(true);

  const handleToggle = () => {
    if (buttonText === "Show all") {
      setButtonText("Collapse");
      setIsCollapse(false);
    } else {
      setButtonText("Show all");
      setIsCollapse(true);
    }
  };

  return (
    <>
      <div className="grid-box--header">
        <h3>{title}</h3>
        <button onClick={handleToggle}>{buttonText}</button>
      </div>

      {!isCollapse ? (
        <div
          className={
            "grid-container" + (isCollapse ? "" : " grid-container--collapse")
          }
        >
          {data.map((item) => (
            <Card item={item} type={type} />
          ))}
        </div>
      ) : (
        <Swiper
          style={{ padding: "0 20px" }}
          initialSlide={0}
          modules={[Navigation]}
          spaceBetween={40}
          allowTouchMove
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 7 },
          }}
        >
          <LeftNavigation />
          <RightNavigation />

          {data.map((item) => (
            <SwiperSlide>
              <Card item={item} type={type} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default GridBox;
