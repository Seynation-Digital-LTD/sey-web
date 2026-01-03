"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("all");
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  // Ref for horizontal scrolling interaction
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle category button click
  const handleCategoryClick = (categoryId: string) => {
    setSelectedPortfolio(categoryId);
  };

  // Open the popup modal
  const handlePortfolioClick = (project: any) => {
    setSelectedProject(project);
    setPopupVisible(true);
  };

  // Close the popup modal
  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProject(null);
  };

  // Helper to scroll horizontally with wheel (for desktop usability)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onWheel = (e: WheelEvent) => {
      // If we are strictly vertical scrolling, we might not want to hijack.
      // But for a horizontal gallery, mapping vertical scroll to horizontal scroll is often expected.
      // However, to keep it "native", we can leave it to Shift+Scroll or Touchpad.
      // If the user insists on vertical wheel scrolling:
      if (e.deltaY !== 0) {
        // e.preventDefault(); // Uncomment to force hijack
        // slider.scrollLeft += e.deltaY;
      }
    };
    // slider.addEventListener("wheel", onWheel, { passive: false });
    // return () => slider.removeEventListener("wheel", onWheel);
  }, []);

  // Portfolio Data
  const portfolios = [
    {
      slug: "website",
      title: "Websites",
      name: "Oltau Safaris Website",
      url: "oltausafaris.com",
      description: "A Website for a Tourism Company in Arusha - Tanzania.",
      image: "/assets/oltau1.png",
    },
    {
      slug: "website",
      title: "Websites",
      name: "SUMOSA Energies Website",
      url: "https://www.sumosa.co.tz",
      description:
        "A Website for Filling Station (Gas Station) located in Sikonge - Tabora.",
      image: "/assets/sumosa.jpg",
    },
    {
      slug: "website",
      title: "Website",
      name: "Sawasawa Safaris Website.",
      url: "https://www.sawasawasafaris.co.tz",
      description: "A Website for a Toursim Company in Arusha - Tanzania.",
      image: "/assets/sawasawaaa.png",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Tanzania Enterprenuership Federation Website.",
      url: "https://www.tzef.org/",
      description:
        "A Website for TZEF Organization that helps to promote Enterprenuers in Tanzania by providing business insight.",
      image: "/assets/tef1.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "St. Aggrey Health College.",
      url: "https://www.staggreyhealth.ac.tz",
      description:
        "A Website for St. Aggrey Health College located in Mbeya - Tanzania.",
      image: "/assets/stagrey2.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Mbeya Baby Blue Group Website",
      url: "https://www.mbeyababybluegroup.or.tz",
      description:
        "A Website for a Local Community Group in Mbeya, Tanzania (Mbeya Baby Blue Group).",
      image: "/assets/mbbb.png",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Arusha Jua Website",
      url: "https://arushajua.wordpress.com/",
      description:
        "A Website for a Local Tourists Hostel in Arusha - Tanzania.",
      image: "/assets/arj.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Kujengana Organization Website",
      url: "https://www.kujengana.org",
      description:
        "Providing education, healthcare, and skills to promote gender equality and sustainable community development.",
      image: "/assets/kujengana1.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Cube Nation Website",
      url: "https://www.kujengana.org",
      description:
        "A Website for Cube-nation which is a premier destination wedding company.",
      image: "/assets/cube.jpg",
    },
    {
      slug: "website",
      title: "Websites",
      name: "Orchard Tanzania",
      url: "http://orchardtz.com/",
      description:
        "A Website for Orchard Tanzania which sells pure avaocado based products like Hair oil and skin oi.",
      image: "/assets/avocado_logo.png",
    },
    {
      slug: "website",
      title: "Websites",
      name: "HugNbox",
      url: "https://www.hugnbox.com/",
      description:
        "A Website for HunNbox which sales avocado.",
      image: "/assets/avocado_logo.png",
    },
    {
      slug: "apps",
      title: "Apps",
      name: "AI Crop Disease Detector App (AddApp)",
      url: "www.seynation.co/portfolio",
      description:
        "An AI/ML mobile app for detection fo diseases found in Crops.",
      image: "/assets/addapp2.jpg",
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Winga POS",
      url: "www.seynation.co/portfolio",
      description: "POS software for retail chains",
      image: "/assets/winga1.png",
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Live Events Attendee Engagement Platform",
      url: "www.seynation.co/portfolio",
      description: "Developed to enhance live events for attendee during live interactions.",
      image: "/assets/live1.png",
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "System build for electrical energy company to monitor and manage energy consumptions.",
      image: "/assets/dynamic.png",
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Peace Training Center SIMS",
      url: "https://www.seynation.co/portfolio",
      description: "Official Students Management System for Peace Training Center with Live Teaching sessions",
      image: "/assets/peace.png",
    },
    
    {
      slug: "uiux",
      title: "UI/UX Designs",
      name: "AI Crop Disease Detector App (AddApp)",
      url: "www.seynation.co/portfolio",
      description:
        "UI for an AI/ML mobile app for detection fo diseases found in Crops.",
      image: "/assets/addapp2.jpg",
    },
    {
      slug: "graphics",
      title: "Graphics",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Event poster designs for concerts",
      image: "/assets/about2.jpg",
    },
    {
      slug: "marketing",
      title: "Marketing & Advertising",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Digital ad campaign for e-commerce",
      image: "/assets/digitalmarketing.png",
    },
    {
      slug: "socialmedia",
      title: "Social Media",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Instagram branding for influencers",
      image: "/assets/socialmedia.png",
    },
  ];

  // Get unique categories from portfolio items
  const uniqueCategories = [
    { id: "all", title: "All" },
    ...Array.from(
      new Map(
        portfolios.map((item) => [
          item.slug,
          { id: item.slug, title: item.title },
        ])
      ).values()
    ),
  ];

  // Filter portfolios
  const filteredPortfolios =
    selectedPortfolio === "all"
      ? portfolios
      : portfolios.filter((item) => item.slug === selectedPortfolio);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/20 rounded-full blur-[150px] mix-blend-screen opacity-60 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-primaryThree/5 rounded-full blur-[180px] opacity-30" />
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="px-4 pt-44 pb-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mina font-extrabold text-4xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-400 drop-shadow-2xl"
            >
              Digital Masterpieces
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-inter text-md lg:text-lg text-gray-400 max-w-2xl leading-relaxed"
            >
              Explore our curated gallery of innovations.
            </motion.p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center pb-8 px-4">
          <div className="flex flex-wrap gap-3 justify-center bg-white/5 backdrop-blur-2xl p-2 rounded-2xl border border-white/10 shadow-2xl ring-1 ring-white/5">
            {uniqueCategories.map((item) => (
              <button
                key={item.id}
                onClick={() => handleCategoryClick(item.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 tracking-wide ${
                  selectedPortfolio === item.id
                    ? "bg-primaryOne text-white shadow-[0_0_20px_rgba(128,0,0,0.4)] scale-105"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Cinema Reel (Horizontal Scroll Snap) */}
        <div className="flex-grow flex flex-col justify-center pb-20">
           <div 
             ref={sliderRef}
             className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-[10vw] pb-10 pt-4 cursor-grab active:cursor-grabbing scrollbar-hide"
             style={{ scrollBehavior: 'smooth' }}
           >
              {filteredPortfolios.map((item, index) => (
                <PortfolioCard 
                  key={index} 
                  item={item} 
                  onClick={() => handlePortfolioClick(item)} 
                />
              ))}
              {/* Spacer at the end */}
              <div className="min-w-[10vw] shrink-0" />
           </div>
           
           <div className="text-center text-gray-500 font-light tracking-widest uppercase text-xs mt-4 animate-pulse">
              Drag or Scroll Horizontally &larr; &rarr;
           </div>
        </div>
      </div>

      {/* Popup Modal */}
      {popupVisible && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col"
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/10 rounded-full hover:bg-black/20 transition-colors pointer-cursor"
              onClick={closePopup}
              aria-label="Close"
            >
              <span className="text-2xl">&times;</span>
            </button>

            <div className="overflow-y-auto p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-6">
                <div className="aspect-video w-full relative rounded-xl overflow-hidden shadow-lg bg-gray-100">
                  {selectedProject.image && (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                {/* Additional Images Grid if available */}
                {selectedProject.images && (
                   <div className="grid grid-cols-3 gap-2">
                      {selectedProject.images.map((img: string, idx: number) => (
                        <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                           <Image src={img} alt="Gallery" fill className="object-cover" />
                        </div>
                      ))}
                   </div>
                )}
               </div>

               <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <span className="text-sm font-bold tracking-wider text-primaryOne/60 uppercase">{selectedProject.title}</span>
                    <h2 className="text-3xl font-extrabold text-primaryOne mt-1">
                      {selectedProject.name}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>

                  <a
                    href={
                      selectedProject.url?.startsWith("http")
                        ? selectedProject.url
                        : `https://${selectedProject.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primaryOne text-white font-bold rounded-xl hover:bg-primaryOne/90 transition-all transform hover:scale-105"
                  >
                    Visit Project
                  </a>
               </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

const PortfolioCard = ({ item, onClick }: { item: any; onClick: () => void }) => {
  return (
    <div className="snap-center shrink-0 flex items-center">
      <motion.div
        whileHover={{ scale: 1.02, y: -10 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="group relative h-[50vh] w-[80vw] md:w-[60vh] cursor-pointer overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl transition-all"
      >
        <div className="absolute inset-0 z-0">
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 bg-primaryOne/80 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide mb-3 shadow-lg border border-primaryOne/50">
              {item.title}
          </span>
          <h3 className="text-3xl lg:text-4xl font-mina font-bold mb-2 leading-tight drop-shadow-lg">{item.name}</h3>
          <p className="text-gray-300 line-clamp-2 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
