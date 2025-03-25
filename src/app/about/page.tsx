"use client";
import { bg } from "../../app/index.js";
import Image from "next/image";
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
export default function About() {
  const valueData = [
    {
      id: 1,
      title: "Mastery",
      description: "We believe in perfecting every detail.",
      image1: "/images/mastery-icon.png", // Add your image path
      image2: "/images/mastery-illustration.png", // Add your image path
    },
    {
      id: 2,
      title: "Innovation",
      description: "Every project is a chance to redefine the norm.",
      image1: "/images/innovation-icon.png", // Add your image path
      image2: "/images/innovation-illustration.png", // Add your image path
    },
    {
      id: 3,
      title: "Collaboration",
      description: "Partnerships are the foundation of our success.",
      image1: "/images/collaboration-icon.png", // Add your image path
      image2: "/images/collaboration-illustration.png", // Add your image path
    },
    {
      id: 4,
      title: "Impact",
      description: "We measure our success by the value we create.",
      image1: "/images/impact-icon.png", // Add your image path
      image2: "/images/impact-illustration.png", // Add your image path
    },
  ];

  const teamData = [
    {
      id: 1,
      name: "Omega Seyongwe",
      role: "Founder & CEO",
      image: "/images/omega-seyongwe.jpg", // Add your image path
      description: "Visionary leader driving Seynation's digital revolution.",
    },
    {
      id: 2,
      name: "Dionese Shayo",
      role: "Assistant Managing Director",
      image: "/images/dionese-shayo.jpg", // Add your image path
      description: "Strategic thinker with a passion for innovation.",
    },
    {
      id: 3,
      name: "Apolinary Theonest",
      role: "Mastermind of Everything",
      image: "/images/apolinary-theonest.jpg", // Add your image path
      description: "The go-to expert for all things tech and creativity.",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Who We Are.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              We are those guys who combine the art of imagination with the
              science of innovation to craft solutions that redefine
              possibilities. We are more than just an agency; we are the
              architects of digital transformation, building bridges between
              bold ideas and real-world impact.
              <br />
              <br />
              Every project is a canvas, every challenge an opportunity to
              master the extraordinary. Together with our clients, we don’t just
              adapt to the future—we create it.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              <Image
                src={bg}
                alt="Who We Are"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
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
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Our Story.
            </h1>
            <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Founded in 2015 by Omega Seyongwe, Seynation was born out of a
              vision to lead a digital revolution. Starting as a one-person
              dream, the agency has grown into a powerhouse of passionate
              creatives, delivering groundbreaking solutions in digital,
              technology, and design.
              <br />
              <br />
              Over the years, we’ve built a legacy of innovation and impact,
              transforming ideas into masterpieces that redefine industries.
              With unwavering dedication, Seynation continues to push
              boundaries, crafting solutions that empower businesses and shape
              the future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Our Purpose.
            </h1>
            <div className="space-y-4">
              <h2 className="font-mina font-extrabold text-lg sm:text-xl lg:text-2xl text-gray-900">
                Mission:
              </h2>
              <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                To empower businesses with digital excellence, shaping brands
                that thrive in the modern world.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-mina font-extrabold text-lg sm:text-xl lg:text-2xl text-gray-900">
                Vision:
              </h2>
              <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                To be the masterminds behind transformative ideas that inspire
                and drive progress across industries.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              <Image
                src={bg}
                alt="Our Purpose"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Value Section */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
            Our Values.
          </h1>
          <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-600">
            The Seynation Code
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueData.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-neutralFive to-neutralSix rounded-lg p-6 hover:bg-gradient-to-br hover:from-[#BA3521] hover:to-secondaryFour transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={item.image1}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold font-inter text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-white font-inter mt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Team Section */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
            Meet The Masterminds.
          </h1>
          <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-600">
            The Visionaries Behind Seynation
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="w-full h-48 sm:h-60 lg:h-72 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-full bg-primaryTwo p-4 text-center">
                <h4 className="text-white font-mina font-semibold text-lg lg:text-xl">
                  {item.name}
                </h4>
                <p className="text-white font-inter text-sm sm:text-base mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
     {/* CTA SECTION */}
     <div
        className="flex flex-col items-center mt-16 mb-16 justify-center ml-6 mr-6 bg-gradient-to-br
            from-neutralFive neutralSix to-neutralSix w-5/5 h-[180px] rounded-md"
      >
        {ctaContent.map((item) => (
          <h6 className="text-white font-inter pl-20 pr-20">
            {item.description2}
          </h6>
        ))}
      </div>
      {/* END CTA SECTION */}

      {/* Why Choose Us Section */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-mina font-extrabold text-3xl sm:text-4xl lg:text-4xl text-gray-900">
              Why Choose Us.
            </h1>
            <div className="space-y-4">
              <h2 className="font-mina font-extrabold text-lg sm:text-xl lg:text-2xl text-gray-900">
                01: Expertise:
              </h2>
              <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Our team brings decades of combined experience to every project.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-mina font-extrabold text-lg sm:text-xl lg:text-2xl text-gray-900">
                02: Innovation:
              </h2>
              <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                We push boundaries, creating new ways to drive success.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-mina font-extrabold text-lg sm:text-xl lg:text-2xl text-gray-900">
                03: Results:
              </h2>
              <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Our work speaks for itself—every project delivers measurable
                results.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-64 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden relative">
              <Image
                src={bg}
                alt="Why Choose Us"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* CTA SECTION */}
      <div
        className="flex flex-col items-center mt-16 mb-16 justify-center ml-6 mr-6 bg-gradient-to-br
            from-neutralFive neutralSix to-neutralSix w-5/5 h-[180px] rounded-md"
      >
        {ctaContent.map((item) => (
          <h6 className="text-white font-inter pl-20 pr-20">
            {item.description2}
          </h6>
        ))}
      </div>
      {/* END CTA SECTION */}
    </main>
  );
}
