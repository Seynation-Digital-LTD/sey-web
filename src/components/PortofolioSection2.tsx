"use client";
import { useState, useEffect } from "react";
import { bg } from "../app/index.js";
import Image from "next/image";
export function PortfolioSection2() {
    return(
        <>
        <div className="flex justify-center items-center  ">
        <div className="flex justify-center items-start px-4 mt-32">
          <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center gap-8 px-4">
            {/* Left Content */}
            <div className="flex-1 space-y-4">
              <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                What We Do.
              </h1>
              <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed">
                We don’t just offer services—we craft tailored solutions that
                empower the bold, ignite the visionary, and elevate the
                unstoppable. Every project we undertake is treated as a unique
                masterpiece, meticulously designed to inspire action, create
                value, and deliver measurable impact.
                </p>
            </div>

            {/* Right Content */}
            <div className="flex-1 flex justify-center">
              <div className="bg-black w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src={bg}
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}