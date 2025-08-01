"use-client";
import { bg } from "../../app/index.js";
import Image from "next/image";
// const ctaContent = [
//   {
//     id: 1,
//     description1: "We don’t just complete projects; we engineer revolutions",
//     image: "",
//   },
//   {
//     id: 2,
//     description2: "Every project is a masterpiece in progress.",
//     image: "",
//   },
//   {
//     id: 3,
//     description3: "Let’s Create the Future Together.",
//     image: "",
//   },
//   {
//     id: 4,
//     description4: "We're really the Masterminds.",
//     image: "",
//   },
// ];
// import { ContactSection } from "@/components/ContactSection.tsx";
export default function solutions() {
  return (
    <main className="w-full">
      {" "}
      {/* WHAT WE DO START */}
      {/* ------ */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              What We Do.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              We build custom digital, creative, and marketing solutions that
              help ambitious brands stand out, grow faster, and stay ahead.
              <br />
              <br />
              Every project we take on is designed to make real impact—whether
              it’s building powerful websites, creating standout visuals,
              launching smart marketing campaigns, or developing tech that
              solves problems. <br />
              <br /> From leveling up your brand to building tools that drive
              results, we push creative and digital boundaries to make your
              vision unforgettable.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              {/* <Image
                src={bg}
                alt="Who We Are"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              /> */}
              <video
                src="/assets/smedia4  .mp4"
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-96 h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* -------- */}
      {/* WHAT WE DO END */}
      {/* DIGITAL STRATEGY START */}
      {/* ------- */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              {/* <Image
                src={bg}
                alt="Our Story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              /> */}

              <video
                src="/assets/smedia1.mp4"
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-96 h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Digital Strategy & Consulting.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Success begins with a plan. We analyze, strategize, and map out
              the digital journey that transforms your brand into a powerhouse.
              From market insights to tailored solutions, we ensure every step
              leads to brilliance.
              <br />
            </p>
            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
              <li>Brand Strategy</li>
              <li>Market Research & Analysis</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ------- */}
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
      {/* ---------- */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Branding & Identity Design.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Your brand is more than a logo—it’s your story, your values, and
              your promise to the world. We create identities that captivate,
              resonate, and leave a lasting impression.
              <br />
              <br />
              <h3 className="font-bold">Key Offerings</h3>
              <ul className="list-disc pl-4">
                <li>Logo Design.</li>
                <li>Visual Identity Systems.</li>
                <li>Brand Guidelines.</li>
              </ul>
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              <Image
                src="/assets/brand1.jpg"
                alt="Who We Are"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />

              {/* <video
                src="/assets/smedia2.mp4"
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-96 h-full object-cover rounded-lg"
              /> */}
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}
      {/* BRANDING & ID END */}
      {/* MOBILE APP DEV START */}
      {/* ----- */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              <Image
                src={bg}
                alt="Our Story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
               <video
                src="/assets/web2.mp4"
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-96 h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Web & App Development.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              From sleek websites to powerful apps, we build digital experiences
              that captivate and convert. Seamlessly blending functionality with
              aesthetics, our solutions are engineered to perform.
              <br />
            </p>
            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
              <li>Custom Website Development.</li>
              <li>Mobile App Design & Development.</li>
              <li>E-Commerce Solutions.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ----- */}
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
      {/* ---- */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Creative Content & Marketing.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Content that speaks. Campaigns that convert. We create stories and
              strategies that amplify your reach and connect you with your
              audience like never before.
              <br />
              <br />
              <h3 className="font-bold">Key Offerings</h3>
              <ul className="list-disc pl-4">
                <li>Social Media Management.</li>
                <li>Content Creation (Video, Graphics, Copy).</li>
                <li>Paid Advertising Campaigns.</li>
              </ul>
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              {/* <Image
                src={bg}
                alt="Who We Are"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              /> */}
              <video
                src="/assets/smedia3.mp4"
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-96 h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ----- */}
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
      {/* ------ */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              <Image
                src="/assets/ux.jpg"
                alt="UI/UX Designing"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              UI/UX Design.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Exceptional design isn’t just seen; it’s felt. We craft user
              experiences that are intuitive, engaging, and unforgettable,
              ensuring your audience keeps coming back for more.
              <br />
              <br />
              <h3 className="font-bold">Key Offerings</h3>
              <ul className="list-disc pl-4">
                <li>User Interface Design.</li>
                <li>User Experience Research.</li>
                <li>Prototyping & Testing.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      {/* ------- */}
      {/* UI UX END */}
      {/* EMERGING TECH SOLN START */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Emerging Tech Solutions
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Stay ahead of the curve with cutting-edge technologies. From
              AI-powered innovations to advanced tools, we empower you to lead
              in a tech-driven world.
              <br />
            </p>
            <h3 className="font-bold">Key Offerings</h3>
            <ul className="list-disc pl-4">
              <li>AI Integration.</li>
              <li>Chatbot Development.</li>
              <li>Data Analytics & Automation.</li>
            </ul>
          </div>
          {/* Left Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              <Image
                src="/assets/emerge.jpg"
                alt="Our Story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Right Content */}
        </div>
      </section>
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
    </main>
  );
}
