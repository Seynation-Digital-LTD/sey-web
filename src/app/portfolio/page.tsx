"use client";
import { useState } from "react";
import { bg } from "../../app/index.js";
import Image from "next/image";

export default function Solutions() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("all");
  const [popupVisible, setPopupVisible] = useState(false); // This Tracks Popup visibility.
  const [selectedProject, setSelectedProject] = useState(null); // This Tracks Selected Project.

  const handleCategoryClick = (categoryId: string) => {
    setSelectedPortfolio(categoryId);
  };

  const handlePortfolioClick = (project: any) => {
    setSelectedProject(project);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProject(null);
  };

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

  const uniqueCategories = portfolios.reduce<{ id: string; title: string }[]>(
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
      <div className="flex justify-center items-center">
        <div className="flex w-full max-w-6xl flex-row items-center px-2 mt-[96px]">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="font-mina font-extrabold text-5xl">
              Our Masterpieces.
            </h1>
            <p className="font-inter text-md leading-relaxed ml-2">
              Every project we undertake tells a story—a narrative of
              innovation, collaboration, and transformation. Each solution we
              deliver is a revolution, breaking boundaries and setting new
              standards for excellence.
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

      {/* Portfolio Buttons */}
      <div className="port-buttons flex flex-row gap-4 justify-center items-center p-6">
        {uniqueCategories.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCategoryClick(item.id)}
            className={`bg-gradient-to-br ${
              selectedPortfolio === item.id
                ? "from-primaryOne via-primarySix to-primarySeven"
                : "from-neutralTwo to-neutralThree"
            } cursor-pointer text-white p-2 pl-4 pr-4 rounded-xl`}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Portfolio Display */}
      <div className="flex flex-row items-center justify-center gap-3 overflow-hidden flex-wrap  mt-5 ">
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

      {/* CTA SECTION */}
      <div className="flex justify-center items-start mt-16 mb-20">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br  from-neutralFive neutralSix to-neutralSix w-4/5 h-[180px] rounded-md">
          <h4 className="text-white font-inter">
            Great ideas need brilliant minds to bring them to life.
          </h4>
        </div>
      </div>
      {/* END CTA */}

      {/* Here We put the Popup/Modal */}
      {popupVisible && selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-neutralOne w-[800px] p-6 rounded-lg shadow-lg relative">
            {/* The Close Button */}
            <button
              className="absolute top-2 right-2 text-black text-xl  font-bold"
              onClick={closePopup}
            >
              &times;
            </button>
            {/* The Project Details Goes Here MwanaWanee. */}
            <div className="flex flex-row justify-start p-4 gap-4">
              <div className="flex flex-row gap-3 justify-center items-cente">
                {selectedProject.image && (
                  <div className="bg-black rounded-md h-[250px] w-[250px]">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto rounded-md mb-4"
                      width={600}
                      height={400}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="flex flex-row gap-4">
                  <h2 className="font-bold font-inter text-primaryOne">
                    Project Name:
                  </h2>
                  <h2 className="font-medium font-inter text-black">
                    {selectedProject.title}
                  </h2>
                </div>
                <div className="flex flex-row gap-4">
                  <h2 className="font-bold font-inter text-primaryOne">
                    Client :
                  </h2>
                  <h2 className="font-medium font-inter text-black">
                    {selectedProject.title}
                  </h2>
                </div>
                <div className="flex flex-row gap-4">
                  <h2 className="font-bold font-inter text-primaryOne">
                    Description:
                  </h2>
                  <h2 className="font-medium font-inter text-black">
                    {selectedProject.description}
                  </h2>
                </div>
                <div className="flex flex-row gap-4">
                  <h2 className="font-bold font-inter text-primaryOne">
                    Project Link :
                  </h2>
                  <h2 className="font-medium font-inter text-black">#</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-start gap-4">
              <div className="bg-primaryOne h-24 w-24 rounded-lg"></div>
              <div className="bg-primaryTwo h-24 w-24 rounded-lg"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
