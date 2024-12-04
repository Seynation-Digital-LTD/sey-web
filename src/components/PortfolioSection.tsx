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
  return (
    <div>
      <div className="text-center">
        <h6 className="font-mina font-bold mt-10 mb-4">Check our Portfolio</h6>
        <p className="text-base text-gray-600 font-inter">
          Masterpieces by the Masters
        </p>
      </div>
      <div className="port-buttons flex flex-row gap-4 justify-center items-center p-6">
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
    </div>
  );
};
