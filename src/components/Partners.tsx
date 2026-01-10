import React from "react";
import PartnerItem from "./PartnerItem";

const Partners = () => {
  const upperPartners = [
    "/assets/ghalalogo2.png",
    "/assets/sarufilogo.png",
    "/assets/fabres.png",
    "/assets/sumosa.png",
    "/assets/festalive2.png",
    "/assets/sadakalawe.png",
    "/assets/mstara.png",
  ];

  const lowerPartners = [
    "/assets/kujengana2.png",
    "/assets/jm2.png",
    "/assets/arushajua2.png",
    "/assets/zion2.png",
    "/assets/jabe2.png",
    "/assets/intercity2.png",
    "/assets/msafiri2.png",
    "/assets/meja2.png",
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full py-16 bg-transparent border-y border-white/5 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-primaryOne/5 blur-[100px] pointer-events-none" />
        
      <h6 className="font-mina font-bold text-lg md:text-xl text-gray-500 tracking-[0.2em] uppercase mb-12 relative z-10">
        Trusted By Industry Leaders
      </h6>
      
      <div className="w-full relative z-10 opacity-70 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
        <PartnerItem images={upperPartners} from={0} to={"-100%"} />
      </div>
      <div className="w-full mt-8 relative z-10 opacity-70 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
        <PartnerItem images={lowerPartners} from={"-100%"} to={0} />
      </div>
    </div>
  );
};

export default Partners;
