"use-client";
import { Button } from "./ui/button";
import { bg } from "../app/index.js";
import Image from "next/image";

export const HeroPage = () => {
  return (
    <div className="w-screen h-screen pb-20 pt-30 flex justify-center items-center bg-gradient-to-bl from-primaryOne via-primarySix to-primarySeven">
      <div className="flex w-full max-w-6xl flex-col-reverse gap-5 justify-center align-middle lg:flex-row items-center px-4 lg:px-8 mt-[96px] space-y-8 lg:space-y-0">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-4 text-center lg:text-left">
          <h1 className="font-mina font-extrabold text-4xl lg:text-5xl">
            We're the Masterminds,
          </h1>
          <p className="font-inter text-sm lg:text-md leading-relaxed mx-4 lg:mx-0">
            We’re here to shape the future of the digital world. Every problem
            is a chance for us to create smart, simple, and powerful solutions
            that make life easier and businesses better.
          </p>
          <div className=" md:gap-4 overflow-hidden justify-center items-center lg:justify-start pb-20">
            <Button variant="primary" className="mr-4">About Us</Button>
            <Button variant="outline" >View Portfolio</Button>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex justify-center">
          <div className="bg-black w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={bg}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
