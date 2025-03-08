import Image from "next/image";
import React, { useRef, useState } from "react";
import doctor1 from "@/assets/doctor.jpg";
import { Button } from "@/components/ui/button";

const AnimatedCard = ({ testimonial }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={cardRef}
      className="w-full  relative overflow-hidden p-4 cursor-pointer h-[300px] shadow-lg rounded-lg group-hover:bg-white/10"
    >
      <div className="flex flex-col  justify-between h-full  ">
        <div>
          <h4 className="text-[1.2rem] font-bold">{testimonial.title}</h4>
        </div>
        <div>
          <p className=" text-[1rem] mt-2">{testimonial.text}</p>
        </div>
        <hr className="my-2" />
        <div className="flex items-center justify-between">
          <div className="h-[70px] w-[50px]" style={{ borderRadius: "50%" }}>
            <Image src={doctor1}></Image>
          </div>
          <div className="text-left space-y-1">
            <h5 className="text-xl">Dr.{testimonial.author}</h5>
            <p className="text-sm">MBBS, DTM&H(UK), MD(US)</p>
          </div>
          <Button size={"sm"}>Book Now</Button>
        </div>
      </div>

      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none blur-[40px]"
          style={{
            background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, rgba(17, 53, 241, 1), transparent)`,
          }}
        />
      )}
    </div>
  );
};

export default AnimatedCard;
