"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { masterpiece} from "../app/index.js";

const ctaContent = [
  {
    id: 1,
    description1: "We don’t just complete projects; we engineer revolutions",
    image: "",
  },
  {
    id: 2,
    description2: "Every project is a masterpiece in progress.",
    image: "",
  },
  {
    id: 3,
    description3: "Let’s Create the Future Together.",
    image: "",
  },
  {
    id: 4,
    description4: "We're really the Masterminds.",
    image: "",
  },
];
export function PortfolioSection2() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIRST SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content - Text */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900">
              Our Masterpieces.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
              Every project we undertake tells a story, a narrative of
              innovation, collaboration, and transformation. Each solution we
              deliver is a revolution, breaking boundaries and setting new
              standards for excellence.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/portfolio">
              <Button variant="outline2" className="text-sm sm:text-base">
                View Portfolio
              </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg overflow-hidden relative">
              <Image
                className="w-full h-full object-cover"
                src={masterpiece}
                alt="What We Do Image"
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
        {/* CTA SECTION */}
        <div
          className="flex flex-col items-center mt-16 justify-center bg-gradient-to-br
            from-neutralFive neutralSix to-neutralSix w-5/5 h-[180px] rounded-md"
        >
          {ctaContent.map((item) => (
            <h4 className="text-white font-inter pl-20 pr-20">
              {item.description2}
            </h4>
          ))}
        </div>
        {/* END CTA SECITON */}
      </div>
    </section>
  );
}
