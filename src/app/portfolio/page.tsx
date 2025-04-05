"use client";

import { useState, useEffect } from "react";
import { bg } from "../../app/index.js";
import Image from "next/image";

export default function PortfolioPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("all");
  const [popupVisible, setPopupVisible] = useState(false); // Tracks popup visibility.
  const [selectedProject, setSelectedProject] = useState(null); // Tracks selected project.
  const [scrolled, setScrolled] = useState(false); // Determines if buttons should be fixed

  // Handle category button click.
  const handleCategoryClick = (categoryId) => {
    setSelectedPortfolio(categoryId);
  };

  // Open the popup modal.
  const handlePortfolioClick = (project) => {
    setSelectedProject(project);
    setPopupVisible(true);
  };

  // Close the popup modal.
  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProject(null);
  };

  // Check scroll position to fix portfolio buttons.
  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = document.querySelector(".portfolio-section");
      const buttons = document.querySelector(".port-buttons");
      if (!portfolioSection || !buttons) return;

      const rect = portfolioSection.getBoundingClientRect();
      const buttonsRect = buttons.getBoundingClientRect();

      // If the top of the portfolio section has scrolled past a threshold
      // and there's enough space below for the buttons.
      if (rect.top <= 80 && rect.bottom >= buttonsRect.height + 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Portfolio categories array.
  const portfolios = [
    {
      id: "all",
      title: "All",
      description: "View all our portfolio projects",
      link: "#",
    },
    {
      id: "website",
      title: "Websites",
      description: "A website designed for a prestigious company",
      image: "/images/website.jpg",
    },
    {
      id: "apps",
      title: "Apps",
      description: "A mobile app designed for a successful business",
      image: "/images/apps.jpg",
    },
    {
      id: "systems",
      title: "Systems/Software",
      description: "A system designed for a successful business",
      image: "/images/systems.jpg",
    },
    {
      id: "uiux",
      title: "UI/UX Designs",
      description: "A user experience designed for a successful business",
      image: "/images/uiux.jpg",
    },
    {
      id: "graphics",
      title: "Graphics",
      description: "A graphic design for a successful business",
      image: "/images/graphics.jpg",
    },
    {
      id: "marketing",
      title: "Marketing & Advertising",
      description: "A marketing strategy designed for a successful business",
      image: "/images/marketing.jpg",
    },
    {
      id: "socialmedia",
      title: "Social Media",
      description:
        "A social media marketing strategy designed for a successful business",
      image: "/images/socialmedia.jpg",
    },
  ];

  // Extract unique categories for buttons.
  const uniqueCategories = portfolios.reduce((acc, item) => {
    if (!acc.some((cat) => cat.id === item.id)) {
      acc.push({ id: item.id, title: item.title });
    }
    return acc;
  }, []);

  // Filter portfolios based on the selected category.
  const filteredPortfolios =
    selectedPortfolio === "all"
      ? portfolios.filter((item) => item.id !== "all")
      : portfolios.filter((item) => item.id === selectedPortfolio);

  return (
    <>
      {/* Hero Section */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mt-28 gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl lg:text-5xl text-center lg:text-left">
              Our Masterpieces
            </h1>
            <p className="font-inter text-sm lg:text-md leading-relaxed text-center lg:text-left">
              Every project we undertake tells a story—a narrative of innovation,
              collaboration, and transformation. Each solution we deliver is a
              revolution, breaking boundaries and setting new standards for
              excellence.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-64 lg:w-96 lg:h-96 rounded-lg overflow-hidden mt-4">
              {/* <Image
                src={bg}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              /> */}
             <video
                src="/assets/smedia5.mp4"
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
      </div>

      {/* Portfolio Buttons */}
      <div
        className={`port-buttons flex flex-wrap gap-4 justify-center items-center p-6 mt-10 transition-all duration-300 ${
          scrolled ? "fixed top-8 left-0 w-full bg-white z-50 shadow-md" : ""
        }`}
      >
        {uniqueCategories.map((item) => (
          <button
            key={item.id}
            onClick={() => handleCategoryClick(item.id)}
            className={`cursor-pointer text-white p-2 px-4 rounded-xl text-center transition-colors duration-300 focus:outline-none ${
              selectedPortfolio === item.id
                ? "bg-gradient-to-br from-primaryOne via-primarySix to-primarySeven"
                : "bg-gradient-to-br from-neutralTwo to-neutralThree"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Portfolio Display */}
      <div className="portfolio-section max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 mt-8 mb-16 px-4">
        {filteredPortfolios.map((item) => (
          <div
            key={item.id}
            onClick={() => handlePortfolioClick(item)}
            className="bg-black w-[300px] h-[300px] rounded-2xl text-white p-6 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-lg font-bold text-center">{item.title}</h3>
            {item.image && (
              <div className="mt-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={150}
                  className="rounded-md object-cover"
                />
              </div>
            )}
            <p className="text-sm mt-2 text-center">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Popup/Modal */}
      {popupVisible && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-neutralOne w-full max-w-[800px] p-6 sm:p-8 rounded-lg shadow-lg relative overflow-y-auto max-h-full">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold focus:outline-none"
              onClick={closePopup}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Hero Image */}
            {selectedProject.image && (
              <div className="bg-black rounded-md mb-6 w-full h-[200px] sm:h-[300px] relative">
                <Image
                  src={selectedProject.image}
                  alt={`Hero Image for ${selectedProject.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col justify-start items-start mb-6">
              <h2 className="font-bold font-inter text-primaryOne text-lg sm:text-xl">
                Project: {selectedProject.title}
              </h2>
              <p className="font-medium font-inter text-black text-sm sm:text-base mt-2">
                Description: {selectedProject.description}
              </p>
              <a
                href="#"
                className="text-primaryOne font-medium mt-2 underline"
              >
                View Project
              </a>
            </div>

            {/* Additional Images */}
            {selectedProject.images &&
              selectedProject.images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <div
                      key={index}
                      className="bg-black rounded-md h-[100px] sm:h-[150px] w-full relative"
                    >
                      <Image
                        src={image}
                        alt={`Additional Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      )}
    </>
  );
}
