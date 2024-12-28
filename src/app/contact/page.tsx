"use client";
import { useState } from "react";
import { bg } from "../../app/index.js";
import Image from "next/image";
import { access } from "fs";
import { ContactSection } from "@/components/ContactSection";
export default function Solutions() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px] mb-20">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-5xl">
              Let’s Make Something Extraordinary Together.
            </h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              Have a project in mind? <br></br> Need a creative partner?{" "}
              <br></br>
              Reach out, and let’s turn your vision into a masterpiece.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-96 h-96 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex-1 pl-24 pr-24 pt-20">
        <p className="font-inter text-center">
          At Seynation, we’re always excited to connect with visionaries like
          you. <br></br>Whether you’re ready to start a project or just want to learn
          more about what we do, we’re here to listen, collaborate, and create
          magic.
        </p>
      </div> */}
      <div className="mb-30"><ContactSection/></div>
      
      </div>
      
    </>
  );
}
