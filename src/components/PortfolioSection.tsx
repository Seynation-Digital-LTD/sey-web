"use client";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import bg from "../app/assets/images/bg.jpeg";
export const PortfolioSection = () => {
  const portfolioSectionItems = [
    {
      id: 1,
      title: "Website",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      id: 2,
      title: "Apps",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      id: 3,
      title: "Systems / Software",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      id: 4,
      title: "UI/UX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      id: 5,
      title: "Graphics Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
    {
      id: 6,
      title: "Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
  ];
  
  const upperPortfolioSection = [
    {
      id: 1,
      title: "Portfolio Section 1",
      description: "Description 1",
      image: bg.src, // Convert imported image to string
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Section 2",
      description: "Description 2",
      image: bg.src,
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Section 3",
      description: "Description 3",
      image: bg.src,
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Section 4",
      description: "Description 4",
      image: bg.src,
      link: "#",
    },
    {
      id: 5,
      title: "Portfolio Section 5",
      description: "Description 5",
      image: "image5.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Portfolio Section 6",
      description: "Description 6",
      image: "image6.jpg",
      link: "#",
    },
    {
      id: 7,
      title: "Portfolio Section 7",
      description: "Description 7",
      image: "image7.jpg",
      link: "#",
    },
    {
      id: 8,
      title: "Portfolio Section 8",
      description: "Description 8",
      image: "image8.jpg",
      link: "#",
    },
  ];

  const lowerPortfolioSection = [
    {
      id: 9,
      title: "Portfolio Section 9",
      description: "Description 9",
      image: bg.src,
      link: "#",
    },
    {
      id: 10,
      title: "Portfolio Section 10",
      description: "Description 10",
      image: bg.src,
      link: "#",
    },
    {
      id: 11,
      title: "Portfolio Section 11",
      description: "Description 11",
      image: "image11.jpg",
      link: "#",
    },
    {
      id: 12,
      title: "Portfolio Section 12",
      description: "Description 12",
      image: "image12.jpg",
      link: "#",
    },
    {
      id: 11,
      title: "Portfolio Section 11",
      description: "Description 11",
      image: "image11.jpg",
      link: "#",
    },
    {
      id: 12,
      title: "Portfolio Section 12",
      description: "Description 12",
      image: "image12.jpg",
      link: "#",
    },
    {
      id: 11,
      title: "Portfolio Section 11",
      description: "Description 11",
      image: "image11.jpg",
      link: "#",
    },
    {
      id: 12,
      title: "Portfolio Section 12",
      description: "Description 12",
      image: "image12.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <div>
        <div className="text-center">
          <h6 className="font-mina font-bold mt-10 text-2xl">
            Check our Portfolio
          </h6>
          <p className="text-base text-gray-600 font-inter">
            Masterpieces by the Masters
          </p>
        </div>
        <div className="port-buttons flex flex-row gap-4 justify-center items-center p-6 mb-3">
          {portfolioSectionItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br  from-neutralTwo  to-neutralThree cursor-pointer
          hover:bg-gradient-to-br  hover:from-primaryOne hover:via-primarySix hover:to-primarySeven hover:cursor-pointer text-white p-2 pl-4 pr-4 rounded-xl"
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <PortfolioItem
            divItem={upperPortfolioSection}
            from={0}
            to={"-100%"}
          />
          <PortfolioItem
            divItem={lowerPortfolioSection}
            from={"-100%"}
            to={0}
          />
        </div>
      </div>
    </>
  );
};
