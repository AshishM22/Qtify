import { useSwiper, useSwiperSlide } from "swiper/react";
import "./LeftNavigation.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useEffect, useState } from "react";

const LeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
    });
  }, []);

  return (
    <div className="leftNavigation">
      {isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default LeftNavigation;
