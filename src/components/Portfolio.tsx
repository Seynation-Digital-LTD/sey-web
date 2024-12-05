"use client";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import bg from "../app/assets/images/bg.jpeg";

export const Portfolio = () => {
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
  ];

  return (
    <div className="flex flex-col">
      <PortfolioItem divItem={upperPortfolioSection} from={0} to={"-100%"} />
      <PortfolioItem divItem={lowerPortfolioSection} from={"-100%"} to={0} />
    </div>
  );
};
