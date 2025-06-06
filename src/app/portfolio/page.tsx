"use client";
import { useState, useEffect } from "react";
// import { bg } from "../../app/index.js";
import Image from "next/image";

export default function PortfolioPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("all");
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle category button click
  const handleCategoryClick = (categoryId) => {
    setSelectedPortfolio(categoryId);
  };

  // Open the popup modal
  const handlePortfolioClick = (project) => {
    setSelectedProject(project);
    setPopupVisible(true);
  };

  // Close the popup modal
  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProject(null);
  };

  // Scroll logic for sticky buttons
  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = document.querySelector(".portfolio-section");
      const buttons = document.querySelector(".port-buttons");
      if (!portfolioSection || !buttons) return;

      const rect = portfolioSection.getBoundingClientRect();
      const buttonsRect = buttons.getBoundingClientRect();

      if (rect.top <= 80 && rect.bottom >= buttonsRect.height + 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Portfolio Data
  const portfolios = [
    {
      slug: "website",
      title: "Websites",
      name: "Oltau Safaris Website",
      url: "oltausafaris.com",
      description: "A Website for a Toursim Company in Arusha - Tanzania.",
      image: "/assets/oltau1.png",
    },
    {
      slug: "website",
      title: "Websites",
      name: "SUMOSA Energies Website",
      url: "https://www.sumosa.co.tz",
      description:
        "A Website for Filling Station (Gas Station) located in Sikonge - Tabora.",
      image: "/assets/sumosa.jpg",
    },
    {
      slug: "website",
      title: "Website",
      name: "Sawasawa Safaris Website.",
      url: "https://www.sawasawasafaris.co.tz",
      description: "A Website for a Toursim Company in Arusha - Tanzania.",
      image: "/assets/sawasawaaa.png",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Tanzania Enterprenuership Federation Website.",
      url: "https://www.tzef.org/",
      description:
        "A Website for TZEF Organization that helps to promote Enterprenuers in Tanzania by providing business insight.",
      image: "/assets/tef1.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "St. Aggrey Health College.",
      url: "https://www.staggreyhealth.ac.tz",
      description:
        "A Website for St. Aggrey Health College located in Mbeya - Tanzania.",
      image: "/assets/stagrey2.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Mbeya Baby Blue Group Website",
      url: "https://www.mbeyababybluegroup.or.tz",
      description:
        "A Website for a Local Community Group in Mbeya, Tanzania (Mbeya Baby Blue Group).",
      image: "/assets/mbbb.png",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Arusha Jua Website",
      url: "https://arushajua.wordpress.com/",
      description:
        "A Website for a Local Tourists Hostel in Arusha - Tanzania.",
      image: "/assets/arj.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Kujengana Organization Website",
      url: "https://www.kujengana.org",
      description:
        "Providing education, healthcare, and skills to promote gender equality and sustainable community development.",
      image: "/assets/kujengana1.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Cube Nation Website",
      url: "https://www.kujengana.org",
      description:
        "A Website for Cube-nation which is a premier destination wedding company.",
      image: "/assets/cube.jpg",
    },
    {
      slug: "apps",
      title: "Apps",
      name: "AI Crop Disease Detector App (AddApp)",
      url: "www.seynation.co/portfolio",
      description:
        "An AI/ML mobile app for detection fo diseases found in Crops.",
      image: "/assets/addapp2.jpg",
    },
    {
      slug: "systems",
      title: "Systems/Software",
      description: "POS software for retail chains",
      image: "/assets/winga1.png",
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Live Events Attendee Engagement Platform",
      url: "www.seynation.co/portfolio",
      description: "Developed to enhance live events for attendee during live interactions.",
      image: "/assets/live1.png",
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "System build for electrical energy company to monitor and manage energy consumptions.",
      image: "/assets/dynamic.png",
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Peace Training Center SIMS",
      url: "https://www.seynation.co/portfolio",
      description: "Official Students Management System for Peace Training Center with Live Teaching sessions",
      image: "/assets/peace.png",
    },
    
    {
      slug: "uiux",
      title: "UI/UX Designs",
      name: "AI Crop Disease Detector App (AddApp)",
      url: "www.seynation.co/portfolio",
      description:
        "UI for an AI/ML mobile app for detection fo diseases found in Crops.",
      image: "/assets/addapp2.jpg",
    },
    {
      slug: "graphics",
      title: "Graphics",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Event poster designs for concerts",
      image: "/images/about2.jpg",
    },
    {
      slug: "marketing",
      title: "Marketing & Advertising",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Digital ad campaign for e-commerce",
      image: "/images/marketing.jpg",
    },
    {
      slug: "socialmedia",
      title: "Social Media",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Instagram branding for influencers",
      image: "/images/socialmedia.jpg",
    },
  ];

  // Get unique categories from portfolio items
  const uniqueCategories = [
    { id: "all", title: "All" },
    ...Array.from(
      new Map(
        portfolios.map((item) => [
          item.slug,
          { id: item.slug, title: item.title },
        ])
      ).values()
    ),
  ];

  // Filter portfolios
  const filteredPortfolios =
    selectedPortfolio === "all"
      ? portfolios
      : portfolios.filter((item) => item.slug === selectedPortfolio);

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
              Every project we undertake tells a story—a narrative of
              innovation, collaboration, and transformation. Each solution we
              deliver is a revolution, breaking boundaries and setting new
              standards for excellence.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-64 lg:w-96 lg:h-96 rounded-lg overflow-hidden mt-4">
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

      {/* Filter Buttons */}
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
        {filteredPortfolios.map((item, index) => (
          <div
            key={index}
            onClick={() => handlePortfolioClick(item)}
            className="bg-primaryTwo w-[350px] h-[210px] rounded-xl text-white p-2 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transform transition duration-300"
          >
            {item.image && (
              <div className="relative w-full h-full object-fill">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-md object-fill"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupVisible && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-neutralOne w-full max-w-[800px] p-6 sm:p-8 rounded-lg shadow-lg relative overflow-y-auto max-h-full">
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold focus:outline-none"
              onClick={closePopup}
              aria-label="Close"
            >
              &times;
            </button>

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

            <div className="flex flex-col justify-start items-start mb-6">
              <h2 className="font-bold font-inter text-primaryOne text-lg sm:text-xl">
                Project: {selectedProject.name}
              </h2>
              <p className="font-medium font-inter text-black text-sm sm:text-base mt-2">
                <b>Description:</b> {selectedProject.description}
              </p>
              <a
                href={
                  selectedProject.url?.startsWith("http")
                    ? selectedProject.url
                    : `https://${selectedProject.url}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryOne font-medium mt-2 underline"
              >
                View Project
              </a>
            </div>

            {selectedProject.images && selectedProject.images.length > 0 && (
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
