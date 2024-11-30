const ctaContent = [
  {
    id: 1,
    description1: "We don’t just complete projects; we engineer revolutions",
    image: "",
  },
  {
    id: 2,
    description2: "Every project is a masterpiece in progress.",
    image: "",
  },
  {
    id: 3,
    description3: "Let’s Create the Future Together.",
    image: "",
  },
  {
    id: 4,
    description4: "We're really the Masterminds.",
    image: "",
  },
];
export const CtaSection = () => {
  return (
    <div className="flex justify-center items-start mt-16">
      <div className="flex flex-col items-center justify-center bg-gradient-to-br  from-neutralFive neutralSix to-neutralSix w-4/5 h-[180px] rounded-md">
        {ctaContent.map((item) => (
          <h4 className="text-white font-inter">{item.description3}</h4>
        ))}
      </div>
    </div>
  );
};

export const CtaSection2 = () => {
  return (
    <div className="flex justify-center items-start mt-16">
      <div className="flex flex-col items-center justify-center bg-gradient-to-br  from-neutralFive neutralSix to-neutralSix w-4/5 h-[180px] rounded-md">
        {ctaContent.map((item) => (
          <h4 className="text-white font-inter">{item.description2}</h4>
        ))}
      </div>
    </div>
  );
};

export const CtaSection3 = () => {
  return (
    <div className="flex justify-center items-start mt-16">
      <div className="flex flex-col items-center justify-center bg-gradient-to-br  from-neutralFive neutralSix to-neutralSix w-4/5 h-[180px] rounded-md">
        {ctaContent.map((item) => (
          <h4 className="text-white font-inter">{item.description3}</h4>
        ))}
      </div>
    </div>
  );
};

export const CtaSection4= () => {
  return (
    <div className="flex justify-center items-start mt-16">
      <div className="flex flex-col items-center justify-center bg-gradient-to-br  from-neutralFive neutralSix to-neutralSix w-4/5 h-[180px] rounded-md">
        {ctaContent.map((item) => (
          <h4 className="text-white font-inter">{item.description4}</h4>
        ))}
      </div>
    </div>
  );
};
