"use-client";
import Image from "next/image";

export const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Masterminding every step of your digital journey, from small business websites to large-scale websites, we provide expertise in web development.",
      image1: "/images/web-dev-icon.png", 
      image2: "/images/web-dev-illustration.png", 
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "From small business applications to large-scale e-commerce apps, we provide expertise in mobile app development.",
      image1: "/images/mobile-app-icon.png", 
      image2: "/images/mobile-app-illustration.png", 
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "From social media marketing to search engine optimization, we provide expertise in digital marketing.",
      image1: "/images/digital-marketing-icon.png", 
      image2: "/images/digital-marketing-illustration.png", 
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description:
        "From small business e-commerce to large-scale e-commerce platforms, we provide expertise in e-commerce solutions.",
      image1: "/images/ecommerce-icon.png",
      image2: "/images/ecommerce-illustration.png", 
    },
    {
      id: 5,
      title: "Branding & Identity",
      description:
        "From small business branding to large-scale branding, we provide expertise in branding & identity.",
      image1: "/images/branding-icon.png", 
      image2: "/images/branding-illustration.png", 
    },
    {
      id: 6,
      title: "Content Marketing",
      description:
        "From social media content marketing to search engine optimization, we provide expertise in content marketing.",
      image1: "/images/content-marketing-icon.png", 
      image2: "/images/content-marketing-illustration.png", 
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center space-y-2 mb-8 sm:mb-12 lg:mb-16">
          <h6 className="font-mina font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
            Solutions We Offer.
          </h6>
          <p className="font-inter text-sm sm:text-base text-gray-600">
            Masterminding Every Step of Your Digital Journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-neutralFive to-neutralSix rounded-[20px] p-6 hover:bg-gradient-to-br hover:from-[#BA3521] hover:to-secondaryFour hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex flex-col justify-between h-full">
                {/* Icon and Title */}
                <div className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={item.image1}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-inter text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description and Illustration */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
                  <p className="text-sm sm:text-base text-white font-inter flex-1">
                    {item.description}
                  </p>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                    <Image
                      src={item.image2}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};