"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const now = new Date().toLocaleString();

      const res = await emailjs.send(
        "service_ozv8srd",         
        "template_geonc4x",  
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          time: now,
          title: "New Contact Form Submission",
        },
        "pZlt-k_XIMYLNGSxE"
      );

      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h6 className="font-mina font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
            Contact Us
          </h6>
          <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-600 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities?{" "}
            <br className="hidden sm:block" />
            We're ready to engage with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]
         rounded-lg overflow-hidden">
          {/* Left - Form */}
          <div className="p-8 bg-gradient-to-bl from-neutralTwo to-neutralThree">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent text-white text-sm border-b
                 border-gray-400 focus:border-neutralOne outline-none placeholder-white"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone No."
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent text-white text-sm border-b
                 border-gray-400 focus:border-neutralOne outline-none placeholder-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent text-white text-sm border-b
                 border-gray-400 focus:border-neutralOne outline-none placeholder-white"
              />
              <textarea
                name="message"
                placeholder="Write Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent text-white text-sm border-b
                 border-gray-400 focus:border-neutralOne outline-none placeholder-white"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 text-sm font-medium text-black bg-neutralOne
                 hover:bg-primaryTwo hover:text-white rounded-md transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right - Map */}
          <div className="h-full min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15931.662111083495!2d36.6860541!3d-3.3708243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d00193654cd%3A0xaf7135313713c9c3!2sSeynation%20Digital!5e0!3m2!1ssw!2stz!4v1733294093939!5m2!1ssw!2stz"
              className="w-full h-full rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
