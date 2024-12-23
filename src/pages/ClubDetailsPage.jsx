import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const ClubDetailsPage = () => {
  const navigate = useNavigate(); 

  
  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleNext = (event) => {
    event.preventDefault(); 
    navigate("/bank-details"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="fixed w-full max-w-3xl p-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
        
       
        <div className="flex items-center mb-6">
          <img src={assets.logo} alt="Logo" className="mr-4 h-18 w-18" />
          <h2 className="text-4xl text-blue-900">Club Details</h2>
        </div>

        <form className="space-y-6" onSubmit={handleNext}>
          {/* University and Faculty Fields */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700">University</label>
              <input
                type="text"
                id="university"
                placeholder="Enter university"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">Faculty</label>
              <input
                type="text"
                id="faculty"
                placeholder="Enter faculty"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Club Details */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="clubName" className="block text-sm font-medium text-gray-700">Club Name</label>
              <input
                type="text"
                id="clubName"
                placeholder="Enter club name"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="clubEmail" className="block text-sm font-medium text-gray-700">Club Email</label>
              <input
                type="email"
                id="clubEmail"
                placeholder="Enter club email"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Club Contact Information */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person</label>
              <input
                type="text"
                id="contactPerson"
                placeholder="Enter contact person name"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                placeholder="Enter contact number"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Club Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Club Description</label>
            <textarea
              id="description"
              placeholder="Briefly describe your club (max 300 words)"
              rows="4"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate(-1)} // Go back to the previous page
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

          {/* Login Redirect */}
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ClubDetailsPage;
