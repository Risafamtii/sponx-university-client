import React from "react";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { BellIcon, UserCircleIcon } from "lucide-react";

import active from "../../assets/img/active.png";
import companies from "../../assets/img/companies.png";
import clubs from "../../assets/img/clubs.png";
import unni from "../../assets/img/unni.png";
import event1 from "../../assets/img/event1.png";

const revenueData = {
  labels: ["Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  datasets: [
    {
      label: "Revenue",
      data: [400, 500, 400, 600, 780, 600, 200, 367],
      borderColor: "#2563eb",
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) return null; 
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(37, 99, 235, 0.3)"); 
        gradient.addColorStop(1, "rgba(37, 99, 235, 0)"); 

        return gradient;
      },
      fill: true, 
      tension: 0.4,
      borderWidth: 3,
      pointRadius: 5,
      pointBackgroundColor: "#2563eb",
    },
  ],
};


const eventData = {
  labels: ["Entertaining", "Academic", "Cultural", "Sports"],
  datasets: [
    {
      label: "Event Types",
      data: [23, 44, 11, 20],
      backgroundColor: ["#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"],
      borderRadius: 5,
      barThickness: 12,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { display: false } },
  },
};

const Overview = () => {
  return (
    <div className="w-[83%] bg-gray-100 ml-[17%] h-full mt-[5%] p-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Revenue</h2>
          <div className="h-[280px] w-full">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>
        <div className="grid gap-4">
          <div
            className="p-4 bg-white shadow-lg rounded-2xl h-[150px] bg-cover"
            style={{ backgroundImage: `url(${active})` }}
          />
          <div className="flex gap-4">
            <div
              className="bg-white shadow-lg rounded-2xl w-full h-[100px] bg-cover"
              style={{ backgroundImage: `url(${companies})` }}
            />
            <div
              className="bg-white shadow-lg rounded-2xl w-full h-[100px] bg-cover"
              style={{ backgroundImage: `url(${unni})` }}
            />
          </div>
          <div className="flex gap-4">
            <div
              className="bg-white shadow-lg rounded-2xl w-full h-[100px] bg-cover"
              style={{ backgroundImage: `url(${clubs})` }}
            />
            <div
              className="bg-white shadow-lg rounded-2xl w-full h-[100px] bg-cover"
              style={{ backgroundImage: `url(${unni})` }}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-8 mt-6">
        <div className="w-[40%] p-6 bg-white rounded-xl shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Types of Events
          </h2>
          <Bar data={eventData}  />
          <div className="pt-4 mt-5 space-y-4">
            {eventData.labels.map((label, index) => (
              <div key={index} className="flex justify-between text-gray-700">
                <span className="font-medium">{label}:</span>
                <span>{eventData.datasets[0].data[index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 p-6 bg-white shadow-lg rounded-xl">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Recent Events
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[event1, event1, event1].map((img, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <img src={img} alt="Event" className="rounded-lg" />
                <h3 className="mt-2 font-semibold text-gray-700">
                  UOC Muslim Majlis
                </h3>
                <p className="text-sm text-gray-500">3 days to go</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
