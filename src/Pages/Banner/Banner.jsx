"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import Typewriter from "typewriter-effect";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { bannerAssets } from "../../../public/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { allAssests } from "../../../public/assets";
export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen pb-10 md:pb-20">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerAssets.map((assets, index) => (
          <SwiperSlide key={index}>
            <div className="w-full min-h-screen bg-center bg-cover flex flex-col lg:flex-row items-center gap-12 lg:gap-0 justify-center relative pt-10 bg-background">
              <header className="w-full h-screen flex flex-col lg:flex-row items-center gap-6  lg:gap-0 justify-between z-20 pt-10 ">
                {/* Left Section */}
                <div className="w-full md:w-[50%] flex flex-col  bg-opacity-100 text-center md:text-start lg:pl-10 h-[300px] md:h-[400px] justify-center md:justify-between relative">
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center">
                    <Image
                      src={allAssests.plus}
                      alt="plus"
                      className="w-20 h-20 absolute top-0 right-0"
                    ></Image>
                  </div>
                  <div
                    className="text-5xl lg:text-7xl font-bold text-foreground p-2 leading-tight flex md:justify-start items-center"
                    data-aos="fade-right"
                  >
                    <Typewriter
                      options={{
                        strings: [`${assets.title}`],
                        autoStart: true,
                        loop: true,
                        delay: 200,
                        pauseFor: 4000,
                        deleteSpeed: 50,
                      }}
                    />
                  </div>

                  <motion.p
                    className="mt-2 text-lg md:text-2xl bg-primary w-max mx-auto md:mx-0 text-background p-2 md:p-4 md:pl-4 rounded-none rounded-tl-lg rounded-br-lg"
                    data-aos="fade-left"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    {assets.text}
                  </motion.p>
                </div>
                {/* Right Section */}
                <motion.div
                  key={activeIndex}
                  className="w-[90%] md:w-[45%] h-[300px] md:h-[400px] relative rounded-4xl mb-6 md:mr-4 overflow-hidden  "
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="h-full"
                  >
                    <Image
                      alt="Banner Image"
                      src={assets.image}
                      className="w-full flex-1 h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </header>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
