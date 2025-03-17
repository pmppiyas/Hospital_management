"use client";
import Image from "next/image";
import "./styles.css";
import plus from "@/assets/plus.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Timeline() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
      offset: 120,
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="timeline space-y-8 lg:space-y-10 my-20 ">
      <div className="container left-container  " data-aos="fade-left">
        <Image src={plus} alt="Alphabet"></Image>
        <div className="text-box  bg-white rounded-xs flex items-center justify-around w-full h-full border-1   ">
          <h2>Our Total Patents</h2>
          <div className=" h-full w-max rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
            <p className="text-3xl p-2 md:px-4 text-white font-medium shadow-2xl">
              1200+
            </p>
          </div>
          <span className="left-container-arrow "></span>
        </div>
      </div>
      <div className="container right-container  " data-aos="fade-right">
        <Image src={plus} alt="Alphabet"></Image>
        <div className="text-box  bg-white rounded-xs flex items-center justify-around w-full h-full border-1">
          <h2>Orthopedics</h2>
          <div className=" h-full w-max rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
            <p className="text-3xl p-2 md:px-4 text-white font-medium shadow-2xl">
              400+
            </p>
          </div>
          <span className="right-container-arrow "></span>
        </div>
      </div>
      <div className="container left-container  " data-aos="fade-left">
        <Image src={plus} alt="Alphabet"></Image>
        <div className="text-box  bg-white rounded-xs flex items-center justify-around w-full h-full border-1   ">
          <h2>Radiology</h2>
          <div className=" h-full w-max rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
            <p className="text-3xl p-2 md:px-4 text-white font-medium shadow-2xl">
              500+
            </p>
          </div>
          <span className="left-container-arrow "></span>
        </div>
      </div>
      <div className="container right-container  " data-aos="fade-right">
        <Image src={plus} alt="Alphabet"></Image>
        <div className="text-box  bg-white rounded-xs flex items-center justify-around w-full h-full border-1   ">
          <h2>Gynecology</h2>
          <div className=" h-full w-max rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
            <p className="text-3xl p-2 md:px-4 text-white font-medium shadow-2xl">
              700+
            </p>
          </div>
          <span className="right-container-arrow "></span>
        </div>
      </div>
      <div className="container left-container  " data-aos="fade-left">
        <Image src={plus} alt="Alphabet"></Image>
        <div className="text-box  bg-white rounded-xs flex items-center justify-around w-full h-full border-1   ">
          <h2>Urology</h2>
          <div className=" h-full w-max rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
            <p className="text-3xl p-2 md:px-4 text-white font-medium shadow-2xl">
              250+
            </p>
          </div>
          <span className="left-container-arrow "></span>
        </div>
      </div>
      <div className="container right-container  " data-aos="fade-right">
        <Image src={plus} alt="Alphabet"></Image>
        <div className="text-box  bg-white rounded-xs flex items-center justify-around w-full h-full border-1   ">
          <h2>Dermatology</h2>
          <div className=" h-full w-max rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
            <p className="text-3xl p-2 md:px-4 text-white font-medium shadow-2xl">
              450+
            </p>
          </div>
          <span className="right-container-arrow "></span>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
