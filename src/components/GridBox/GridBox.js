import React from "react";
import { useState, useEffect } from "react";
import "./GridBox.css";
import Card from "../Card/Card";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LeftNavigation from "../Carousel/LeftNavigation/LeftNavigation";
import RightNavigation from "../Carousel/RightNavigation/RightNavigation";
import CustomTabs from "../CustomTabs/CustomTabs";

function GridBox({ title, data, type, setCurrentSong }) {
  const [buttonText, setButtonText] = useState("Show all");
  const [isCollapse, setIsCollapse] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleToggle = () => {
    if (buttonText === "Show all") {
      setButtonText("Collapse");
      setIsCollapse(false);
    } else {
      setButtonText("Show all");
      setIsCollapse(true);
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setFilteredData(data);
      return;
    }
    let currentGenre =
      newValue === 1
        ? "rock"
        : newValue === 2
        ? "pop"
        : newValue === 3
        ? "jazz"
        : newValue === 4
        ? "blues"
        : "unknown";
    const updatedData = data.filter((item) => item.genre.key === currentGenre);
    console.log(updatedData);
    setFilteredData(updatedData);
  };

  return (
    <>
      <div className="grid-box--header">
        <h3>{title}</h3>
        <button onClick={handleToggle}>{buttonText}</button>
      </div>
      {type && (
        <CustomTabs data={data} value={value} handleChange={handleChange} />
      )}

      {!isCollapse ? (
        <div
          className={
            "grid-container" + (isCollapse ? "" : " grid-container--collapse")
          }
        >
          {filteredData.map((item) => (
            <Card item={item} type={type} setCurrentSong={setCurrentSong} />
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

          {filteredData.map((item) => (
            <SwiperSlide>
              <Card
                key={item.id}
                item={item}
                type={type}
                setCurrentSong={setCurrentSong}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default GridBox;
