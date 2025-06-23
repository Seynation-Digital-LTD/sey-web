"use client";
import { Button } from "./ui/button";
import { hero3 } from "../app/index.js";
import Image from "next/image";
import Link from "next/link";

export const HeroPage = () => {
  return (
    <div className="relative w-full min-h-screen items-center justify-center flex lg:py-10 lg:px-0 bg-gradient-to-bl from-primaryOne via-primarySix to-primarySeven">
      <div className="flex-1 flex  flex-col lg:flex-row md:flex-row items-center p-8 gap-8 lg:px-24">

        {/* Left Content - Text and Buttons */}

        <div className="flex-1 text-white justify-center items-center  text-center lg:text-left">
          <h1 className="font-mina font-extrabold text-4xl md:text-5xl lg:text-5xl">
            We're the Digital Masterminds.
          </h1>
          <p className="font-inter text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto ">
            Every problem is a chance for us to create smart, simple, and powerful solutions that make life easier and businesses
            better.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <Link href="/about">
            <Button variant="primary" className="text-sm md:text-base">
              About Us
            </Button>
            </Link>
            <Link href="/portfolio">
            <Button variant="outline3" className="text-sm md:text-base">
              View Portfolio
            </Button>
            </Link>
          </div>
        </div>

        {/* Right Content - Image */}

          <Image
            className="overflow-hidden w-[400px] lg:w-[28px] flex-1 lg:mt-10"
            src={hero3}
            alt="Hero Image"
            priority
          />
        
      </div>
    </div>
  );
};
