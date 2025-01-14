"use client";
import { useState } from "react";
import { bg } from "../../app/index.js";
import Image from "next/image";
import { access } from "fs";
import { ContactSection } from "@/components/ContactSection";
export default function Solutions() {
  return (
    <>
      <div className="flex justify-center items-center px-4">
        <div className="flex w-full max-w-6xl flex-col lg:flex-row items-center mt-28">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl lg:text-5xl">
              Let’s Make Something Extraordinary Together.
            </h1>
            <p className="font-inter text-sm lg:text-md leading-relaxed ml-2">
              Have a project in mind? <br></br> Need a creative partner?{" "}
              <br></br>
              Reach out, and let’s turn your vision into a masterpiece.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center pl-4 pr-4">
            <div className="bg-black lg:w-96 lg:h-96 w-full h-64 rounded-lg mt-4">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
       
      </div>
      <div className="mb-30"><ContactSection/></div>  
    </>
  );
}
