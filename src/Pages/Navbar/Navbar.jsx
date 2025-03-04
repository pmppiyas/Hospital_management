"use client";

import { useState, useEffect } from "react";
import { navlinks } from "../../../public/assets";
import Link from "next/link";
import { Headset, Mail, Minus, Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowTopBar(false);
        if (currentScrollY > 100) {
          setScrolled(true);
        }
      } else {
        setShowTopBar(true);
        if (currentScrollY < 1) {
          setScrolled(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 bg-background shadow-2xl transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      initial={{ y: 0 }}
      animate={{
        y: scrolled ? (showTopBar ? 0 : -100) : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Top info bar */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            className="bg-secondary text-md p-3 hidden md:flex justify-between items-center"
            initial={{ opacity: 1, height: "auto" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h5 className="flex items-center gap-2 text-sm">
              <Phone size={16} />
              Tel: 16023
            </h5>
            <Minus className="rotate-90" size={16} />
            <h5 className="flex items-center gap-2 text-sm">
              <Headset size={16} />
              Phone: +8801712-345678
            </h5>
            <Minus className="rotate-90" size={16} />
            <h5 className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              Email: johurams@gmail.com
            </h5>
            <Minus className="rotate-90" size={16} />
            <h5 className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              Address: Hospital Mor, Gobindoganj, Gaibandha
            </h5>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <div
        className={`flex justify-between items-center p-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold uppercase text-foreground">
            Johura <span className="text-primary">MS.</span>
          </h2>
        </motion.div>

        {/* Desktop Navmenu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-xl font-medium text-foreground">
            {navlinks.map((nav, id) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: id * 0.1 }}
                className="relative"
              >
                <Link
                  href={nav.link}
                  className="transition-all duration-300 hover:text-primary relative"
                >
                  {nav.title}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 100,
              }}
              className="fixed md:hidden top-0 right-0 bg-background shadow-xl z-50 flex flex-col h-screen w-4/5 max-w-sm"
            >
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-semibold uppercase text-foreground">
                  Johura <span className="text-primary">MS.</span>
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-secondary/20 rounded-full transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-6 text-xl font-medium text-foreground">
                {navlinks.map((nav, id) => (
                  <motion.div
                    key={id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: id * 0.1 }}
                    className="border-b pb-2 "
                  >
                    <Link
                      href={nav.link}
                      onClick={handleLinkClick}
                      className="hover:text-primary transition-all block"
                    >
                      {nav.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto p-6">
                <Button className="w-full" size="lg">
                  Call a Doctor
                </Button>
                <div className="mt-6 flex flex-col gap-3 text-sm">
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span>Tel: 16023</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <span>johurams@gmail.com</span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="text-lg flex items-center justify-center gap-2">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/80 transition-all"
          >
            Call a Doctor
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-full transition-all"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
