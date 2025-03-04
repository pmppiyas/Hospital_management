"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { department } from "../../../public/assets";
import { Button } from "./button";
import { motion } from "framer-motion";

function Department() {
  const [pauseMarquee, setPauseMarquee] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);

  return (
    <div className="relative py-6 ">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary/10 z-0" />

      {/* Enhanced Marquee */}
      <div
        className="relative bg-secondary/20 py-4 shadow-lg"
        onMouseEnter={() => setPauseMarquee(true)}
        onMouseLeave={() => {
          setPauseMarquee(false);
          setSelectedDept(null);
        }}
      >
        <div className="rounded-xl shadow-lg">
          <Marquee
            pauseOnHover={false}
            play={!pauseMarquee}
            speed={40}
            gradient={true}
            gradientColor={[255, 255, 255]}
            gradientWidth={100}
            className=" bg-secondary/50 backdrop-blur-sm"
          >
            {department.map((dept, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDept(dept)}
              >
                <Button
                  className={`mx-6  transition-all duration-300 ${
                    selectedDept?.title === dept.title
                      ? "bg-primary shadow-lg"
                      : " hover:bg-primary/10"
                  }`}
                >
                  {dept.title}
                </Button>
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* Department preview on hover/select */}
        {selectedDept && (
          <motion.div
            className="absolute left-0 right-0 -bottom-32 mx-auto w-full max-w-md bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-4 z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedDept.image})` }}
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-primary">
                  {selectedDept.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Specialized care and services for all your{" "}
                  {selectedDept.title.toLowerCase()} needs.
                </p>
                <div className="mt-2 flex justify-end">
                  <Button className="text-xs bg-primary/90 text-white px-3 py-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Department;
