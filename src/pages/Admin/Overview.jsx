
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
    <div className="w-[83%] bg-white-200 ml-[17%] p-6 mt-[20px]">
      

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

  
}
export default Overview
// import React from "react";
// import { Line, Bar } from "react-chartjs-2";
// import "chart.js/auto";
// import { BellIcon, UserCircleIcon,Clock10Icon } from "lucide-react";
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import active from "../../assets/img/active.png";
// import companies from "../../assets/img/companies.png";
// import clubs from "../../assets/img/clubs.png";
// import unni from "../../assets/img/unni.png";
// import event1 from "../../assets/img/event1.png"
// import event2 from "../../assets/img/event2.png"
// import event3 from "../../assets/img/event3.png"



// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// const Overview = () => {
//   const revenueData = {
//     labels: ["Aug", "Sept", "Oct", "Nov", "Dec", "Jan"],
//     datasets: [
//       {
//         label: "Revenue",
//         data: [400, 500, 400, 600, 780, 600],
//         borderColor: "#2563eb",
//         backgroundColor: "rgba(37, 99, 235, 0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const eventData = {
//     labels: ["Academic", "Cultural", "Sports", "Entertainment"],
//     datasets: [
//       {
//         label: "Types of Events",
//         data: [44, 23, 20, 10],
//         backgroundColor: ["red", "#f97316", "#14b8a6", "#3b82f6"],
//       },
//     ],
//   };

//   const notifications = [
//     {
//       id: 1,
//       title: "You have two PENDING banners to approve",
//       user: { name: "AISEC", org: "UOC", email: "aisecuoc@gmail.com" },
//       actionText: "Approve Now",
//       status: "pending",
//     },
//     {
//       id: 2,
//       title: "You have two PENDING banners to approve",
//       user: { name: "AISEC", org: "UOC", email: "aisecuoc@gmail.com" },
//       actionText: "Approve Now",
//       status: "pending",
//     },
//     {
//       id: 3,
//       title: "You have two new recently registered clubs",
//       user: { name: "AISEC", org: "UOC", email: "aisecuoc@gmail.com" },
//       actionText: "Approve Now",
//       status: "normal",
//     },
//     {
//       id: 4,
//       title: "You have two new recently registered clubs",
//       user: { name: "AISEC", org: "UOC", email: "aisecuoc@gmail.com" },
//       actionText: "Approve Now",
//       status: "normal",
//     },
//   ];

//   const pendingBanners = notifications.filter((notification) => notification.status === "pending");
//   const registeredClubs = notifications.filter((notification) => notification.status === "normal");

//   const settings = {
//     dots: true, 
//     infinite: true, 
//     speed: 500, 
//     slidesToShow: 1, 
//     slidesToScroll: 1, 
//   };

//   const renderNotificationCard = (notification, borderColor, bgColor) => (
//     <div
//       key={notification.id}
//       className={`relative flex justify-between p-4 border-2 rounded-lg shadow-lg mb-4 ${borderColor} bg-white`}
//     >
//       <div className={`absolute left-0 top-0 w-3 rounded-l-md ${bgColor}`}></div>
//       <div className="flex flex-col flex-1">
//         <p className="text-sm font-medium text-gray-700">{notification.title}</p>
//         <div className="flex items-center mt-3">
//           <UserCircleIcon className="w-12 h-12 mr-3 text-gray-500 ml-[8px]" />
//           <div className="ml-[10px]">
//             <p className="text-lg font-semibold text-gray-800">{notification.user.name}</p>
//             <p className="text-xs text-gray-500">{notification.user.org}</p>
//             <p className="text-xs text-gray-500">{notification.user.email}</p>
//           </div>
//         </div>
//       </div>
//       <button className="px-4 py-2 text-sm font-semibold ml-[250px] mt-[-10px] text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700">
//         {notification.actionText}
//       </button>
//     </div>
//   );

//   return (
// <div className="p-8 bg-gray-100 w-[87%] ml-[13%]">
//   <div className="top-0 flex items-center justify-between w-full h-20 px-6 mb-6 bg-white rounded-lg shadow-xl mt-[-40px]">
//     <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
//     <div className="flex items-center gap-4">
//       <BellIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
//       <UserCircleIcon className="w-8 h-8 text-gray-600 cursor-pointer" />
//     </div>
//   </div>

