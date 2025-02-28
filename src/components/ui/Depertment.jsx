import React from "react";
import Marquee from "react-fast-marquee";
import { department } from "../../../public/assets";
import { Button } from "./button";

function Department() {
  return (
    <div className="border-y-2 border-secondary bg-white py-6">
      <Marquee pauseOnHover={true} speed={40} gradient={true}>
        {department.map((btn, index) => (
          <Button key={index} style={{ marginRight: 40 }}>
            {btn.title}
          </Button>
        ))}
      </Marquee>
    </div>
  );
}

export default Department;
