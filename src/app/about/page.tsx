"use-client";
import { Button } from "../../components/ui/button";
import { bg } from "../../app/index.js";
import Image from "next/image";
export default function about() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center mt-40">
        <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px]">
          {/* Left Content */}
          <div className="flex-1 text-primaryOne space-y-4">
            <h1 className="font-mina font-extrabold text-5xl">Who We Are</h1>
            <p className="font-inter text-md leading-relaxed ml-2 text-black">
              We are those guys who combine the art of imagination with the
              science of innovation to craft solutions that redefine
              possibilities. <br /> <br /> We are more than just an agency; we
              are the architects of digital transformation, building bridges
              between bold ideas and real-world impact. <br />
              <br />
              Every project is a canvas, every challenge an opportunity to
              master the extraordinary. Together with our clients, we don’t just
              adapt to the future—we create it.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-96 h-96 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px]">
          {/* Left Content */}
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-96 h-96 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-primaryOne space-y-4">
            <h1 className="font-mina font-extrabold text-5xl">Our Story</h1>
            <p className="font-inter text-md leading-relaxed ml-2 text-black">
              Founded in 2015 by Omega Seyongwe, Seynation was born out of a
              vision to lead a digital revolution. Starting as a one-person
              dream, the agency has grown into a powerhouse of passionate
              creatives, delivering groundbreaking solutions in digital,
              technology, and design.
              <br />
              <br /> Over the years, we’ve built a legacy of innovation and
              impact, transforming ideas into masterpieces that redefine
              industries. With unwavering dedication, Seynation continues to
              push boundaries, crafting solutions that empower businesses and
              shape the future.
            </p>
          </div>
        </div>

          <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px]">
            {/* Left Content */}
            <div className="flex-1 text-primaryOne space-y-4">
              <h1 className="font-mina font-extrabold text-5xl">Our Purpose</h1>
              <h3 className="font-mina font-semibold text-primaryOne">
                Mission:
              </h3>
              <p className="  font-inter text-md leading-relaxed ml-2 text-black">
                To empower businesses with digital excellence, shaping brands
                that thrive in the modern world.
              </p>
              <h3 className="font-mina font-semibold text-primaryOne">
                Vision:
              </h3>
              <p className="  font-inter text-md leading-relaxed ml-2 text-black">
                To be the masterminds behind transformative ideas that inspire
                and drive progress across industries
              </p>
            </div>

            {/* Right Content */}
            <div className="flex-1 flex justify-center">
              <div className="bg-black w-96 h-96 rounded-lg">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src={bg}
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h6 className="font-mina font-bold mt-10 mb-4">Our Values.</h6>
            <p className="text-base text-gray-600 font-inter">
              The Seynation Code
            </p>
          </div>
        </div>
    
    </>
  );
}