//   <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//     <div className="col-span-2 p-4 bg-white shadow-md rounded-xl w-[750px]">
//       <h2 className="mb-4 text-lg font-semibold text-gray-700">Revenue</h2>
//       <Line data={revenueData} />
//     </div>

//     <div>
//       <div
//         className="h-40 p-4 mb-4 bg-white bg-center bg-cover shadow-md rounded-xl"
//         style={{ backgroundImage: `url(${active})` }}
//       >
//         <h2 className="mb-2 text-lg font-semibold text-white">12 ACTIVE SPONSORSHIPS</h2>
//         <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
//           Check All
//         </button>
//       </div>

//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         <div
//           className="flex flex-col items-center p-4 text-white bg-indigo-500 bg-center bg-cover rounded-lg shadow-md"
//           style={{ backgroundImage: `url(${companies})` }}
//         >
//           <div className="text-2xl font-bold">19</div>
//           <div className="text-sm">Companies</div>
//         </div>

//         <div
//           className="flex flex-col items-center p-4 text-white bg-indigo-500 bg-center bg-cover rounded-lg shadow-md"
//           style={{ backgroundImage: `url(${clubs})` }}
//         >
//           <div className="text-4xl font-bold">19</div>
//           <div className="text-sm">Clubs</div>
//         </div>

//         <div
//           className="flex flex-col items-center p-4 text-white bg-indigo-500 bg-center bg-cover rounded-lg shadow-md"
//           style={{ backgroundImage: `url(${unni})` }}
//         >
//           <div className="text-4xl font-bold">31</div>
//           <div className="text-sm">Universities</div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="grid grid-cols-1 mt-6 bg-gray-100 md:grid-cols-3 w-[83%]">
//     <div className="p-4 bg-white shadow-md rounded-xl h-[400px] w-[500px]">
//       <h2 className="mb-4 text-lg font-semibold text-gray-700">Event Types</h2>
//       <Bar data={eventData} />
//       <div className="grid grid-cols-2 gap-2 mt-4">
//         <h3 className="text-sm text-gray-700">Academic - 44%</h3>
//         <h3 className="text-sm text-gray-700">Cultural - 23%</h3>
//         <h3 className="text-sm text-gray-700">Sports - 20%</h3>
//         <h3 className="text-sm text-gray-700">Entertainment - 10%</h3>
//       </div>
//     </div>

//     <div className="col-span-2 p-4 rounded-md ml-[150px] mt-[-16px]">
//       <div className="p-4 bg-white rounded-lg shadow-lg w-[500px]">
//         <div className="space-y-8">
//           {pendingBanners.length > 0 && (
//             <div>
//               <h2 className="mb-4 text-lg font-semibold text-red-600">Pending Notifications</h2>
//               <Slider {...settings}>
//                 {pendingBanners.map((notification) =>
//                   renderNotificationCard(notification, "shadow-lg", "bg-red-500")
//                 )}
//               </Slider>
//             </div>
//           )}

//           {registeredClubs.length > 0 && (
//             <div>
//               <h2 className="mb-4 text-lg font-semibold text-green-600">Approved Notifications</h2>
//               <Slider {...settings}>
//                 {registeredClubs.map((notification) =>
//                   renderNotificationCard(notification, "shadow-lg", "bg-green-500")
//                 )}
//               </Slider>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="mt-6 bg-gray-100">
//     <h2 className="text-lg font-semibold text-gray-700">Upcoming Events</h2>
//     <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-3">
//       {[1, 2, 3].map((event, index) => (
//         <div key={index} className="relative p-4 bg-center bg-cover shadow-md rounded-xl">
//           <img
//             src={index === 0 ? event1 : index === 1 ? event2 : event3}
//             alt="Event Image"
//             className="w-full h-[200px] object-cover rounded-t-xl"
//           />

//           <div className="mt-4">
//             <p className="text-gray-500">{index + 1} Days Ago</p>
//             <h3 className="font-semibold text-gray-700">IEEE EXTREME</h3>
//             <p className="text-gray-500">Due on <span className="text-blue-600">2024.02.05</span></p>
//             <div className="flex items-center text-green-600">
//               <Clock10Icon className="w-5 h-5 mr-2" />
//               <span>{5 - index} Days Left</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>



    
//   );
// };

// export default Overview;



