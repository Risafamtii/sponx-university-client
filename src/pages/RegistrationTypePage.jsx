import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import "../assets/css/Register.css";

const RegistrationTypePage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Simple fade-in effect on load without using variants
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle selection of account type
  const handleSelect = (type) => {
    setSelectedType(type);
    setTimeout(() => navigate(`/register/${type}`), 500);
  };

  const accountTypes = [
    {
      id: "organization",
      title: "Organization",
      description:
        "For universities, clubs, and event organizers seeking sponsorships.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          ></path>
        </svg>
      ),
      bgSelected: "bg-green-50",
      bgHover: "bg-gray-50",
      borderSelected: "border-green-300",
      borderHover: "border-green-200",
      iconBgSelected: "bg-green-100",
      iconBgNormal: "bg-green-50",
      iconTextSelected: "text-green-700",
      iconTextNormal: "text-green-600",
      titleSelected: "text-green-800",
      descriptionSelected: "text-green-600",
      ctaBgSelected: "bg-green-600",
      ctaBgNormal: "bg-green-100",
      ctaTextSelected: "text-white",
      ctaTextNormal: "text-green-700",
      checkmarkBg: "bg-green-600",
    },
    {
      id: "company",
      title: "Company",
      description:
        "For businesses and brands looking to sponsor events and connect with partners.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      bgSelected: "bg-blue-50",
      bgHover: "bg-gray-50",
      borderSelected: "border-blue-300",
      borderHover: "border-blue-200",
      iconBgSelected: "bg-blue-100",
      iconBgNormal: "bg-blue-50",
      iconTextSelected: "text-blue-700",
      iconTextNormal: "text-blue-600",
      titleSelected: "text-blue-800",
      descriptionSelected: "text-blue-600",
      ctaBgSelected: "bg-blue-600",
      ctaBgNormal: "bg-blue-100",
      ctaTextSelected: "text-white",
      ctaTextNormal: "text-blue-700",
      checkmarkBg: "bg-blue-600",
    },
  ];

  return (
    <div className="flex flex-col justify-center min-h-screen px-6 py-16 bg-white sm:px-12 lg:px-20">
      <div 
        className={`w-full max-w-4xl mx-auto transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <img src={assets.logomark} alt="Logo" className="h-14" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Create Your Account
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-600">
            Join our platform to connect organizations and sponsors seamlessly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {accountTypes.map((type) => (
            <div
              key={type.id}
              onMouseEnter={() => setHoveredCard(type.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => !selectedType && handleSelect(type.id)}
              className={`relative p-8 rounded-2xl border transition-all duration-300 shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
                ${
                  selectedType === type.id
                    ? `${type.bgSelected} ${type.borderSelected} transform`
                    : hoveredCard === type.id
                    ? `${type.bgHover} ${type.borderHover} transform hover:scale-105`
                    : "bg-white border-gray-200 hover:shadow-lg transform hover:scale-105"
                }
              `}
              style={{
                transform: selectedType === type.id 
                  ? 'scale(1)' 
                  : hoveredCard === type.id 
                  ? 'scale(1.03)' 
                  : 'scale(1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
              }}
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* Icon */}
                <div
                  className={`p-4 rounded-full shadow-sm ${
                    selectedType === type.id
                      ? `${type.iconBgSelected} ${type.iconTextSelected}`
                      : `${type.iconBgNormal} ${type.iconTextNormal}`
                  }`}
                >
                  {type.icon}
                </div>

                {/* Title */}
                <h2
                  className={`text-2xl font-semibold ${
                    selectedType === type.id
                      ? type.titleSelected
                      : "text-gray-800"
                  }`}
                >
                  {type.title}
                </h2>

                {/* Description */}
                <p
                  className={`text-sm ${
                    selectedType === type.id
                      ? type.descriptionSelected
                      : "text-gray-600"
                  }`}
                >
                  {type.description}
                </p>

                {/* CTA Button-like element */}
                <div
                  className={`px-5 py-2 rounded-full text-sm font-medium mt-2 transition-colors ${
                    selectedType === type.id
                      ? `${type.ctaBgSelected} ${type.ctaTextSelected}`
                      : `${type.ctaBgNormal} ${type.ctaTextNormal}`
                  }`}
                >
                  Register as {type.title}
                </div>
              </div>

              {/* Checkmark */}
              {selectedType === type.id && (
                <div
                  className={`absolute top-4 right-4 p-1 rounded-full ${type.checkmarkBg}`}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-14">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTypePage;