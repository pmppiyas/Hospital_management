"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { bannerAssets } from "../../../public/assets";

export default function Banner() {
  return (
    <div className="w-full h-screen">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerAssets.map((assets, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${assets.image})` }}
            >
              <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
                <h1 className="text-white text-4xl font-bold">
                  {assets.title}
                </h1>
                <p className="text-white text-lg">{assets.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
