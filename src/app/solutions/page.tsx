"use-client";

import { bg } from "../../app/index.js";
import Image from "next/image";
// import { ContactSection } from "@/components/ContactSection.tsx";
export default function solutions() {
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
      {/* WHAT WE DO START */}
      <div className="flex justify-center items-center  ">
        <div className="flex justify-center items-start px-4 mt-32">
          <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center gap-8 px-4">
            {/* Left Content */}
            <div className="flex-1 space-y-4">
              <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                What We Do.
              </h1>
              <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed">
                We don’t just offer services—we craft tailored solutions that
                empower the bold, ignite the visionary, and elevate the
                unstoppable. Every project we undertake is treated as a unique
                masterpiece, meticulously designed to inspire action, create
                value, and deliver measurable impact.
                <br /> <br />
                Whether it’s transforming a brand’s digital presence, developing
                innovative tools, or designing experiences that captivate, we
                approach each challenge with a commitment to excellence and a
                drive to push boundaries. With Seynation, your vision isn’t just
                realized—it’s reimagined and engineered to leave a lasting mark
                on the world.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex-1 flex justify-center">
              <div className="bg-black w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src={bg}
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WHAT WE DO END */}
      {/* DIGITAL STRATEGY START */}
      <div className="flex justify-center items-center">
        <div className="flex w-full max-w-6xl flex-col lg:flex-row items-center px-4 mt-16 gap-8">
          {/* Right Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
              Digital Strategy & Consulting.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed">
              Success begins with a plan. We analyze, strategize, and map out
              the digital journey that transforms your brand into a powerhouse.
              From market insights to tailored solutions, we ensure every step
              leads to brilliance.
            </p>
            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
              <li>Brand Strategy</li>
              <li>Market Research & Analysis</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          {/* Left Content */}
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* DIGITAL STRATEGY END */}
      {/* CTA Section */}
      <div className="flex justify-center items-start px-4 mt-16">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-neutralFive to-neutralSix w-full max-w-5xl h-[180px] sm:h-[200px] lg:h-[220px] rounded-md px-6 text-center">
          <h4 className="text-white font-inter text-base sm:text-lg lg:text-xl leading-relaxed">
            Great ideas need brilliant minds to bring them to life.
          </h4>
        </div>
      </div>
      {/* END CTA */}
      {/* BRANDING & ID START */}
      <div className="flex justify-center items-center">
        <div className="flex w-full max-w-6xl flex-col lg:flex-row items-center px-4 mt-16 gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
              Branding & Identity Design.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed">
              Your brand is more than a logo—it’s your story, your values, and
              your promise to the world. We create identities that captivate,
              resonate, and leave a lasting impression.
            </p>

            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
              <li>Logo Design.</li>
              <li>Visual Identity Systems.</li>
              <li>Brand Guidelines.</li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* BRANDING & ID END */}
      
      {/* MOBILE APP DEV START */}
      <div className="flex justify-center items-center">
        <div className="flex w-full max-w-6xl flex-col-reverse lg:flex-row items-center px-4 mt-16 gap-8">
          {/* Left Content */}
        <div className="flex-1 flex justify-center">
            <div className="bg-black w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
              Web & App Development.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed">
              From sleek websites to powerful apps, we build digital experiences
              that captivate and convert. Seamlessly blending functionality with
              aesthetics, our solutions are engineered to perform.
            </p>

            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
            <li>Custom Website Development.</li>
              <li>Mobile App Design & Development.</li>
              <li>E-Commerce Solutions.</li>
            </ul>
          </div>

          {/* Right Content */}
          
        </div>
      </div>
      {/* MOBILE APP DEV END */}
      {/* CTA Section */}
      <div className="flex justify-center items-start px-4 mt-16">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-neutralFive to-neutralSix w-full max-w-5xl h-[180px] sm:h-[200px] lg:h-[220px] rounded-md px-6 text-center">
          <h4 className="text-white font-inter text-base sm:text-lg lg:text-xl leading-relaxed">
            Great ideas need brilliant minds to bring them to life.
          </h4>
        </div>
      </div>
      {/* END CTA SECTION */}

      {/* CREATIVE CONTENT START */}
      <div className="flex justify-center items-center">
        <div className="flex w-full max-w-6xl flex-col lg:flex-row items-center px-4 mt-16 gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
              Creative Content & Marketing.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed">
              Content that speaks. Campaigns that convert. We create stories and
              strategies that amplify your reach and connect you with your
              audience like never before.
            </p>

            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
              <li>Social Media Management.</li>
              <li>Content Creation (Video, Graphics, Copy).</li>
              <li>Paid Advertising Campaigns.</li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CREATIVE CONTENT END */}

      {/* CTA Section */}
      <div className="flex justify-center items-start px-4 mt-16">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-neutralFive to-neutralSix w-full max-w-5xl h-[180px] sm:h-[200px] lg:h-[220px] rounded-md px-6 text-center">
          <h4 className="text-white font-inter text-base sm:text-lg lg:text-xl leading-relaxed">
            Great ideas need brilliant minds to bring them to life.
          </h4>
        </div>
      </div>
      {/* END OF CTA SECTION */}

      {/* UI/UX START */}
      <div className="flex justify-center items-center">
        <div className="flex w-full max-w-6xl flex-col-reverse lg:flex-row items-center px-4 mt-16 gap-8">
          {/* Left Content */}
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="UI/UX Design Image"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
              UI/UX Design
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed">
              Exceptional design isn’t just seen; it’s felt. We craft user
              experiences that are intuitive, engaging, and unforgettable,
              ensuring your audience keeps coming back for more.
            </p>

            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
              <li>User Interface Design</li>
              <li>User Experience Research</li>
              <li>Prototyping & Testing</li>
            </ul>
          </div>
        </div>
      </div>
      {/* UI UX END */}
      {/* EMERGING TECH SOLN START */}
      <div className="flex justify-center items-center">
        <div className="flex w-full max-w-6xl flex-col-reverse lg:flex-row items-center px-4 mt-16 gap-8">
          {/* Left Content */}
          <div className="flex-1 flex justify-center">
            <div className="bg-black w-full max-w-xs sm:max-w-sm lg:w-96 lg:h-96 h-64 rounded-lg">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={bg}
                alt="UI/UX Design Image"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-5xl">
              Emerging Tech Solutions
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-md leading-relaxed">
              Stay ahead of the curve with cutting-edge technologies. From
              AI-powered innovations to advanced tools, we empower you to lead
              in a tech-driven world.
            </p>

            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
              <li>AI Integration.</li>
              <li>Chatbot Development.</li>
              <li>Data Analytics & Automation.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* EMERGING TECH SOLN END */}
      {/* CTA Section */}
      <div className="flex justify-center items-start px-4 mt-16 mb-16">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-neutralFive to-neutralSix w-full max-w-5xl h-[180px] sm:h-[200px] lg:h-[220px] rounded-md px-6 text-center">
          <h4 className="text-white font-inter text-base sm:text-lg lg:text-xl leading-relaxed">
            Great ideas need brilliant minds to bring them to life.
          </h4>
        </div>
      </div>
      {/* END CTA */}
      {/* <ContactSection /> */}
    </>
  );
}
