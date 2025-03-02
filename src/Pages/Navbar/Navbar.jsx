"use client";

import { useState } from "react";
import { navlinks } from "../../../public/assets";
import Link from "next/link";
import { Headset, Mail, Minus, Phone, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-secondary text-white  text-md p-4 hidden md:flex  justify-between items-center ">
        <h5 className="flex items-center gap-2">
          <Phone></Phone>Tel: 16023
        </h5>
        <Minus className="rotate-90"></Minus>
        <h5 className="flex items-center gap-2">
          <Headset></Headset>Phone : +8801712-345678
        </h5>
        <Minus className="rotate-90"></Minus>
        <h5 className="flex items-center gap-2">
          <Mail></Mail> Email : johurams@.gamilcom
        </h5>
        <Minus className="rotate-90"></Minus>
        <h5 className="flex items-center gap-2">
          <MapPin></MapPin> Address : Hospital Mor, Gobindoganj, Gaibandha
        </h5>
      </div>
      <div className="flex justify-between items-center p-4 ">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-semibold uppercase text-foreground">
            Johura <span className="text-primary">MS.</span>
          </h2>
        </div>
        {/* Navmenu */}
        <nav className=" hidden md:flex ">
          <ul className="flex gap-8 text-xl font-medium text-foreground">
            {navlinks.map((nav, id) => (
              <Link href={nav.link} key={id}>
                {nav.title}
              </Link>
            ))}
          </ul>
        </nav>
        {/* Mobile menu */}
 {open && (
  <motion.div
    initial={{ y: -500, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -500, opacity: 0 }} // Changed exit animation to move upwards
    transition={{ duration: 0.3 }}
    className="fixed md:hidden top-0 left-0 bg-primary bg-opacity-90 z-50 flex items-center justify-center h-screen w-3/4"
  >
    <nav className="flex flex-col gap-4 text-xl font-medium text-foreground">
      {navlinks.map((nav, id) => (
        <motion.div
          className="hover:scale-125"
          key={id}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }} // Added exit animation for each item
          transition={{ delay: id * 0.1 }}
        >
          <Link href={nav.link}>{nav.title}</Link>
        </motion.div>
      ))}
    </nav>
  </motion.div>
)}

        {/* Button */}
        <div className="text-lg flex items-center justify-center gap-2 ">
          <Button size="sm">Call a Doctor</Button>
          <Menu
            onClick={() => setOpen(!open)}
            className="text-5xl md:hidden hover:bg-primary hover:text-white rounded-full hover:scale-125  transform transition-all duration-300 ease-in-out"
          ></Menu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
