"use client";

import Heading from "@/components/ui/heading";
import React, { useEffect } from "react";
import { department } from "../../../public/assets";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const limitedDepartment = department.slice(0, 6);

  return (
    <div className="min-h-screen py-10 ">
      <Heading
        title={"Services"}
        subtitle={"Advanced Technology for Better Health"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 justify-center">
        {limitedDepartment.map((item, idx) => (
          <div
            key={idx}
            className="w-full h-[250px] relative overflow-hidden group cursor-pointer rounded-md flex items-end"
            data-aos="fade-up"
            data-aos-delay={idx * 300}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
              />
            </div>

            {/* Content */}
            <div className="relative w-full h-max z-10 px-6 py-2 flex flex-col justify-end  text-white bg-white/1 backdrop-blur-sm group-hover:backdrop-blur-3xl group-hover:bg-white/10 group-hover:py-10 transition-all duration-300 group-hover:text-center">
              {/* Arrow Icon */}
              <ArrowBigRight className="absolute top-4 right-4 text-[1.5rem] text-white  group-hover:rotate-90 " />

              {/* Text */}
              <h3 className="text-[1.5rem] font-bold transition-all duration-500 group-hover:text-primary group-hover:text-4xl group-hover:pb-4">
                {item.title}
              </h3>
              <p className="text-[0.9rem] transition-all ease-out duration-500 mt-1 opacity-80 group-hover:opacity-100">
                Specialized care and advanced treatment for{" "}
                {item.title.toLowerCase()} services
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
