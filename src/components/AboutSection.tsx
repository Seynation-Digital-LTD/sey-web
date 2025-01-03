"use-client";
import Image from "next/image";
import { Button } from "./ui/button";
import { bg } from "../app/index.js";

export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h6 className="font-mina font-bold mt-2 text-xl sm:text-2xl lg:text-3xl">
          About Us
        </h6>
        <p className="text-sm sm:text-base text-gray-600 font-inter">
          Pioneers of Digital Mastery
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-6xl items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <p className="font-inter text-sm sm:text-base md:text-lg leading-relaxed">
            We’re not just creatives—we’re digital pioneers who build the future
            one innovation at a time. So, we as Seynation, don’t settle for
            what’s already been done. Our expertise lies in using creativity
            with technology, turning obstacles into opportunities, and bringing
            visions to life with precision and purpose. We’re the minds shaping
            what’s next.
          </p>
          <Button variant="outline2" className="text-sm sm:text-base">
            Learn More
          </Button>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex justify-center">
          <div className="bg-black w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg relative">
            <Image
              src={bg}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
