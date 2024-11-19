"use client";

import { useState} from "react";
import React from "react";
import { NavbarMenu } from "../../app/mockdata/data";
import  ResponsiveMenu  from "../../components/pages/ResponsiveMenu";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

export const Navbar2 = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-1 font-bold uppercase py-8">
            <FaDumbbell />
            <p>Seynation</p>
            <p className="text-primaryOne">Digital</p>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="iinline-block py-1 px-3 
                  hover:text-primaryOne font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primaryOnehover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>

            <button className="text-2xl hover:bg-primaryOnehover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin className="text-2xl" />
            </button>

            {/* Button Section */}
            <button className="hover:bg-primaryOne font-inter font-semibold hover:text-white rounded-md border-2 border-primaryThree px-6 py-2 duration-200 hidden md:block">
              Get a Qoute
            </button>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={()=>{
            setOpen(!open);
          }}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section  */}
      <ResponsiveMenu />
    </>
  );
};
