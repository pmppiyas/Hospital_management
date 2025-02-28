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
    <div className="w-full h-screen border-4">
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
            <header
              className="w-full h-screen bg-center bg-cover flex flex-col lg:flex-row items-center gap-12 lg:gap-0 justify-center"
              style={{
                backgroundImage: `url(${assets.image.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full lg:w-[70%]  flex flex-col justify-center bg-opacity-100 border-2">
                <h1 className="text-4xl lg:text-6xl font-bold text-white">
                  {assets.title}
                </h1>
                <p className="mt-2 text-lg text-white">{assets.text}</p>
              </div>
            </header>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
