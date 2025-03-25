"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { Button } from "./ui/button";
import { NavbarMenu } from "../app/mockdata/data";
import ResponsiveMenu from "./ResponsiveMenu";
import Image from "next/image";
import { seynation } from "../app/index.js";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scrolling to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <>
      <nav
        className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
          scrolled ? "bg-primaryFive shadow-lg" : "bg-primaryOne shadow"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-1 font-bold uppercase py-4">
            <Link href="/" className="hover:text-white">
              <Image className="" src={seynation} alt="Seynation" priority />
            </Link>
          </div>

          {/* Desktop Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-3 text-white">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-neutralOne hover:underline-offset-4 font-semibold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section (Buttons) */}
          <div className="flex items-center gap-4">
            {/* Get a Quote Button */}
            <Link href="/getquote">
              <Button variant="outline">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open} />
    </>
  );
};
