import React from "react";

const HomePage = () => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 w-full md:w-1/2">
      <h2 className="text-lg font-semibold mb-4">Upcoming Event</h2>
      <div className="flex items-center">
        <div className="w-20 h-20 bg-gray-200 rounded-md flex justify-center items-center">
          <span className="text-gray-500">Image</span>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-800">IEEE Xtreme 2.0</h3>
          <p className="text-sm text-gray-500">
            Event Date: <span className="text-gray-800">2025-08-21</span>
          </p>
          <p className="text-sm text-gray-500">
            Status: <span className="text-green-600 font-bold">Active</span>
          </p>
        </div>
      </div>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
        Stop Bidding
      </button>
    </div>
  )
};

export default HomePage;
