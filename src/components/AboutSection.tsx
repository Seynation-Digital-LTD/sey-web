"use client";
import Image from "next/image";
import { Button } from "./ui/button";
// import { bg } from "../app/index.js";

export const AboutSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center space-y-2 mb-8 sm:mb-12 lg:mb-16">
          <h6 className="font-mina font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
            About Us
          </h6>
          <p className="font-inter text-sm sm:text-base text-gray-600">
            Pioneers of Digital Mastery
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content - Text and Button */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <p className="font-inter text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              We're not just creatives—we're digital pioneers who build the
              future one innovation at a time. So, we as Seynation, don't settle
              for what's already been done. Our expertise lies in using
              creativity with technology, turning obstacles into opportunities,
              and bringing visions to life with precision and purpose. We're the
              minds shaping what's next.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button variant="outline2" className="text-sm sm:text-base">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg border-red-950 overflow-hidden relative">
              <video
                src="/assets/aboutvd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-96 h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};