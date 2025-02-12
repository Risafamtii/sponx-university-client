import React from "react";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { BellIcon, UserCircleIcon } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import active from "../../assets/img/active.png";
import companies from "../../assets/img/companies.png";
import clubs from "../../assets/img/clubs.png";
import unni from "../../assets/img/unni.png";
import event1 from "../../assets/img/event1.png";
import { scales } from "chart.js/auto";

const revenueData = {
  labels: ["Aug", "Sept", "Oct", "Nov", "Dec", "Jan" , "Feb" , "Mar"],
  datasets: [
    {
      label: "Revenue",
      data: [400, 500, 400, 600, 780, 600, 200, 367],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.2)",
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
      backgroundColor: ["#FFFFFE", "#FFFFFE", "#FFFFFE", "#FFFFFE"],
      borderRadius: 10,
      barThickness: 10,
    },
    {
      label: "Dataset 2",
      data: [15, 33, 22, 35],
      backgroundColor: "gray", // Second color
      borderRadius: 10,
      barThickness: 10,
    },
  ],
};

const config = {
  type: 'bar',
  data: eventData,
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            // Adds extra space between the label and value in the tooltip
            return context.dataset.label + ':  ' + context.raw;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          padding: 10, 
        },
        grid: {
          display:false
        }
      },
      y: {
        ticks: {
          padding: 10, 
        },
        grid: {
          display:false
        }
      }
    }
  }
};




const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
  scales:{
    x: {
      grid: {
        display:false
      }
    },
    y: {
      grid: {
        display:false
      }
    }
  }
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Overview = () => {
  return (
    <div className="w-[83%] bg-gray-100 ml-[17%] h-[100%] mt-[5%]">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Revenue</h2>
          <div className="h-[280px] w-[780px]">
            <Line data={revenueData} options={chartOptions} />
          </div>
          
        </div>
        <div className="grid gap-4">
          <div className="p-4 bg-white shadow-lg rounded-2xl h-[150px] bg-cover w-[100%]" style={{ backgroundImage: `url(${active})` }}></div>
          <div className="flex gap-4">
            <div className="bg-white shadow-lg rounded-2xl w-[100%] h-[100px] bg-cover" style={{ backgroundImage: `url(${companies})` }}></div>
            <div className="bg-white shadow-lg rounded-2xl w-[100%] h-[100px] bg-cover" style={{ backgroundImage: `url(${unni})` }}></div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white shadow-lg rounded-2xl w-[100%] h-[100px] bg-cover" style={{ backgroundImage: `url(${clubs})` }}></div>
            <div className="bg-white shadow-lg rounded-2xl w-[100%] h-[100px] bg-cover" style={{ backgroundImage: `url(${unni})` }}></div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-6">
        <div className="w-[40%] h-[40%]p-6 bg-gradient-to-r from-red-400 to-red-300 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-white">Types of Events</h2>
          <Bar data={config.data} options={config.options}/>
          <div className="pt-4 mt-5 space-y-4 bg-orange-50" >
            {eventData.labels.map((label,index) => (
              <div key={index} className="">
                <span className="mb-5 text-xl text-stone-700 ">{label}:</span>
                <span>{eventData.datasets[0].data[index]}</span>
                
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-6 bg-white shadow-sm rounded-xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Recent Events</h2>
          <div className="grid grid-cols-3 gap-4">
            {[event1, event1, event1].map((img, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-xl">
                <img src={img} alt="Event" className="rounded-lg" />
                <h3 className="mt-2 font-semibold text-gray-700">UOC Muslim Majlis</h3>
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
