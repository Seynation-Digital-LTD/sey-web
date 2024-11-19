"use client";
import { Button } from "../ui/button";
import React from "react";
import { useState } from "react";
import { NavbarMenu } from "../../app/mockdata/data";
import ResponsiveMenu from "../../components/pages/ResponsiveMenu";
import { MdMenu } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { PiShoppingCartThin } from "react-icons/pi";
// import {useRouter } from "next/router"

export const Navbar2 = () => {
  const [open, setOpen] = useState(false);
//   const router = useRouter();
//   const isActive=  (href)=> router.pathname === href;
  return (
    <>
      <nav className=" w-full z-20 top-0 start-0">
        <div className="container flex justify-between items-center  bg-transparent py-8">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-1 font-bold uppercase py-8">
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
                    className="inline-block py-1 px-3  hover:text-neutralOne hover:underline-offset-4 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex items-center gap-4">
            {/* <button className="text-2xl hover:bg-primaryOnehover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button> */}

            {/* <button className="text-2xl hover:bg-primaryOnehover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin className="text-2xl" />
            </button> */}

            {/* Button Section */}
            <Button variant="outline">Get a Qoute</Button>
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
      {/* Mobile Sidebar Section  */}
      <ResponsiveMenu open={open} />
    </>
  );
};
