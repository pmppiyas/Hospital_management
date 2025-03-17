"use client";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
function Footer() {
  return (
    <footer className="bg-white shadow-md rounded-xl w-full p-6 md:p-9">
      <div className="flex justify-between gap-[30px] flex-wrap w-full">
        <div className="" data-aos="fade-right" data-aos-delay={200}>
          <h3 className="text-[1.2rem] font-semibold text-foregroud mb-2">
            Services
          </h3>
          <div className="flex text-foreground/80 flex-col gap-[10px]">
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Cardiology
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Dentistry
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Neurology
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Orthopedics
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Surgery
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay={200}>
          <h3 className="text-[1.2rem] font-semibold text-foregroud mb-2">
            Company
          </h3>
          <div className="flex text-foreground/80 flex-col gap-[10px]">
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Service
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Features
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Our Team
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Portfolio
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Blog
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Contact Us
            </p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay={200}>
          <h3 className="text-[1.2rem] font-semibold text-foregroud mb-2">
            Our Social Media
          </h3>
          <div className="flex text-foreground/80 flex-col gap-[10px]">
            <p className="text-[1rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Dribbble
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Behance
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Medium
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Instagram
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Facebook
            </p>
            <p className="text-[0.9rem] text-foregroud hover:text-primary cursor-pointer transition-all duration-200">
              Twitter
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <h3 className="text-[1.2rem] font-semibold text-foregroud mb-2">
              Join a Newsletter
            </h3>
            <div className="flex gap-[2px] flex-col text-foregroud relative">
              <label className="text-[0.9rem]">Your Email</label>
              <input
                type="email"
                className="py-3 px-4 w-full pr-[90px] rounded-md border border-primary outline-none"
                placeholder="Email address"
              />

              <button className="px-4 h-[67%] rounded-r-md bg-primary text-white absolute top-[24px] right-0">
                Submit
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-[1rem] font-medium text-foregroud py-2 flex gap-2 cursor-pointer hover:scale-105 transition-transfrom duration-300">
              <Mail></Mail>Email: johurams@gmail.com
            </h3>
            <h3 className="text-[1rem] font-medium text-foregroud py-2 flex gap-2 cursor-pointer hover:scale-105 transition-transfrom duration-300">
              <Phone></Phone> Phone: +8801712-345678
            </h3>
            <h3 className="text-[1rem] font-medium text-foregroud py-2 flex gap-2 cursor-pointer hover:scale-105 transition-transfrom duration-300">
              <MapPin></MapPin>Address: Hospital Mor, Gobindoganj, Gaibandha
            </h3>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-[20px] mt-[40px] flex items-center justify-between w-full flex-wrap gap-[20px]">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-semibold uppercase text-foreground">
            Johura <span className="text-primary">MS.</span>
          </h2>
        </div>

        <p className="text-[0.9rem]  hidden md:block">
          © 2025 Johura Matri Sodon. All Rights Reserved.{" "}
        </p>

        <div className="flex items-center gap-[10px] text-foregroud">
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
            <Facebook />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
            <Youtube />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
            <Instagram />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
            <Linkedin />
          </a>
        </div>
        <p className="text-[0.9rem] text-center border-t w-full md:hidden">
          © 2025 Johura Matri Sodon. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
