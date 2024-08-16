import React from "react";
import Card from "./Card";
import "./Card.css";
// Swiper components aur modules import karen
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation"; // Navigation buttons ke styles import karen

import img1 from "../../public/Images/img_1.jpg";
import img2 from "../../public/Images/img-2.jpg";
import img3 from "../../public/Images/img-3.jpg";
import img4 from "../../public/Images/img-3.png";

const CardContainer = () => {
  return (
    <div className="parent">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        // navigation // Navigation arrows ko enable karo
        pagination={{ clickable: true }} // Optional: Pagination dots
        modules={[Navigation]} // Navigation module ko include karo
        className="mySwiper"
      >
        <SwiperSlide>
          <Card img={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardContainer;
