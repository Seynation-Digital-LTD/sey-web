"use client";
import { useState, useEffect } from "react";
import { bg } from "../../app/index.js";
import Image from "next/image";

export default function PortfolioPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("all");
  const [popupVisible, setPopupVisible] = useState(false); // Tracks Popup visibility.
  const [selectedProject, setSelectedProject] = useState(null); // Tracks Selected Project.
  const [scrolled, setScrolled] = useState(false); // Tracks if buttons are fixed
  const [withinPortfolio, setWithinPortfolio] = useState(false); // Tracks if user is in the portfolio section

  const handleCategoryClick = (categoryId) => {
    setSelectedPortfolio(categoryId);
  };

  const handlePortfolioClick = (project) => {
    setSelectedProject(project);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = document.querySelector(".portfolio-section");
      const buttons = document.querySelector(".port-buttons");

      if (!portfolioSection || !buttons) return;

      const rect = portfolioSection.getBoundingClientRect();
      const buttonsRect = buttons.getBoundingClientRect();

      // Check if the user has scrolled into the portfolio section
      if (rect.top <= 80 && rect.bottom >= buttonsRect.height) {
        setScrolled(true);
        setWithinPortfolio(true);
      } else {
        setWithinPortfolio(false);
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const uniqueCategories = portfolios.reduce(
    (acc, item) => {
      if (!acc.some((cat) => cat.id === item.id)) {
        acc.push({ id: item.id, title: item.title });
      }
      return acc;
    },
    []
  );

  const filteredPortfolios =
    selectedPortfolio === "all"
      ? portfolios.slice(1)
      : portfolios.filter((item) => item.id === selectedPortfolio);

  return (
    <>
      <div className="flex justify-center items-center px-4">
        <div className="flex w-full max-w-6xl flex-col lg:flex-row items-center mt-28">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-3xl lg:text-5xl">
              Our Masterpieces
            </h1>
            <p className="font-inter text-sm lg:text-md leading-relaxed ml-2">
              Every project we undertake tells a story—a narrative of
              innovation, collaboration, and transformation. Each solution we
              deliver is a revolution, breaking boundaries and setting new
              standards for excellence.
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

      {/* Portfolio Buttons */}
      <div className={`port-buttons flex flex-wrap gap-4 justify-center items-center p-6 mt-10 ${scrolled ? "fixed top-8 left-0 w-full bg-white z-50 shadow-md" : ""}`}>
  {uniqueCategories.map((item) => (
    <div
      key={item.id}
      onClick={() => handleCategoryClick(item.id)}
      className={`bg-gradient-to-br ${
        selectedPortfolio === item.id
          ? "from-primaryOne via-primarySix to-primarySeven"
          : "from-neutralTwo to-neutralThree"
      } cursor-pointer text-white p-2 px-4 rounded-xl text-center`}
    >
      {item.title}
    </div>
  ))}
</div>

      {/* Portfolio Display */}
      <div className={`portfolio-section flex flex-row items-center justify-center gap-3 overflow-hidden flex-wrap mt-5 mb-16 ${scrolled ? "mt-[300px] top-[60%]" : ""}`}>
        {filteredPortfolios.map((item) => (
          <div
            key={item.id}
            onClick={() => handlePortfolioClick(item)}
            className="bg-black w-[300px] h-[300px] rounded-2xl text-white p-6 flex items-center justify-center cursor-pointer"
          >
            <div className="">
              <h3 className="text-lg font-bold">{item.title}</h3>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-md mt-2"
                  width={250}
                  height={150}
                />
              )}
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup/Modal */}
      {popupVisible && selectedProject && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-neutralOne w-full max-w-[800px] p-6 sm:p-8 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-black text-xl font-bold"
          onClick={closePopup}
        >
          &times;
        </button>
    
        {/* Hero Image */}
        {selectedProject.image && (
          <div className="bg-black rounded-md mb-6 w-full h-[200px] sm:h-[300px]">
            <Image
              src={selectedProject.image}
              alt={`Hero Image for ${selectedProject.title}`}
              className="w-full h-full object-cover rounded-md"
              width={800}
              height={300}
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
        {selectedProject.images && selectedProject.images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {selectedProject.images.map((image, index) => (
              <div
                key={index}
                className="bg-black rounded-md h-[100px] sm:h-[150px] w-full"
              >
                <Image
                  src={image}
                  alt={`Additional Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                  width={150}
                  height={150}
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
