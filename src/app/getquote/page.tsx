"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
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
    services: [],
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Update text input and textarea fields.
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update services when a checkbox is toggled.
  const handleServiceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  // Handle form submission.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Simulate an API call delay (replace this with your actual API call).
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // On successful submission, display a success message and reset the form.
      setSuccess("Thank you! Your quote request has been submitted.");
      setFormData({
        name: "",
        email: "",
        services: [],
        budget: "",
        message: "",
      });
    } catch (err) {
      console.log(err)
      setError(
        "There was an error processing your request. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center mt-12 px-4 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Get a Quote</h1>
        <p className="text-gray-600 text-center mb-6">
          Fill out the form below with your details, select the services you’re interested in,
          specify your budget, and provide any additional details so we can provide you with a complete quote.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
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

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
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

          {/* Services Selection */}
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

          {/* Budget Field */}
          <div className="mb-4">
            <label htmlFor="budget" className="block text-gray-700 mb-2">
              Budget
            </label>
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

          {/* Additional Details Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Additional Details
            </label>
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

        {/* Display error or success messages */}
        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-500 mt-4 text-center">{success}</p>
        )}
      </div>
    </main>
  );
}
