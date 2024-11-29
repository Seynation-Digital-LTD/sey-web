"use-client";
import Image from "next/image";
import { Button } from "./ui/button";
import { bg } from "../app/index.js";

export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div className="text-center">
      <h6 className="font-mina font-bold mt-10 mb-4">About Us</h6>
        <p className="text-base text-gray-600 font-inter">
          Pioneers of Digital Mastery
        </p>
      </div>
      <div className="flex w-full max-w-6xl flex-row items-center px-2">
        {/* Left Content */}
        <div className="flex-1 space-y-4 ml-2">
          <p className="font-inter text-md leading-relaxed">
            We’re not just creatives—we’re digital pioneers who build the future
            one innovation at a time. So, we as Seynation, don’t settle for
            what’s already been done. Our expertise lies in using creativity
            with technology, turning obstacles into opportunities, and bringing
            visions to life with precision and purpose. We’re the minds shaping
            what’s next.
          </p>
          <Button variant="outline">Learn More</Button>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex justify-center">
          <div className="bg-black w-96 h-96 rounded-lg relative">
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
