"use-client";
import { bg } from "../../app/index.js";
import Image from "next/image";
import { ContactSection } from "@/components/ContactSection.tsx";

export default function about() {
  const valueData = [
    {
      id: 1,
      title: "Mastery",
      description: "We believe in perfecting every detail.",
      image1: "",
      image2: "",
    },
    {
      id: 2,
      title: "Innovation",
      description: "Every project is a chance to redefine the norm.",
      image1: "",
      image2: "",
    },
    {
      id: 3,
      title: "Collaboration.",
      description: "Partnerships are the foundation of our success.",
      image1: "",
      image2: "",
    },
    {
      id: 4,
      title: "Impact.",
      description: "We measure our success by the value we create.",
      image1: "",
      image2: "",
    },
  ];

  const teamData = [
    {
      id: 1,
      name: "Omega Seyongwe",
      role: "Co-founder & CEO",
      image: "",
      description: "",
    },
    {
      id: 2,
      name: "Dionese Shayo",
      role: "Co-founder",
      image: "",
      description: "",
    },
    {
      id: 3,
      name: "Apolinary Theonest",
      role: "He knows Everything",
      image: "",
      description: "",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center items-center px-4">
        <div className="flex w-full max-w-6xl flex-col lg:flex-row items-center mt-28">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl lg:text-5xl">
              Who We Are.
            </h1>
            <p className="font-inter text-sm lg:text-md leading-relaxed ml-2">
              We are those guys who combine the art of imagination with the
              science of innovation to craft solutions that redefine possibilities.
              We are more than just an agency; we are the architects of digital transformation, 
              building bridges between bold ideas and real-world impact.
              <br />
              <br />
              Every project is a canvas, every challenge an opportunity to master the extraordinary. 
              Together with our clients, we don’t just adapt to the future—we create it.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center pl-4 pr-4">
            <div className="bg-black lg:w-96 lg:h-96 w-full h-64 rounded-lg mt-4">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="flex justify-center items-center px-4">
        <div className="flex w-full max-w-6xl flex-col-reverse lg:flex-row items-center mt-28">
          {/* Left Content */}
          <div className="flex-1 flex justify-center pl-4 pr-4">
            <div className="bg-black lg:w-96 lg:h-96 w-full h-64 rounded-lg mt-4">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl lg:text-5xl">
              Our Story.
            </h1>
            <p className="font-inter text-sm lg:text-md leading-relaxed ml-2">
              Founded in 2015 by Omega Seyongwe, Seynation was born out of a vision to lead a digital revolution. 
              Starting as a one-person dream, the agency has grown into a powerhouse of passionate creatives, 
              delivering groundbreaking solutions in digital, technology, and design.
              <br />
              <br />
              Over the years, we’ve built a legacy of innovation and impact, transforming ideas into masterpieces 
              that redefine industries. With unwavering dedication, Seynation continues to push boundaries, 
              crafting solutions that empower businesses and shape the future.
            </p>
          </div>
        </div>
      </div>

      {/* Our Purpose Section */}
      <div className="flex lg:flex-row flex-col justify-center items-center px-4">
        <div className="flex w-full max-w-6xl flex-col lg:flex-row items-center mt-28">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl lg:text-5xl">
              Our Purpose.
            </h1>
            <h1 className="font-mina font-extrabold lg:text-xl text-sm">Mission:</h1>
            <p className="font-inter text-sm lg:text-md leading-relaxed ml-2">
              To empower businesses with digital excellence, shaping brands that thrive in the modern world.
            </p>
            <h1 className="font-mina font-extrabold lg:text-xl text-sm">Vision:</h1>
            <p className="font-inter text-sm lg:text-md leading-relaxed ml-2">
              To be the masterminds behind transformative ideas that inspire and drive progress across industries.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center pl-4 pr-4">
            <div className="bg-black lg:w-96 lg:h-96 w-full h-64 rounded-lg mt-4">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Value Section */}
      <div className="flex justify-center items-center px-4 py-6">
  <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl">
    {/* Heading Section */}
    <div className="text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
    <h1 className="font-mina font-extrabold text-3xl lg:text-5xl">
        Our Values.
      </h1>
      <p className="font-inter text-base lg:text-md leading-relaxed pl-1">
        The Seynation Code
      </p>
    </div>

    {/* Value Cards Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {valueData.map((item) => (
        <div
          key={item.id}
          className="bg-gradient-to-br from-neutralFive to-neutralSix w-full rounded-[15px] p-6 hover:bg-gradient-to-br hover:from-[#BA3521] hover:to-secondaryFour hover:cursor-pointer transition duration-300 ease-in-out"
        >
          <div className="flex flex-col justify-between h-full">
            {/* Title and Icon */}
            <div className="flex flex-col items-start gap-3">
              <img
                src={item.image1}
                alt={item.title}
                className="w-10 h-10"
              />
              <h3 className="text-xl lg:text-2xl font-bold font-inter text-white">
                {item.title}
              </h3>
            </div>

            {/* Description and Supporting Image */}
            <div className="flex flex-row justify-between items-center gap-4 mt-4">
              <p className="text-sm lg:text-base text-white font-inter flex-1">
                {item.description}
              </p>
              <img
                src={item.image2}
                alt=""
                className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* The Team Section */}
      <div className="flex justify-center items-center px-4 py-6">
  <div className="flex flex-col items-center justify-center w-full max-w-7xl">
    {/* Heading Section */}
    <div className="text-center mb-8">
      <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-12">
        Meet The Masterminds.
      </h1>
      <p className="font-inter text-sm sm:text-base mb-6">
        The Visionaries Behind Seynation
      </p>
    </div>

    {/* Team Members Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {teamData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center w-full rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          {/* Team Member Image */}
          <img
            src={item.image}
            alt="Mastermind"
            className="w-full h-48 lg:h-60 object-cover rounded-t-2xl"
          />
          {/* Team Member Details */}
          <div className="bg-primaryTwo w-full py-4 rounded-b-2xl flex flex-col justify-center items-center">
            <h4 className="text-white font-mina font-semibold text-base lg:text-lg">
              {item.name}
            </h4>
            <p className="text-white font-inter text-xs sm:text-sm mt-1">
              {item.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* CTA Section */}
      <div className="flex justify-center items-start px-4 mt-16">
  <div className="flex flex-col items-center justify-center bg-gradient-to-br from-neutralFive to-neutralSix w-full max-w-5xl h-[180px] sm:h-[200px] lg:h-[220px] rounded-md px-6 text-center">
    <h4 className="text-white font-inter text-base sm:text-lg lg:text-xl leading-relaxed">
      Great ideas need brilliant minds to bring them to life.
    </h4>
  </div>
</div>

      {/* Why Choose Us Section */}
      <div className="flex justify-center items-center px-4 mt-16">
  <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center lg:items-start px-2">
    {/* Text Section */}
    <div className="flex-1 space-y-6 mb-8 lg:mb-0">
      <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
        Why Choose Us.
      </h1>

      {/* Expertise */}
      <div>
        <h2 className="font-mina font-extrabold text-lg sm:text-xl lg:text-2xl">
          01: Expertise:
        </h2>
        <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed ml-2">
          Our team brings decades of combined experience to every project.
        </p>
      </div>

      {/* Innovation */}
      <div>
        <h2 className="font-mina font-extrabold text-lg sm:text-xl lg:text-2xl">
          02: Innovation:
        </h2>
        <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed ml-2">
          We push boundaries, creating new ways to drive success.
        </p>
      </div>

      {/* Results */}
      <div>
        <h2 className="font-mina font-extrabold text-lg sm:text-xl lg:text-2xl">
          03: Results:
        </h2>
        <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed ml-2">
          Our work speaks for itself—every project delivers measurable results.
        </p>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-1 flex justify-center lg:justify-end pl-0 lg:pl-4 pr-0 lg:pr-4">
      <div className="bg-black w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden mt-4 lg:mt-0">
        <Image
          className="w-full h-full object-cover rounded-lg"
          src={bg}
          alt="Hero Image"
        />
      </div>
    </div>
  </div>
</div>

      <ContactSection />
    </>
  );
}
