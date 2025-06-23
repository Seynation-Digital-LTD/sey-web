"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  services: string[];
  budget: string;
  message: string;
}

const servicesList: string[] = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Optimization",
  "Content Marketing",
  "Product Management",
  "Branding & Identity",
  "Database Management",
  "Social Media Management",
  "Graphics Design",
  "AI/ML Integration",
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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

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

      setSuccess("✅ Thank you! Your quote request has been submitted.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("❌ There was an error sending your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center mt-12 px-4 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Get a Quote</h1>
        <p className="text-gray-600 text-center mb-6">
          Fill out the form below with your details, select the services you’re
          interested in, specify your budget, and provide any additional details.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOne"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOne"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+255 712 345 678"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOne"
            />
          </div>

          {/* Services */}
          <div className="mb-4">
            <p className="block text-gray-700 mb-2">Select Services</p>
            <div className="flex flex-wrap gap-3">
              {servicesList.map((service) => (
                <label key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleServiceChange}
                    className="form-checkbox h-5 w-5 text-primaryOne"
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="mb-4">
            <label htmlFor="budget" className="block text-gray-700 mb-2">Budget</label>
            <input
              id="budget"
              name="budget"
              type="number"
              placeholder="Your budget"
              value={formData.budget}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOne"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Additional Details</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Provide any additional details..."
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOne"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primaryOne text-white py-2 rounded-md hover:bg-primaryTwo transition-colors duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Notifications */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
      </div>
    </main>
  );
}
