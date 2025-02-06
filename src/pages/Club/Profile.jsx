import React from 'react';
import { assets } from '../../assets/assets';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Cover Photo and Profile Photo Container */}
      <div className="relative w-full">
        {/* Cover Photo */}
        <img
          src={assets.header} // Replace with the actual path to your cover photo
          alt="Cover"
          className="w-full h-[300px] object-cover rounded-lg shadow-lg"
        />

        {/* Profile Photo */}
        <div className="absolute bottom-0 left-16 transform translate-y-1/2">
          <img
            src={assets.profile} // Replace with the actual path to your profile photo
            alt="Profile"
            className="w-[150px] h-[150px] rounded-full border-4 border-black"
          />
        </div>
      </div>

      {/* Information Section */}
      <div className="-mt-2 w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Header and Description Section */}
        <div className="flex justify-between items-start gap-8">
          {/* Header Section */}
          <div className="mt-20">
            <h1 className="text-2xl font-bold mb-8">IEEE STUDENT BRANCH</h1>
            <p className="text-gray-600 font-semibold">University of Colombo School of Computing</p>
            <p className="italic text-gray-500">University of Colombo</p>
          </div>

          {/* Description Section */}
          <div className="w-1/2">
            <div className="mt-1 mb-4 ml-96">
              <button className="text-red-600 font-semibold hover:underline flex items-center">
                <span className="mr-1">✏️</span>Edit Profile
              </button>
            </div>
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-600 mt-2 leading-relaxed border-l-2 border-black pl-4">
              University of Colombo School of Computing University of Colombo School of Computing
              University of Colombo School of Computing University of Colombo School of Computing
              University of Colombo School of Computing University of Colombo School of Computing.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Details Card */}
      <div className="mt-8 w-full bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-6">
        {/* Left Section: Contact Person */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Person</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="person">👤</span>
              <p className="text-lg font-medium text-gray-700">Amrah Slamath</p>
            </div>
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="role">🔑</span>
              <p className="text-lg font-medium text-gray-700">Secretary</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Information */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="phone">📞</span>
              <p className="text-lg font-medium text-gray-700">077 - 1333 - 370</p>
            </div>
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="email">📧</span>
              <p className="text-lg font-medium text-gray-700">slamathamrah@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h2>
        <div className="flex items-center justify-evenly space-x-4 w-full lg:w-1/3">
          <a href="https://linkedin.com/in/amrahs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          <a href="https://twitter.com/amrahs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a href="https://facebook.com/amrahs" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
            <i className="fab fa-facebook text-3xl"></i>
          </a>
          <a href="https://instagram.com/amrahs" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <i className="fab fa-instagram text-3xl"></i>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
