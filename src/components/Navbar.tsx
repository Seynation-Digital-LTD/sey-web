"use client";
import { Button } from "./ui/button";
import React, { useState, useEffect } from "react";
import { NavbarMenu } from "../app/mockdata/data";
import ResponsiveMenu from "./ResponsiveMenu";
import { MdMenu } from "react-icons/md";
import Link from "next/link"

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Tracking the scroll position
  useEffect(() => {
    const handleScroll = () => { 
      if (window.scrollY > 50) {
        setScrolled(true); 
      } else {
        setScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
          scrolled ? "bg-primaryFive shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-1 font-bold uppercase py-4">
            <p>Seynation</p>
            <p className="text-neutralOne">Digital</p>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-3 text-white">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-neutralOne hover:underline-offset-4 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <Button variant="outline">Get a Quote</Button>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl"></MdMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};
