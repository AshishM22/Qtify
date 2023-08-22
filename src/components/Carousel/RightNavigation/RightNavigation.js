import { useSwiper, useSwiperSlide } from "swiper/react";
import "./RightNavigation.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import { useEffect, useState } from "react";

const RightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className="rightNavigation">
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default RightNavigation;
