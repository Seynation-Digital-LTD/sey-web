"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// Service options
const services = [
  { id: "web-dev", name: "Web Development", icon: "💻", description: "Custom websites & web apps" },
  { id: "mobile-app", name: "Mobile Apps", icon: "📱", description: "iOS & Android applications" },
  { id: "branding", name: "Branding & Design", icon: "🎨", description: "Logo, identity & graphics" },
  { id: "marketing", name: "Digital Marketing", icon: "📈", description: "SEO, ads & social media" },
  { id: "ecommerce", name: "E-Commerce", icon: "🛒", description: "Online stores & platforms" },
  { id: "consulting", name: "Strategy & Consulting", icon: "💡", description: "Digital transformation" },
];

export default function GetQuotePage() {
  useEffect(() => {
    document.title = "Get a Quote | Seynation Digital";
  }, []);
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceNames = selectedServices.map(
      (id) => services.find((s) => s.id === id)?.name
    ).join(", ");

    const emailData = {
      to_name: "Seynation Team",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      services: serviceNames,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_ozv8srd",
        "template_xpcr7xc",
        emailData,
        "pZlt-k_XIMYLNGSxE"
      );
      setIsSuccess(true);
      setStep(4);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send your quote request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceedToStep2 = selectedServices.length > 0;
  const canProceedToStep3 = formData.name && formData.email && formData.phone;

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primaryOne/5 rounded-full blur-[150px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 pt-32 pb-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-mina font-bold leading-tight mb-6">
              Let&apos;s Build <span className="text-primaryOne italic drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]">Greatness.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tell us about your vision, and we&apos;ll craft a tailored solution that brings it to life.
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${step >= num ? "bg-primaryOne text-white" : "bg-white/10 text-gray-500"
                    }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 rounded ${step > num ? "bg-primaryOne" : "bg-white/10"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <AnimatePresence mode="wait">

            {/* Step 1: Select Services */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-mina font-bold mb-3">What services do you need?</h2>
                  <p className="text-gray-400">Select all that apply</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <motion.button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-2xl border-2 transition-all text-left ${selectedServices.includes(service.id)
                          ? "bg-primaryOne/10 border-primaryOne shadow-lg shadow-primaryOne/20"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                    >
                      <div className="text-4xl mb-3">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </motion.button>
                  ))}
                </div>

                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!canProceedToStep2}
                    className={`px-10 py-4 rounded-full font-semibold text-lg transition-all ${canProceedToStep2
                        ? "bg-primaryOne hover:bg-primaryOne/90 hover:scale-105 shadow-xl shadow-primaryOne/20"
                        : "bg-white/10 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    Continue to Details →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-mina font-bold mb-3">Your Contact Information</h2>
                  <p className="text-gray-400">How can we reach you?</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors"
                        placeholder="+255 XXX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-12">
                  <button
                    onClick={() => setStep(1)}
                    className="px-8 py-4 rounded-full font-semibold text-lg bg-white/10 hover:bg-white/20 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!canProceedToStep3}
                    className={`px-10 py-4 rounded-full font-semibold text-lg transition-all ${canProceedToStep3
                        ? "bg-primaryOne hover:bg-primaryOne/90 hover:scale-105 shadow-xl shadow-primaryOne/20"
                        : "bg-white/10 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    Continue to Project →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Project Details */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-mina font-bold mb-3">Project Details</h2>
                  <p className="text-gray-400">Help us understand your vision</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors text-white"
                      >
                        <option value="" className="bg-neutral-900">Select budget</option>
                        <option value="< $5,000" className="bg-neutral-900">&lt; $5,000</option>
                        <option value="$5,000 - $15,000" className="bg-neutral-900">$5,000 - $15,000</option>
                        <option value="$15,000 - $50,000" className="bg-neutral-900">$15,000 - $50,000</option>
                        <option value="$50,000+" className="bg-neutral-900">$50,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors text-white"
                      >
                        <option value="" className="bg-neutral-900">Select timeline</option>
                        <option value="ASAP" className="bg-neutral-900">ASAP</option>
                        <option value="1-2 months" className="bg-neutral-900">1-2 months</option>
                        <option value="3-6 months" className="bg-neutral-900">3-6 months</option>
                        <option value="6+ months" className="bg-neutral-900">6+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Tell Us About Your Project</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primaryOne transition-colors"
                      placeholder="Describe your project, goals, and any specific requirements..."
                    />
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-4 rounded-full font-semibold text-lg bg-white/10 hover:bg-white/20 transition-all"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 py-4 rounded-full font-semibold text-lg bg-primaryOne hover:bg-primaryOne/90 hover:scale-105 transition-all shadow-xl shadow-primaryOne/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request →"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 4: Success Message */}
            {step === 4 && isSuccess && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-xl mx-auto"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
                  <div className="text-6xl mb-6">✨</div>
                  <h2 className="text-4xl font-mina font-bold mb-4">Quote Received!</h2>
                  <p className="text-gray-400 text-lg mb-8">
                    Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primaryOne hover:bg-primaryOne/90 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-xl shadow-primaryOne/20"
                  >
                    Return to Homepage
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
