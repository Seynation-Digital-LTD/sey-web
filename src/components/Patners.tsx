import React from "react";
import PatnerItem from "./PatnerItem";

const Patners = () => {
  const upperPatners = [
    "/assets/seynationlogo.png", // 1
    "/assets/sadakalawe.png", // 2
    "/assets/ghalalogo2.png", // 3
    "/assets/sarufilogo.png", // 4
    "/assets/fabres.png", // 5
    "/assets/sumosa.png", // 6
    "/assets/ghalalogo.png", // 7
    "/assets/ghalalogo.png", // 8
    "/assets/sarufilogo.png", // 9
    "/assets/fabres.png", // 10
    "/assets/sumosa.png", // 11
  ];

  const lowerPatners = [
    "/assets/seynationlogo.png", // 1
    "/assets/sadakalawe.png", // 2
    "/assets/ghalalogo2.png", // 3
    "/assets/sarufilogo.png", // 4
    "/assets/fabres.png", // 5
    "/assets/sumosa.png", // 6
    "/assets/ghalalogo.png", // 7
    "/assets/ghalalogo.png", // 8
    "/assets/sarufilogo.png", // 9
    "/assets/fabres.png", // 10
    "/assets/sumosa.png", // 11
  ];

  return (
    <div className="flex flex-col justify-center items-center ">
      <h6 className="font-mina font-bold mt-16 mb-4">Strategic Patners</h6>
      <PatnerItem images={upperPatners} from={0} to={"-100%"} />
      <PatnerItem images={lowerPatners} from={"-100%"} to={0} />
    </div>
  );
};

export default Patners;