import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect } from "react";
import LeftNavigation from "./LeftNavigation/LeftNavigation";
import RightNavigation from "./RightNavigation/RightNavigation";
import Card from "../Card/Card";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return null;
};
function Carousel({ data, component }) {
  return (
    <div>
      <Swiper
        style={{ padding: "0 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        navigation
      >
        <Controls data={data} />
        <LeftNavigation />
        <RightNavigation />

        {data.map((item) => (
          <SwiperSlide>
            <Card item={item} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
