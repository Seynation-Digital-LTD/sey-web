import React from "react";
import PatnerItem from "./PatnerItem";

const Patners = () => {
  const upperPatners = [
    "/assets/ghalalogo2.png",
    "/assets/sarufilogo.png",
    "/assets/fabres.png",
    "/assets/sumosa.png",
    "/assets/festalive2.png",
    "/assets/sadakalawe.png",
    "/assets/mstara.png",
  ];

  const lowerPatners = [
    "/assets/kujengana2.png",
    "/assets/jm2.png",
    "assets/arushajua2.png",
    "/assets/zion2.png",
    "/assets/jabe2.png",
    "/assets/intercity2.png",
    "/assets/msafiri2.png",
    "/assets/meja2.png",
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
