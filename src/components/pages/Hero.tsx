"use-client";
import { Button } from "../ui/button";

export const HeroPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-primaryOne via-primarySix to-primarySeven">
      <div className="flex w-full max-w-6xl flex-row items-center px-2">
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
            <Button variant="extra">View Portfolio</Button>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex justify-center">
          <div className="bg-black w-96 h-96 rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZx_g2K2F99ksuxib171hL0hfKx8c8OopjQ&s"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};