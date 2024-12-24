import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const SignupPage = () => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "auto";
  }, []);

  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    navigate("/club-details");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="fixed w-full max-w-3xl p-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
        <div className="flex items-center mb-6">
          <img src={assets.logo} alt="Logo" className="mr-4 h-18 w-18" />
          <h2 className="text-4xl text-blue-900">Personal Details</h2>
        </div>

        <form className="space-y-6" onSubmit={handleNext}>
          {/* Full Name and Email */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Date of Birth and Phone Number */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Nationality and NIC */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                placeholder="Enter your nationality"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="nic" className="block text-sm font-medium text-gray-700">
                NIC
              </label>
              <input
                type="text"
                id="nic"
                placeholder="Enter your NIC"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Password and Confirm Password */}
          <div className="space-y-2">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Next
            </button>
          </div>

          {/* Link to Login */}
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
