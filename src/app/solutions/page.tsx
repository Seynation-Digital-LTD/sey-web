"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { bg } from "../../app/index.js";

const solutionsData = [
  {
    id: "strategy",
    title: "Digital Strategy & Consulting",
    description: "Success begins with a plan. We analyze, strategize, and map out the digital journey that transforms your brand into a powerhouse. From market insights to tailored solutions, we ensure every step leads to brilliance.",
    video: "/assets/smedia1.mp4",
    offerings: ["Brand Strategy", "Market Research", "Performance Optimization", "Digital Audits"],
    align: "left"
  },
  {
    id: "branding",
    title: "Branding & Identity Design",
    description: "Your brand is more than a logo—it's your story, your values, and your promise to the world. We create identities that captivate, resonate, and leave a lasting impression on your audience.",
    video: "/assets/smedia4.mp4",
    offerings: ["Logo Systems", "Visual Identity", "Brand Guidelines", "Tone of Voice"],
    align: "right"
  },
  {
    id: "dev",
    title: "Web & App Development",
    description: "From sleek websites to powerful apps, we build digital experiences that captivate and convert. Seamlessly blending functionality with aesthetics, our solutions are engineered for peak performance.",
    video: "/assets/web2.mp4",
    offerings: ["Custom Web Apps", "iOS & Android", "E-Commerce", "API Architectures"],
    align: "left"
  },
  {
    id: "content",
    title: "Creative Content & Marketing",
    description: "Content that speaks. Campaigns that convert. We create stories and strategies that amplify your reach and connect you with your audience like never before through data-driven creativity.",
    video: "/assets/smedia3.mp4",
    offerings: ["Social Strategy", "Video Production", "Paid Advertising", "Influencer Growth"],
    align: "right"
  },
  {
    id: "uiux",
    title: "UI/UX Experience Design",
    description: "Exceptional design isn't just seen; it's felt. We craft user experiences that are intuitive, engaging, and unforgettable, ensuring your audience keeps coming back for more.",
    image: "/assets/ux.jpg",
    offerings: ["Interface Design", "User Research", "Prototyping", "Design Systems"],
    align: "left"
  },
  {
    id: "tech",
    title: "Emerging Tech Solutions",
    description: "Stay ahead of the curve with cutting-edge technologies. From AI-powered innovations to advanced automation, we empower you to lead in a rapidly evolving tech-driven world.",
    image: "/assets/emerge.jpg",
    offerings: ["AI Integration", "Chatbot Dev", "Data Analytics", "Automation"],
    align: "right"
  }
];

export default function Solutions() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 pt-32 lg:pt-48">
        
        {/* Solutions Hero */}
        <section className="container max-w-7xl mx-auto px-8 mb-32">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl space-y-8"
          >
             <h6 className="text-primaryOne font-bold tracking-[0.4em] uppercase text-xs">Our Expertise</h6>
             <h1 className="text-6xl lg:text-8xl font-mina font-bold leading-none">
               Architecting <br />
               <span className="italic text-primaryOne">Possibilities.</span>
             </h1>
             <p className="text-gray-400 text-xl lg:text-2xl font-inter max-w-2xl leading-relaxed">
               We build bespoke digital, creative, and marketing solutions that empower ambitious brands to dominate their industries.
             </p>
          </motion.div>
        </section>

        {/* Vertical Experience Scroller */}
        <div className="space-y-48 pb-48 px-4 md:px-8">
          {solutionsData.map((item, index) => (
            <section 
              key={item.id}
              className={`container max-w-7xl mx-auto flex flex-col ${item.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}
            >
              {/* Visual Component */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: item.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
                  {item.video ? (
                    <video 
                      src={item.video} 
                      autoPlay loop muted playsInline 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    />
                  ) : (
                    <Image 
                      src={item.image || bg} 
                      alt={item.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                 <span className="text-primaryOne font-bold text-5xl opacity-10 font-mina">0{index + 1}</span>
                 <h2 className="text-4xl lg:text-5xl font-mina font-bold leading-tight">{item.title}</h2>
                 <p className="text-gray-400 text-lg leading-relaxed font-inter">
                   {item.description}
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4 pt-4">
                    {item.offerings.map((offering) => (
                      <div key={offering} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-primaryOne group-hover:scale-150 transition-transform" />
                        <span className="text-sm font-bold tracking-wide text-gray-300 uppercase">{offering}</span>
                      </div>
                    ))}
                 </div>

                 <button className="px-8 py-3 rounded-full border border-white/20 hover:border-primaryOne hover:bg-primaryOne/10 transition-all font-bold text-sm">
                   Explore Solution
                 </button>
              </motion.div>
            </section>
          ))}
        </div>

        {/* Closing CTA Section */}
        <section className="container max-w-6xl mx-auto px-8 py-32 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-20 rounded-[4rem] bg-gradient-to-br from-primaryOne/20 via-primaryThree/5 to-transparent border border-white/10 relative overflow-hidden"
            >
               <h2 className="text-5xl lg:text-6xl font-mina font-bold mb-8">Ready to Scale <br /> <span className="italic text-primaryOne">Your Legacy?</span></h2>
               <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
                 Brilliant ideas deserve a mastermind approach. Let&apos;s engineer the next phase of your brand together.
               </p>
               <button className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-2xl">
                 Start a Project
               </button>
            </motion.div>
        </section>

      </div>
    </div>
  );
}
