"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  services: string[];
  budget: string;
  message: string;
}

const servicesList = [
  { id: "web", title: "Web Development", icon: "🌐" },
  { id: "mobile", title: "Mobile Apps", icon: "📱" },
  { id: "uiux", title: "UI/UX Design", icon: "🎨" },
  { id: "marketing", title: "Digital Marketing", icon: "📈" },
  { id: "branding", title: "Branding", icon: "✨" },
  { id: "ai", title: "AI Integration", icon: "🤖" },
  { id: "seo", title: "SEO", icon: "🔍" },
  { id: "content", title: "Content", icon: "✍️" },
];

const budgetRanges = [
  "Below $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

export default function GetAQuotePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    services: [],
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const time = new Date().toLocaleString();
      await emailjs.send(
        "service_ozv8srd",
        "template_xpcr7xc",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: formData.services.join(", "),
          budget: formData.budget,
          message: formData.message,
          time: time,
        },
        "pZlt-k_XIMYLNGSxE"
      );
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("There was an error sending your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* Universal Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 pt-32 lg:pt-48 pb-32">
        <section className="container max-w-6xl mx-auto px-8">
          
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sidebar Title */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3 space-y-8"
            >
               <div className="space-y-4">
                  <h6 className="text-primaryOne font-bold uppercase tracking-[0.4em] text-xs">Collaboration</h6>
                  <h1 className="text-5xl md:text-7xl font-mina font-bold leading-tight">
                    Start Your <br />
                    <span className="italic text-primaryOne drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]">Masterpiece.</span>
                  </h1>
               </div>
               <p className="text-gray-400 text-lg font-inter leading-relaxed max-w-md">
                 Fill out the details of your vision, and our masterminds will engineer a path to digital dominance.
               </p>
               
               {/* Progress Indicator */}
               <div className="flex gap-2 pt-8">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= s ? 'bg-primaryOne shadow-[0_0_10px_#ff0000]' : 'bg-white/10'}`} 
                    />
                  ))}
               </div>
            </motion.div>

            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:w-2/3"
            >
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl text-center space-y-8"
                >
                  <div className="w-20 h-20 bg-primaryOne rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(255,0,0,0.5)]">
                    <span className="text-4xl text-white">✓</span>
                  </div>
                  <h2 className="text-4xl font-mina font-bold">Transmission Received.</h2>
                  <p className="text-gray-400 text-lg font-inter">
                    Your request has been delivered to our masterminds. Expect a response within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white transition-all"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-2xl font-mina font-bold">Which services are you interested in?</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {servicesList.map((service) => (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => toggleService(service.title)}
                              className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col items-center gap-4 ${
                                formData.services.includes(service.title)
                                  ? 'bg-primaryOne/20 border-primaryOne shadow-[0_0_20px_rgba(255,0,0,0.2)]'
                                  : 'bg-white/5 border-white/10 hover:border-white/30'
                              }`}
                            >
                              <span className="text-3xl">{service.icon}</span>
                              <span className="text-xs font-bold uppercase tracking-widest text-center">{service.title}</span>
                            </button>
                          ))}
                        </div>
                        <div className="pt-8">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            disabled={formData.services.length === 0}
                            className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black transition-all"
                          >
                            Next: Project Details
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-2xl font-mina font-bold">Tell us about your project.</h3>
                        <div className="space-y-6">
                           <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Description</label>
                              <textarea
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                placeholder="Describe your vision, goals, and any specific requirements..."
                                className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-primaryOne focus:outline-none transition-all resize-none text-lg font-inter"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Estimated Budget</label>
                              <div className="flex flex-wrap gap-3">
                                {budgetRanges.map((range) => (
                                  <button
                                    key={range}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, budget: range }))}
                                    className={`px-6 py-3 rounded-full border text-sm transition-all ${
                                      formData.budget === range
                                        ? 'bg-primaryOne border-primaryOne text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]'
                                        : 'bg-white/5 border-white/10 hover:border-white/30 text-gray-400'
                                    }`}
                                  >
                                    {range}
                                  </button>
                                ))}
                              </div>
                           </div>
                        </div>
                        <div className="flex gap-4 pt-8">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            disabled={!formData.message || !formData.budget}
                            className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black transition-all"
                          >
                            Next: Contact Info
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-2xl font-mina font-bold">How can we reach you?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                              <input
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Mastermind Name"
                                className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-primaryOne focus:outline-none transition-all font-inter"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                              <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="you@visionary.com"
                                className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-primaryOne focus:outline-none transition-all font-inter"
                              />
                           </div>
                           <div className="space-y-2 md:col-span-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                              <input
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder="+255 000 000 000"
                                className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 focus:border-primaryOne focus:outline-none transition-all font-inter"
                              />
                           </div>
                        </div>
                        <div className="flex gap-4 pt-8">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-all font-mina"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-primaryOne hover:text-white disabled:opacity-50 transition-all font-mina uppercase tracking-widest"
                          >
                            {loading ? "Transmitting..." : "Send Request"}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
