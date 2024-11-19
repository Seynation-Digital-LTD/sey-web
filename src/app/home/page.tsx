"use-client";
import { Button } from "../../components/ui/button";
import { bg } from "../index.js";
import Image from "next/image";

export const HeroPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center  bg-gradient-to-bl from-primaryOne via-primarySix to-primarySeven">
      <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px]">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-4">
          <h1 className="font-mina font-extrabold text-5xl">
            We're the Masterminds,
          </h1>
          <p className="font-inter text-md leading-relaxed ml-2">
            We’re here to shape the future of the digital world. Every problem
            is a chance for us to create smart, simple, and powerful solutions
            that make life easier and businesses better."
          </p>
          <div className="flex gap-4 ml-2">
            <Button variant="primary">About Us</Button>
            <Button variant="outline">View Portfolio</Button>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex justify-center">
          <div className="bg-black w-96 h-96 rounded-lg">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src= {bg}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
