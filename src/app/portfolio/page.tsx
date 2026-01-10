"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PortfolioItem {
  slug: string;
  title: string;
  name: string;
  url: string;
  description: string;
  image: string;
  images?: string[];
}

export default function PortfolioPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("all");
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [viewMode, setViewMode] = useState<"gallery" | "live">("gallery");
  
  // Ref for horizontal scrolling interaction
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle category button click
  const handleCategoryClick = (categoryId: string) => {
    setSelectedPortfolio(categoryId);
  };

  // Open the popup modal
  const handlePortfolioClick = (project: PortfolioItem) => {
    setSelectedProject(project);
    // Default to gallery view to ensure content is visible (many sites block iframes)
    setViewMode("gallery");
    setPopupVisible(true);
  };

  // Close the popup modal
  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProject(null);
    setViewMode("gallery");
  };

  // Helper to scroll horizontally with wheel (for desktop usability)
  useEffect(() => {
    // Scroll handling placeholder
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
      images: ["/assets/oltau1.png", "/assets/about.jpg", "/assets/about2.jpg"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "SUMOSA Energies Website",
      url: "https://www.sumosa.co.tz",
      description:
        "A Website for Filling Station (Gas Station) located in Sikonge - Tabora.",
      image: "/assets/sumosa.jpg",
      images: ["/assets/sumosa.jpg", "/assets/sumosa.png", "/assets/sumosalogo01.png"],
    },
    {
      slug: "website",
      title: "Website",
      name: "Sawasawa Safaris Website.",
      url: "https://www.sawasawasafaris.co.tz",
      description: "A Website for a Toursim Company in Arusha - Tanzania.",
      image: "/assets/sawasawaaa.png",
      images: ["/assets/sawasawaaa.png", "/assets/hero1.png", "/assets/hero.jpeg"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "Tanzania Enterprenuership Federation Website.",
      url: "https://www.tzef.org/",
      description:
        "A Website for TZEF Organization that helps to promote Enterprenuers in Tanzania by providing business insight.",
      image: "/assets/tef1.jpg",
      images: ["/assets/tef1.jpg", "/assets/about.jpg", "/assets/hero.jpeg"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "St. Aggrey Health College.",
      url: "https://www.staggreyhealth.ac.tz",
      description:
        "A Website for St. Aggrey Health College located in Mbeya - Tanzania.",
      image: "/assets/stagrey2.jpg",
      images: ["/assets/stagrey2.jpg", "/assets/stagrey.jpg", "/assets/about2.jpg"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "Mbeya Baby Blue Group Website",
      url: "https://www.mbeyababybluegroup.or.tz",
      description:
        "A Website for a Local Community Group in Mbeya, Tanzania (Mbeya Baby Blue Group).",
      image: "/assets/mbbb.png",
      images: ["/assets/mbbb.png", "/assets/about3.jpg", "/assets/hero1.png"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "Arusha Jua Website",
      url: "https://arushajua.wordpress.com/",
      description:
        "A Website for a Local Tourists Hostel in Arusha - Tanzania.",
      image: "/assets/arj.jpg",
      images: ["/assets/arj.jpg", "/assets/arushajua.png", "/assets/arushajua2.png"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "Kujengana Organization Website",
      url: "https://www.kujengana.org",
      description:
        "Providing education, healthcare, and skills to promote gender equality and sustainable community development.",
      image: "/assets/kujengana1.jpg",
      images: ["/assets/kujengana1.jpg", "/assets/kujengana2.png", "/assets/hero.jpeg"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "Cube Nation Website",
      url: "https://www.cubenation.co.tz", 
      description:
        "A Website for Cube-nation which is a premier destination wedding company.",
      image: "/assets/cube.jpg",
      images: ["/assets/cube.jpg", "/assets/about.jpg", "/assets/hero1.png"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "Orchard Tanzania",
      url: "http://orchardtz.com/",
      description:
        "A Website for Orchard Tanzania which sells pure avaocado based products like Hair oil and skin oi.",
      image: "/assets/avocado_logo.png",
      images: ["/assets/avocado_logo.png", "/assets/avocado_logo_brand.png", "/assets/hero.jpeg"],
    },
    {
      slug: "website",
      title: "Websites",
      name: "HugNbox",
      url: "https://www.hugnbox.com/",
      description:
        "A Website for HunNbox which sales avocado.",
      image: "/assets/avocado_logo.png",
      images: ["/assets/avocado_logo.png", "/assets/avocado logo.png", "/assets/hero.jpeg"],
    },
    {
      slug: "apps",
      title: "Apps",
      name: "AI Crop Disease Detector App (AddApp)",
      url: "www.seynation.co/portfolio",
      description:
        "An AI/ML mobile app for detection fo diseases found in Crops.",
      image: "/assets/addapp2.jpg",
      images: ["/assets/addapp2.jpg", "/assets/addapp.jpg", "/assets/hero1.png"],
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Winga POS",
      url: "www.seynation.co/portfolio",
      description: "POS software for retail chains",
      image: "/assets/winga1.png",
      images: ["/assets/winga1.png", "/assets/about.jpg", "/assets/hero.jpeg"],
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Live Events Attendee Engagement Platform",
      url: "www.seynation.co/portfolio",
      description: "Developed to enhance live events for attendee during live interactions.",
      image: "/assets/live1.png",
      images: ["/assets/live1.png", "/assets/about2.jpg", "/assets/hero1.png"],
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "System build for electrical energy company to monitor and manage energy consumptions.",
      image: "/assets/dynamic.png",
      images: ["/assets/dynamic.png", "/assets/energy1.png", "/assets/about3.jpg"],
    },
    {
      slug: "systems",
      title: "Systems/Software",
      name: "Peace Training Center SIMS",
      url: "https://www.seynation.co/portfolio",
      description: "Official Students Management System for Peace Training Center with Live Teaching sessions",
      image: "/assets/peace.png",
      images: ["/assets/peace.png", "/assets/about.jpg", "/assets/hero.jpeg"],
    },
    
    {
      slug: "uiux",
      title: "UI/UX Designs",
      name: "AI Crop Disease Detector App (AddApp)",
      url: "www.seynation.co/portfolio",
      description:
        "UI for an AI/ML mobile app for detection fo diseases found in Crops.",
      image: "/assets/addapp2.jpg",
      images: ["/assets/addapp2.jpg", "/assets/addapp.jpg", "/assets/hero1.png"],
    },
    {
      slug: "graphics",
      title: "Graphics",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Event poster designs for concerts",
      image: "/assets/about2.jpg",
      images: ["/assets/about2.jpg", "/assets/hero.jpeg", "/assets/hero1.png"],
    },
    {
      slug: "marketing",
      title: "Marketing & Advertising",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Digital ad campaign for e-commerce",
      image: "/assets/digitalmarketing.png",
      images: ["/assets/digitalmarketing.png", "/assets/about.jpg", "/assets/hero1.png"],
    },
    {
      slug: "socialmedia",
      title: "Social Media",
      name: "Dynamic Technology Electrical Energy Monitoring Platform",
      url: "www.seynation.co/portfolio",
      description: "Instagram branding for influencers",
      image: "/assets/socialmedia.png",
      images: ["/assets/socialmedia.png", "/assets/about3.jpg", "/assets/hero.jpeg"],
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

        {/* Cinema Reel (Horizontal Scroll Snap) - 2 Rows */}
        <div className="flex-grow flex flex-col justify-center pb-10">
           <div 
             ref={sliderRef}
             className="grid grid-rows-2 grid-flow-col gap-6 px-[5vw] py-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
             style={{ scrollBehavior: 'smooth' }}
           >
              {filteredPortfolios.map((item, index) => (
                <PortfolioCard 
                  key={index} 
                  item={item} 
                  onClick={() => handlePortfolioClick(item)} 
                />
              ))}
              {/* Spacer is handled by padding in grid usually, but an empty div can help stretch if needed */}
              <div className="w-[5vw]" /> 
           </div>
           
           <div className="text-center text-gray-500 font-light tracking-widest uppercase text-xs mt-2 animate-pulse">
              Drag or Scroll Horizontally &larr; &rarr;
           </div>
        </div>
      </div>

      {/* Redesigned Popup Modal */}
      {popupVisible && selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50 p-4 lg:p-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-[#0A0A0A] w-full max-w-7xl max-h-[90vh] min-h-[60vh] rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row border border-white/10"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-white text-white hover:text-black rounded-full border border-white/10 transition-all backdrop-blur-md"
              onClick={closePopup}
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Left/Top: Media Viewer (Image or Iframe) */}
            <div className="flex-1 lg:w-[65%] h-[50vh] lg:h-full bg-black relative group border-r border-white/5">
               {viewMode === "live" && selectedProject.url && !selectedProject.url.includes("seynation.co") ? (
                  <iframe 
                    src={selectedProject.url.startsWith("http") ? selectedProject.url : `https://${selectedProject.url}`}
                    className="w-full h-full border-0"
                    title={selectedProject.name}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
               ) : (
                  <div className="relative w-full h-full">
                     <Image 
                       src={selectedProject.image} 
                       alt={selectedProject.name} 
                       fill 
                       className="object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50" />
                  </div>
               )}
               
               {/* Toggle Switch (Only if valid URL exists) */}
               {!selectedProject.url.includes("seynation.co") && (
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 z-20">
                    <button 
                      onClick={() => setViewMode("gallery")}
                      className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${viewMode === "gallery" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
                    >
                      Gallery
                    </button>
                    <button 
                      onClick={() => setViewMode("live")}
                      className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${viewMode === "live" ? "bg-primaryOne text-white" : "text-gray-400 hover:text-white"}`}
                    >
                      Live Preview
                    </button>
                 </div>
               )}
            </div>

            {/* Right/Bottom: Details */}
            <div className="flex-1 lg:w-[35%] h-full overflow-y-auto p-8 lg:p-12 border-l border-white/5 bg-[#0A0A0A]">
               <div className="h-full flex flex-col">
                  <div>
                     <span className="inline-block px-3 py-1 bg-primaryOne/10 text-primaryOne border border-primaryOne/20 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                        {selectedProject.title}
                     </span>
                     <h2 className="text-3xl lg:text-4xl font-mina font-bold text-white leading-tight">
                        {selectedProject.name}
                     </h2>
                  </div>

                  <div className="space-y-6 flex-grow py-8">
                     <p className="text-gray-400 leading-relaxed text-lg font-light">
                        {selectedProject.description}
                     </p>
                     
                     {/* Information Note */}
                     {viewMode === "live" && (
                       <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400 font-inter">
                          <p>
                            <span className="text-primaryOne font-bold">Note:</span> Some external websites may block this preview for security. 
                            If content is missing, please toggle to <b>Gallery</b> or click <b>"Visit Live Project"</b> below.
                          </p>
                       </div>
                     )}

                     {viewMode === "gallery" && selectedProject.images && (
                        <div className="grid grid-cols-3 gap-3 pt-4">
                           {selectedProject.images.map((img, idx) => (
                              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:opacity-80 transition-opacity">
                                 <Image src={img} alt="Gallery" fill className="object-cover" />
                              </div>
                           ))}
                        </div>
                     )}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                     <a
                        href={
                           selectedProject.url?.startsWith("http")
                           ? selectedProject.url
                           : `https://${selectedProject.url}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-primaryOne text-white font-bold rounded-xl hover:bg-primaryOne/90 transition-all transform hover:scale-[1.02] shadow-lg shadow-primaryOne/20"
                     >
                        <span>Visit Live Project</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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

const PortfolioCard = ({ item, onClick }: { item: PortfolioItem; onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative h-[280px] w-[320px] md:h-[320px] md:w-[450px] cursor-pointer overflow-hidden rounded-[1.5rem] bg-white/5 border border-white/10 shadow-xl transition-all snap-center"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-2 py-0.5 bg-primaryOne/80 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wide mb-2 shadow-lg border border-primaryOne/50">
            {item.title}
        </span>
        <h3 className="text-xl md:text-2xl font-mina font-bold mb-1 leading-tight drop-shadow-lg truncate">{item.name}</h3>
      </div>
    </motion.div>
  );
};
