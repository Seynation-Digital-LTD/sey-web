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
  className={`fixed top-0 left-8 right-12 z-20 mt-8 rounded-xl transition-all duration-300 ${
    scrolled ? "bg-primaryFive shadow-lg" : "bg-primaryOne shadow"
  }`}
>
  <div className="container mx-auto flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-1 py-4">
      <Link href="/" className="hover:text-white">
        <Image className="" src={seynation} alt="Seynation" priority />
      </Link>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-4 text-white">
      {NavbarMenu.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="inline-block py-1 px-3 hover:text-neutralOne hover:underline-offset-4 font-semibold"
        >
          {item.title}
        </Link>
      ))}
    </div>

    {/* CTA + Hamburger */}
    <div className="flex items-center gap-4">
      <Link href="/getquote">
        <Button variant="outline">Get a Quote</Button>
      </Link>

      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <MdMenu className="text-4xl text-white" />
      </div>
    </div>
  </div>
</nav>
      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open} />
    </>
  );
};
