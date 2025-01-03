import React from "react";
import PatnerItem from "./PatnerItem";

const Patners = () => {
  const upperPatners = [
    "/assets/ghalalogo2.png",
    "/assets/sarufilogo.png",
    "/assets/fabres.png",
    "/assets/sumosa.png",
    "/assets/sadakalawe.png",
  ];

  const lowerPatners = [
    "/assets/seynationlogo.png",
    "/assets/sadakalawe.png",
    "/assets/ghalalogo2.png",
    "/assets/sarufilogo.png",
    "/assets/fabres.png",
    "/assets/sumosa.png",
    "/assets/ghalalogo.png",
    "/assets/ghalalogo.png",
    "/assets/sarufilogo.png",
    "/assets/fabres.png",
    "/assets/sumosa.png",
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full  py-12">
      <h6 className="font-mina font-bold text-lg md:text-2xl text-gray-800 mt-2 mb-4">
        Strategic Partners
      </h6>
      <div className="w-full">
        <PatnerItem images={upperPatners} from={0} to={"-100%"} />
      </div>
      <div className="w-full mt-6">
        <PatnerItem images={lowerPatners} from={"-100%"} to={0} />
      </div>
    </div>
  );
};

export default Patners;
