import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const ClubDetailsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    university: "",
    faculty: "",
    clubName: "",
    clubEmail: "",
    contactPerson: "",
    contactEmail: "",
    position: "",
    contactNumber: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.university) newErrors.university = "University is required.";
    if (!formData.faculty) newErrors.faculty = "Faculty is required.";
    if (!formData.clubName) newErrors.clubName = "Club Name is required.";
    if (!formData.clubEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clubEmail))
      newErrors.clubEmail = "Valid club email is required.";
    if (!formData.contactPerson) newErrors.contactPerson = "Contact Person is required.";
    if (!formData.contactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail))
      newErrors.contactEmail = "Valid contact email is required.";
    if (!formData.position) newErrors.position = "Position is required.";
    if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Valid 10-digit phone number is required.";
    if (!formData.description || formData.description.length > 300)
      newErrors.description = "Description must be under 300 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (validate()) {
      navigate("/bank-details");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="fixed w-full max-w-3xl transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
      <div className="p-6 text-white bg-blue-900">
          <div className="flex items-center">
            <img src={assets.logo} alt="Logo" className="w-12 h-12 mr-4" />
            <h1 className="text-2xl font-semibold">Club Registration</h1>
          </div>
        </div>
        <div className="h-[500px] overflow-y-auto px-8 py-6 custom-scrollbar">

          <form className="space-y-6" onSubmit={handleNext}>
           
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                  University
                </label>
                <input
                  type="text"
                  id="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="Enter university"
                  className={`w-full px-4 py-2 mt-1 text-sm border rounded-md ${
                    errors.university ? "border-red-500" : ""
                  }`}
                />
                {errors.university && <p className="text-sm text-red-500">{errors.university}</p>}
              </div>
              <div>
                <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
                  Faculty
                </label>
                <input
                  type="text"
                  id="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                  placeholder="Enter faculty"
                  className={`w-full px-4 py-2 mt-1 text-sm border rounded-md ${
                    errors.faculty ? "border-red-500" : ""
                  }`}
                />
                {errors.faculty && <p className="text-sm text-red-500">{errors.faculty}</p>}
              </div>
            </div>

            {/* Club Details */}
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
          <h1>enter the details</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person Name</label>
              <input
                type="text"
                id="contactPerson"
                placeholder="Enter contact person name"
                className="w-64 px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            
            <div>
              <label htmlFor="email-person" className="block text-sm font-medium text-gray-700"> Email(Contact Person)</label>
              <input
                type="email"
                id="email-person"
                placeholder="Enter Email "
                className="w-64 px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                placeholder="Enter contact number"
                className="w-64 px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            
            <div>
              <label htmlFor="positon" className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                id="position"
                placeholder="Enter Position"
                className="w-64 px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
              type="submit"
              className="px-6 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
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
    </div>
  );
};

export default ClubDetailsPage;