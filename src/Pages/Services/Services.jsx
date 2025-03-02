"use client";

import Heading from "@/components/ui/heading";
import React, { useRef } from "react";
import { department } from "../../../public/assets";
import { ArrowBigRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="min-h-screen py-10" ref={containerRef}>
      <Heading
        title={"Services"}
        subtitle={"Advanced Technology for Better Health"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 justify-center">
        {department.map((item, idx) => {
          // Individual card scroll animations
          const cardRef = useRef(null);

          const { scrollYProgress: cardScrollProgress } = useScroll({
            target: cardRef,
            offset: ["start bottom", "center center"],
          });

          return (
            <motion.div
              key={idx}
              ref={cardRef}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="w-full h-[250px] bg-primary/70 px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-secondary before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[500ms] z-[0]"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.3 }}
            >
              {/* arrow icon */}
              <ArrowBigRight className="absolute top-2 z-20 right-2 text-[1rem]" />

              {/* text */}
              <h3 className="text-[1.5rem] font-bold transition-all duration-500 group-hover:text-background ease-out">
                {item.title}
              </h3>
              <p className="text-[0.9rem] transition-all ease-out duration-500 mt-1 group-hover:text-background">
                ZenUI Library is an Tailwind CSS components library for any
                needs. Comes with UI examples & blocks, templates, Icons, Color
                Palette and more.
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
