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

const revenueData = {
  labels: ["Aug", "Sept", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Revenue",
      data: [400, 500, 400, 600, 780, 600],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.2)",
      tension: 0.4,
    },
  ],
};

const eventData = {
  labels: ["Entertaining", "Academic", "Cultural", "Sports"],
  datasets: [
    {
      label: "Event Types",
      data: [23, 44, 11, 20],
      backgroundColor: "#fff",
      borderRadius: 10,
      barThickness: 10,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const notifications = [

{
  id: 1,
  title: "You have two PENDING banners to approve",
  left: {
    name: "AISEC",
    university: "UOC",
    email: "aisecuoc@gmail.com",
    buttonText: "Approve Now",
  },
  right: {
    name: "AISEC",
    university: "UOM",
    email: "aisecuom@gmail.com",
    buttonText: "View Now",
  },
  borderColor: "border-l-red-500",
},

{
  id: 2,
  title: "You have two new recently registered clubs",
  left: {
    name: "AISEC",
    university: "UOC",
    email: "aisecuoc@gmail.com",
    buttonText: "Approve Now",
  },
  right: {
    name: "AISEC",
    university: "UOM",
    email: "aisecuom@gmail.com",
    buttonText: "View Now",
  
  borderColor: "border-l-black",
},
},

];




const Overview = () => {
  return (
    <div className="w-[83%] bg-white-200 ml-[17%] p-6 ">
      

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2 p-4 bg-white shadow-md rounded-xl">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">Revenue</h2>
          <Line data={revenueData} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-4 bg-white shadow-md h-[160px] rounded-xl bg-center bg-cover" style={{ backgroundImage: `url(${active})` }}></div>

          <div className="flex gap-4">
            <div className="bg-white shadow-md h-[100px] rounded-xl w-[180px] bg-center bg-cover" style={{ backgroundImage: `url(${companies})` }}></div>
            
            <div className="bg-white shadow-md h-[100px] rounded-xl w-[180px] bg-center bg-cover" style={{ backgroundImage: `url(${unni})` }}></div>
          </div>

          <div className="flex gap-4">
            <div className="bg-white shadow-md h-[100px] rounded-xl w-[180px] bg-center bg-cover" style={{ backgroundImage: `url(${clubs})` }}></div>
            
            <div className="bg-white shadow-md h-[100px] rounded-xl w-[180px] bg-center bg-cover" style={{ backgroundImage: `url(${unni})` }}></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col mt-4">
          <div className="w-[400px] h-[250px] bg-gradient-to-r from-red-400 to-red-300 rounded-t-xl p-4 relative">
            <h2 className="text-lg font-semibold text-white">Types of Events</h2>
            <div className="mt-4">
              <Bar data={eventData} options={options} />
            </div>
          </div>

          <div className="w-[400px] bg-white shadow-md rounded-xl p-6 grid grid-cols-2 gap-3 text-center">
            {eventData.labels.map((label, index) => (
              <div key={label}>
                <h3 className="text-gray-500">{label}</h3>
                <p className="text-2xl font-semibold text-gray-700">{eventData.datasets[0].data[index]}%</p>
              </div>
            ))}
          </div>
        </div>

        
          <div className="w-full px-4 mt-[30px] ml-[30px]">
      {/* <Slider {...settings}> */}
        {notifications.map((notif) => (
          <div key={notif.id} className={`bg-white shadow-md rounded-lg p-4 border-l-4 mt-[10px] ${notif.borderColor}`}>
            <p className="font-medium text-gray-700">{notif.title}</p>
            <div className="flex items-center justify-between mt-4">
              {/* Left Card */}
              <div className="flex flex-col items-start flex-1 pr-4 border-r border-gray-300">
              <UserCircleIcon className="w-6 h-6 mr-2 text-gray-500" />
                  <span className="font-semibold">{notif.left.name}</span>
                <p className="text-gray-500">{notif.left.university}</p>
                <p className="text-sm text-gray-600">{notif.left.email}</p>
                <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg shadow-md">
                  {notif.left.buttonText}
                </button>
              </div>
              
              <div className="h-full w-[1px] bg-gray-300 mx-4 "></div>
              {/* Right Card */}
              <div className="flex flex-col items-start flex-1">
              <UserCircleIcon className="w-6 h-6 mr-2 text-gray-500" />
                  <span className="font-semibold">{notif.left.name}</span>

                <p className="text-gray-500">{notif.right.university}</p>
                <p className="text-sm text-gray-600">{notif.right.email}</p>
                <button className="px-4 py-2 mt-2 text-blue-500 bg-gray-200 rounded-lg shadow-md">
                  {notif.right.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      {/* </Slider> */}
    </div>
          </div>
        </div>
     
  );
};

export default Overview;
