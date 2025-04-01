"use client";
import { Button } from "./ui/button";
import { hero3 } from "../app/index.js";
import Image from "next/image";

export const HeroPage = () => {
  return (
    <section className="w-screen lg:h-[90vh] xl:h-[100vh] flex justify-center items-center bg-gradient-to-bl from-primaryOne via-primarySix to-primarySeven">
      <div className="container max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-8 md:gap-12 py-16">
        {/* Left Content - Text and Buttons */}
        <div className="flex-1 text-white space-y-6 text-center lg:text-left">
          <h1 className="font-mina font-extrabold text-4xl md:text-5xl lg:text-5xl mt-44">
            We're the Masterminds.
          </h1>
          <p className="font-inter text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Every problem is a chance for us to create smart, simple, and
            powerful solutions that make life easier and businesses better.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button variant="primary" className="text-sm md:text-base">
              About Us
            </Button>
            <Button variant="outline" className="text-sm md:text-base">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Right Content - Image */}

        <div className="flex-1 flex justify-center items-center rounded-lg border-y-neutralOne lg:mt-20">
          <Image
            className="w-[480px] h-[512px] overflow-hidden"
            src={hero3}
            alt="Hero Image"
            priority
          />
        </div>
{/* 
        <div className="flex-1 flex justify-center">
          <div className="w-[912px] h-[912px] sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg border-red-950 overflow-hidden relative">
            <Image
              className="w-[912px] h-[912px]"
              src={hero2}
              alt="What We Do Image"
              layout="fill"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};
