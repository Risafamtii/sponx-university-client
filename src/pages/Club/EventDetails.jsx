import React from "react";
import { assets } from "../../assets/assets";
import { FaCrown, FaTrophy, FaMedal } from "react-icons/fa";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barData = {
  labels: ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"],
  datasets: [
    {
      label: "Primary",
      data: Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 30 + 20)
      ),
      backgroundColor: "#2563eb",
      borderRadius: 4,
    },
    {
      label: "Secondary",
      data: Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 40 + 10)
      ),
      backgroundColor: "#67e8f9",
      borderRadius: 4,
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      display: false,
    },
  },
  maintainAspectRatio: false,
};

const EventDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen ml-60">
      {/* Information Section */}
      <div className="w-full bg-white p-6 rounded-lg shadow-lg ml-6 mt-16">
        <p className="text-3xl text-bolder mb-6">Halloween Event - 2025</p>
        {/* Header and Description Section */}
        <div className="flex justify-between items-start gap-8">
          {/* Header Section */}
          <div className="mt-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=200"
              alt="Profile"
              className="w-[550px] h-[390px] rounded-lg object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="w-1/2">
            {/* Event Details */}
            <div className="space-y-4">
              <h1 className="text-lg font-semibold">
                Type: <span className="font-bold">Fun and Activity</span>
              </h1>
              <h1 className="text-lg font-semibold">
                Date: <span className="font-bold">31st of December 2024</span>
              </h1>

              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-gray-600 mt-2 leading-relaxed border-l-2 border-black pl-4">
                University of Colombo School of Computing University of Colombo
                School of Computing University of Colombo School of Computing
                University of Colombo School of Computing University of Colombo
                School of Computing University of Colombo School of Computing.
              </p>

              <h1 className="text-lg font-semibold">
                Location:{" "}
                <span className="font-bold">123, Panadura Road, Town Hall</span>
              </h1>
              <h1 className="text-lg font-semibold">
                Budget: <span className="font-bold">Rs. 80,000</span>
              </h1>
              <h1 className="text-lg font-semibold">
                Status:{" "}
                <span className="text-green-500 font-bold">Activity</span>
              </h1>
            </div>
            <div className=" mb-4 md:ml-96">
              <button className="text-red-600 font-semibold hover:underline flex items-center">
                <span className="mr-1">✏️</span>Edit Event
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-6 ml-6">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-xl">Conversions</h3>
            <select className="text-sm text-gray-500 border rounded-md px-2 py-1">
              <option>This Week</option>
            </select>
          </div>
          <div className="h-[300px] w-[650px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl w-[400px] ml-16">
          <div className="space-y-8 mt-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Sponsorship</h2>
              <span className="text-blue-600 font-bold text-sm">90%</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-blue-500 h-2.5 rounded-full w-[90%]"></div>
            </div>
            {/* Sponsor List */}
            <div className="space-y-3">
              <div className="flex items-center text-lg font-medium">
                <FaCrown className="text-purple-600 mr-3 text-xl" />
                Creative Software:{" "}
                <span className="ml-auto font-bold">Rs. 40,000</span>
              </div>
              <div className="flex items-center text-lg font-medium">
                <FaTrophy className="text-orange-500 mr-3 text-xl" />
                WSO2: <span className="ml-auto font-bold">Rs. 25,000</span>
              </div>
              <div className="flex items-center text-lg font-medium">
                <FaMedal className="text-gray-600 mr-3 text-xl" />
                WinSys: <span className="ml-auto font-bold">Rs. 10,000</span>
              </div>
            </div>
            {/* Divider */}
            <hr className="my-3" />
            {/* Total */}
            <div className="flex justify-between text-lg font-bold">
              <span>TOTAL</span>
              <span>Rs. 75,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
