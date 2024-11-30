export const ServicesSection = () => {
    const servicesData = [
      {
        id: 1,
        title: "Web Development",
        description:
          "Masterminding every step of your digital journey, from small business websites to large-scale website, we provide expertise in web development.",
        image1: "",
        image2:"",
      },
      {
        id: 2,
        title: "Mobile App Development",
        description:
          "From small business applications to large-scale e-commerce apps, we provide expertise in mobile app development.",
          image1: "",
          image2:"",
      },
      {
        id: 3,
        title: "Digital Marketing",
        description:
          "From social media marketing to search engine optimization, we provide expertise in digital marketing.",
          image1: "",
          image2:"",
      },
      {
        id: 4,
        title: "E-Commerce Solutions",
        description:
          "From small business e-commerce to large-scale e-commerce platforms, we provide expertise in e-commerce solutions.",
        image1: "",
        image2: "",
      },
      {
        id: 5,
        title: "Branding & Identity",
        description:
          "From small business branding to large-scale branding, we provide expertise in branding & identity.",
        image1: "",
        image2: "",
      },
      {
        id: 6,
        title: "Content Marketing",
        description:
          "From social media content marketing to search engine optimization, we provide expertise in content marketing.",
        image1: "",
        image2: "",
      }
    ];
  
    return (
      <div className="flex flex-col">
        <div className="text-center">
          <h6 className="font-mina font-bold mt-10 mb-4">Services We Offer.</h6>
          <p className="text-base text-gray-600 font-inter">
            Masterminding Every Step of Your Digital Journey
          </p>
        </div>
  
        <div className="flex flex-row justify-center items-center flex-wrap gap-4 mt-10">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-neutralFive to-neutralSix w-[395px] h-[245px] rounded-[20px] p-7 hover:bg-gradient-to-br hover:from-[#BA3521] hover:to-secondaryFour hover:cursor-pointer"
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-start gap-3">
                  <img src={item.image1} alt={item.title} className="w-10 h-10" />
                  <h3 className="text-2xl font-bold font-inter text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-row justify-between items-center gap-4">
                  <p className="text-base text-white font-inter flex-1">
                    {item.description}
                  </p>
                  <img src={item.image2} alt="" className="w-16 h-16 object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  