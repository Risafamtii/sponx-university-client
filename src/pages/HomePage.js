import React from "react";

const HomePage = () => {
  return (
    <div className="bg-customBlue p-20 w-full ">

      <h2 className="text-lg font-normal mb-4">Logged in as IEEE of UOC-UCSC</h2>
      <h2 className="text-lg font-semibold mb-4">Upcoming Event</h2>
      <div className="flex items-center">
        <div className="w-80 h-60 bg-gray-200 rounded-md flex justify-center items-center">
          <span className="text-gray-500">Image</span>
        </div>
        <div className="ml-12">
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
