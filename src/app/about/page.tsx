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
      {" "}
      <div className="flex justify-center items-center  ">
        <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px]">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-5xl">Who We Are.</h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              We are those guys who combine the art of imagination with the
              science of innovation to craft solutions that redefine
              possibilities. We are more than just an agency; we are the
              architects of digital transformation, building bridges between
              bold ideas and real-world impact. <br></br>
              <br></br>
              <br></br>Every project is a canvas, every challenge an opportunity
              to master the extraordinary. Together with our clients, we don’t
              just adapt to the future—we create it.
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
      </div>
      <div className=" flex justify-center items-center  ">
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
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-5xl">Our Story.</h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              Founded in 2015 by Omega Seyongwe, Seynation was born out of a
              vision to lead a digital revolution. Starting as a one-person
              dream, the agency has grown into a powerhouse of passionate
              creatives, delivering groundbreaking solutions in digital,
              technology, and design.<br></br> <br></br>Over the years, we’ve
              built a legacy of innovation and impact, transforming ideas into
              masterpieces that redefine industries. With unwavering dedication,
              Seynation continues to push boundaries, crafting solutions that
              empower businesses and shape the future.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  ">
        <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px]">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-5xl">Our Purpose.</h1>
            <h1 className="font-mina font-extrabold text-xl">Mission:</h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              To empower businesses with digital excellence, shaping brands that
              thrive in the modern world.
            </p>
            <h1 className="font-mina font-extrabold text-xl">Vision:</h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              To be the masterminds behind transformative ideas that inspire and
              drive progress across industries
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
      </div>
      {/* The Value Section */}
      <div className="flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-mina font-extrabold text-5xl mt-[96px]">
            Our Values.
          </h1>
          <p className="font-inter mb-10">The Seynation Code</p>

          <div className="flex items-center justify-center overflow-hidden flex-row flex-wrap gap-4">
            {valueData.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-neutralFive to-neutralSix w-[295px] h-[200px] rounded-[15px] mb-10 p-7 hover:bg-gradient-to-br hover:from-[#BA3521] hover:to-secondaryFour hover:cursor-pointer"
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col items-start gap-3">
                    <img
                      src={item.image1}
                      alt={item.title}
                      className="w-10 h-10"
                    />
                    <h3 className="text-2xl font-bold font-inter text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-4">
                    <p className="text-base text-white font-inter flex-1">
                      {item.description}
                    </p>
                    <img
                      src={item.image2}
                      alt=""
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* The Team Section */}
      <div className="flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-mina font-extrabold text-5xl mt-[96px]">
            Meet The Masterminds.
          </h1>
          <p className="font-inter mb-10">The Visonaries Behind Seynaton</p>

          {/* <div className="flex items-center justify-center overflow-hidden flex-row flex-wrap gap-4">
            <div className="bg-black w-60 h-72 mb-5 rounded-2xl flex flex-col justify-between">
              
              <div></div>
              <div className="bg-primaryTwo w-60 h-20 rounded-2xl flex flex-col justify-center items-center">
                <h4 className="text-white font-mina font-semibold items-center justify-center">
                  Omega Seyongwe
                </h4>
                <p className="text-white font-inter text-sm">Founder & CEO</p>
              </div>
            </div>
          </div> */}

          <div className="flex items-center justify-center overflow-hidden flex-row flex-wrap gap-4">
            {teamData.map((item) => (
              <div
                key={item.id}
                className="w-60 h-72 mb-5 rounded-2xl flex flex-col justify-between overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="Mastermind"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="bg-primaryTwo w-60 h-20 rounded-2xl flex flex-col justify-center items-center">
                  <h4 className="text-white font-mina font-semibold items-center justify-center">
                    {item.name}
                  </h4>
                  <p className="text-white font-inter text-[12px]">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
      {/* CTA SECTION */}
      <div className="flex justify-center items-start mt-16">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br  from-neutralFive neutralSix to-neutralSix w-4/5 h-[180px] rounded-md">
          <h4 className="text-white font-inter">
            Great ideas need brilliant minds to bring them to life.
          </h4>
        </div>
      </div>
      {/* END OF CTA SECTION */}
      <div className="flex justify-center items-center  ">
        <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px]">
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-96 h-96 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-5xl">
              Why Choose Us.
            </h1>
            <h1 className="font-mina font-extrabold text-xl">01: Expertise:</h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              Unmatched skill in digital, technology, and creativity.
            </p>
            <h1 className="font-mina font-extrabold text-xl">
              02: Customization:
            </h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              Tailored solutions for unique challenges.
            </p>
            <h1 className="font-mina font-extrabold text-xl">03: Results:</h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              We engineer success stories, not just deliverables.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-row justify-center">
        <h1 className="font-mina font-extrabold text-3xl mt-[96px]">
          Let's Talk
        </h1>
        
      </div>
      <ContactSection />
    </>
  );
}
