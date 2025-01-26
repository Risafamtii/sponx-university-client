import React from 'react';
import { assets } from '../../assets/assets';
import { FiShare2 } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';

const Profile = () => {

  const [editProfile, setEditProfile] = useState(false);

  const toggleEditProfile = () => {
    setEditProfile(!editProfile);
  }
  
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100">
      <div className="flex flex-col w-full px-8 py-6">

        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center w-3/5 p-6 bg-white rounded-lg shadow-lg">
            <img
              src={assets.rac}
              alt="Profile"
              className="w-24 h-24 border-4 rounded-full"
            />
            <p className="mt-4 text-2xl font-bold text-[#1B264B]">Rotaract Club</p>
            <button className="flex items-center px-6 py-2 mt-4 text-sm font-medium text-white rounded-lg bg-[#1B264B] hover:bg-[#3A466F]">
              Share Profile
              <FiShare2 className="ml-2" />
            </button>
          </div>
        </div>

        <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold text-[#1B264B]">Club Details</h1>
          <div className="mt-4 space-y-4">
            <DetailRow label="Club Name" value="Rotaract Club of UCSC" />
            <DetailRow label="University" value="University of Colombo" />
            <DetailRow label="Faculty" value="School Of Computing" />
            <DetailRow label="Mission" value="Social Service and Community Engagement" />
          </div>
        </div>

  
        <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold text-[#1B264B]">Contact Person</h1>
          <div className="mt-4 space-y-4">
            <DetailRow label="Name" value="John Doe" />
            <DetailRow label="Position" value="President" />
            <DetailRow label="Email" value="johndoe@rotaract.org" />
            <DetailRow label="Contact Number" value="+94 123 456 789" />
          </div>
        </div>


        <div className="flex justify-end mt-6">
          <button className="flex items-center px-6 py-2 text-sm font-medium text-white rounded-lg bg-[#1B264B] hover:bg-[#3A466F]"
            onClick={toggleEditProfile}
          >
            Edit Profile
            <MdEdit className="ml-2" />
          </button>
        </div>

        {editProfile && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-25"
              onClick={toggleEditProfile}
            ></div>

            {/* Form Popup */}
            <div className="absolute z-50 w-4/5 max-w-lg p-6 transform -translate-x-1/2 bg-white rounded-lg shadow-xl top-20 left-1/2">
              <h2 className="text-xl font-semibold text-center text-[#1B264B]">
                Edit Profile
              </h2>
              <form className="mt-6 space-y-4">
                {/* Club Name */}
                <div>
                  <label
                    htmlFor="clubName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Club Name
                  </label>
                  <input
                    type="text"
                    id="clubName"
                    name="clubName"
                    placeholder="Enter club name"
                    defaultValue="Rotaract Club of UCSC"
                    className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                  />
                </div>

                {/* University */}
                <div>
                  <label
                    htmlFor="university"
                    className="block text-sm font-medium text-gray-700"
                  >
                    University
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    placeholder="Enter university name"
                    defaultValue="University of Colombo"
                    className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                  />
                </div>

                {/* Faculty */}
                <div>
                  <label
                    htmlFor="faculty"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Faculty
                  </label>
                  <input
                    type="text"
                    id="faculty"
                    name="faculty"
                    placeholder="Enter faculty name"
                    defaultValue="School Of Computing"
                    className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                  />
                </div>

                {/* Mission */}
                <div>
                  <label
                    htmlFor="mission"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mission
                  </label>
                  <textarea
                    id="mission"
                    name="mission"
                    placeholder="Enter mission"
                    defaultValue="Social Service and Community Engagement"
                    className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                    rows={3}
                  />
                </div>

                {/* Contact Person */}
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium text-[#1B264B]">
                    Contact Person Details
                  </h3>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter contact person name"
                      defaultValue="John Doe"
                      className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      placeholder="Enter position"
                      defaultValue="President"
                      className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      defaultValue="johndoe@rotaract.org"
                      className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      placeholder="Enter contact number"
                      defaultValue="+94 123 456 789"
                      className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 pt-4 border-t">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={toggleEditProfile}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-[#1B264B] rounded-md shadow hover:bg-[#3A466F]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between text-sm text-gray-700">
    <span className="font-medium text-gray-500">{label}</span>
    <span className="font-semibold text-[#3A466F]">{value}</span>
  </div>
);

export default Profile;
