import React from 'react';
import { assets } from '../assets/assets';
import { FiShare2 } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';

const Profile = () => {
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
          <button className="flex items-center px-6 py-2 text-sm font-medium text-white rounded-lg bg-[#1B264B] hover:bg-[#3A466F]">
            Edit Profile
            <MdEdit className="ml-2" />
          </button>
        </div>
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
