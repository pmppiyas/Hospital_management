import React from "react";
import Marquee from "react-fast-marquee";
import { department } from "../../../public/assets";
import { Button } from "./button";

function Department() {
  return (
    <Marquee
      className=""
      pauseOnHover={true}
      speed={40}
      gradient={true}
      style={{ height: 100 }}
    >
      {department.map((btn, index) => (
        <Button key={index}>{btn.title}</Button>
      ))}
    </Marquee>
  );
}

export default Department;
