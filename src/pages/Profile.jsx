import React from 'react';
import { assets } from "../assets/assets"; // Assuming assets are imported from the assets folder

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Cover Photo and Profile Photo Container */}
      <div className="relative w-full">
        {/* Cover Photo */}
        <img
          src={assets.head} // Replace with the actual path to your cover photo
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
            <h1 className="text-2xl font-bold">IEEE STUDENT BRANCH</h1>
            <p className="text-gray-600">University of Colombo School of Computing</p>
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

      {/* Contact Details Section */}

      <div className="mt-6 w-full bg-white p-6 rounded-lg shadow-lg flex items-center">
      <h2 className='text-xl font-bolder -mt-2 mb-4'>Contact Details</h2>
      <div className="flex justify-between items-start gap-8">
          {/* Header Section */}
          <div className="mt-20">
            <h1 className="text-2xl font-bold">IEEE STUDENT BRANCH</h1>
            <p className="text-gray-600">University of Colombo School of Computing</p>
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
      
    </div>
  );
};

export default Profile;
