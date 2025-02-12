import React from "react";
import { FaClipboardCheck, FaHandHoldingUsd, FaHandshake } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useState } from "react";
import dayjs from "dayjs";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const stats = [
    { title: "Total Projects", value: 121, icon: <FaClipboardCheck className="text-white" /> },
    { title: "Current Bids", value: 12, icon: <FaHandHoldingUsd className="text-white" /> },
    { title: "Collaborators", value: 16, icon: <FaHandshake className="text-white" /> },
  ];

  const activities = [
    { id: "56037-XDER", event: "Brasil", code: "BR", date: "05/28/2020", status: "Paid", amount: "100,000", category: "Web, UI/UX Design", badge: "Approved", badgeColor: "bg-purple-200 text-purple-700" },
    { id: "05822-FXSP", event: "Belarus", code: "BY", date: "02/04/2020", status: "Rejected", amount: "100,000", category: "Houses & Hotels", badge: "Bidding", badgeColor: "bg-yellow-200 text-yellow-700" },
    { id: "00347-BCLQ", event: "Phillipines", code: "PH", date: "23/12/2020", status: "Paid", amount: "100,000", category: "Transportation", badge: "Success", badgeColor: "bg-green-200 text-green-700" },
    { id: "4472-QREX", event: "Argentina", code: "AR", date: "17/09/2021", status: "Pending", amount: "10,000", category: "Insurance", badge: "Rejected", badgeColor: "bg-red-200 text-red-700" },
    
    
  ];

const Overview = () => {

    const [currentDate, setCurrentDate] = useState(dayjs());
    const [showFullMonth, setShowFullMonth] = useState(false);
    const startOfWeek = currentDate.startOf('week');
    const days = Array.from({ length: 7 }, (_, i) => startOfWeek.add(i + 9, 'day'));
    const fullMonthDays = Array.from({ length: currentDate.daysInMonth() }, (_, i) => currentDate.startOf('month').add(i, 'day'));
    const doughnutData = {
        datasets: [
          {
            data: [45, 55], // 45% completed, 55% remaining
            backgroundColor: ["#4F46E5", "rgba(255, 255, 255, 0.2)"],
            hoverBackgroundColor: ["#4F46E5", "rgba(255, 255, 255, 0.2)"],
            borderWidth: 0,
          },
        ],
      };

        // Data for Bar Chart
  const barData = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Monthly Spending (LKR)",
        data: [5000, 8000, 6000, 4000, 12500, 6000],
        backgroundColor: [
          "rgba(79, 70, 229, 0.5)",
          "rgba(79, 70, 229, 0.5)",
          "rgba(79, 70, 229, 0.5)",
          "rgba(79, 70, 229, 0.5)",
          "#4F46E5", // Highlighted bar for December
          "rgba(79, 70, 229, 0.5)",
        ],
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  return (
    // page container
    <div className="overview-container w-[83%] ml-[17%] bg-[#F9F9F9]  flex">
      
      {/* left side of the page */}
      <div className="flex-[3] p-4">
        
        {/* the black colour chart and bar chart  */}
        <div className="flex h-[300px] w-full p-6 gap-4">

            {/* that black colour chart */}
            <div className="flex-[1] bg-gray-900 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                <h3 className="text-lg  mb-2">Vault Balance</h3>
                <p className="text-3xl font-semibold">65,000 LKR</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24">
                        <Doughnut data={doughnutData} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-300">100K</p>
                        <p className="text-sm">January</p>
                    </div>
                </div>
            </div>

                    {/* Monthly Spending Card */}
            <div className="flex-[2] bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Monthly Spending (LKR)</h3>
                <div className="flex justify-between items-end h-full">
                {[
                    { month: "Aug", value: 50 },
                    { month: "Sep", value: 80 },
                    { month: "Oct", value: 60 },
                    { month: "Nov", value: 40 },
                    { month: "Dec", value: 125, highlight: true },
                    { month: "Jan", value: 60 },
                ].map((data, index) => (
                    <div key={index} className="flex flex-col items-center">
                    <div
                        className={`w-8 ${
                        data.highlight ? "bg-indigo-500" : "bg-indigo-200"
                        } rounded-t-lg`}
                        style={{ height: `${data.value}px` }}
                    ></div>
                    <p
                        className={`mt-2 text-sm ${
                        data.highlight ? "text-indigo-500 font-semibold" : "text-gray-500"
                        }`}
                    >
                        {data.month}
                    </p>
                    </div>
                ))}
                </div>
            </div>
            
        </div>


        <div className="flex gap-4 justify-center mt-8">
            {stats.map((stat, index) => (
            <div key={index} className="flex items-center p-4 rounded-xl shadow-sm bg-white border border-gray-200 w-[190px]">
                <div className="flex items-center space-x-4">
                    <div>
                        <p className="text-gray-400 text-xs">{stat.title}</p>
                        <p className="text-xl font-semibold">{stat.value}</p>
                    </div>
                    <div className="bg-indigo-500 p-3 rounded-xl flex items-center justify-center">
                        {stat.icon}
                    </div>
                </div>
            </div>
            ))}

        </div>

        <div className="bg-white shadow-sm rounded-xl p-6 mt-8">
            <h2 className="text-md mb-4">Recent Activities</h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">ID</th>
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">Event Name</th>
                    <th className="py-2 px-4 text-blue-400 text-sm font-semibold">Date & Status</th>
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">Amount</th>
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity, index) => (
                    <tr key={index} className="border-b">
                        <td className="py-2 px-4 font-medium text-xs text-gray-600">{activity.id}</td>
                        <td className="py-2 px-4">
                        <div>{activity.event}</div>
                        <div className="text-sm text-gray-500 text-xs">Code: {activity.code}</div>
                        </td>
                        <td className="py-2 px-4 text-blue-600 font-medium text-xs">{activity.date}</td>
                        <td className="py-2 px-4 text-xs">
                        <div>{activity.amount}</div>
                        <div className="text-sm text-gray-500 text-xs">{activity.category}</div>
                        </td>
                        <td className="py-2 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${activity.badgeColor}`}>{activity.badge}</span>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
      
      {/* right side of the page*/}
      <div className="flex-[1] bg-[#F3F3F3] p-4">
        <div className="bg-white shadow-sm rounded-xl p-2 flex flex-col items-center">
            <div className="flex items-center justify-between w-full">
            <ChevronLeft className="cursor-pointer" onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))} />
            <h3 className="text-lg font-normal text-sm">{currentDate.format("MMMM YYYY")}</h3>
            <ChevronRight className="cursor-pointer" onClick={() => setCurrentDate(currentDate.add(1, 'month'))} />
            </div>
            
            <div className="flex gap-2 mt-4">
            {(!showFullMonth ? days : fullMonthDays).map((day, index) => (
                <div key={index} className={`flex flex-col items-center w-8 p-2 rounded-full ${day.date() === 14 ? "bg-black text-white" : "text-gray-500 bg-gray-100"}`}>
                <span className="text-xs font-semibold">{day.format("dd").charAt(0)}</span>
                <span className={`text-md font-bold ${day.date() === 14 ? "text-blue-400" : ""}`}>{day.date()}</span>
                </div>
            ))}
            </div>
            
        </div>

        <div className="flex flex-col gap-6 p-4 items-center">
            {/* First Event Card */}
            <div className="bg-white shadow-sm rounded-2xl p-4">
                <p className="text-sm font-semibold text-gray-500">Events Today</p>
                <div className="mt-2">
                <img
                    src="/Image.png"
                    alt="Event"
                    className="w-full h-32 object-cover rounded-lg"
                />
                </div>
                <h2 className="mt-2 text-sm">Creating Awesome Mobile Apps</h2>
                <p className="text-gray-500 text-xs">IEEE - UCSC</p>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-gray-500 text-xs">
                        <span className="mr-1 text-lg"><FaRegClock/></span> 1pm - 3pm
                    </div>
                    
                    <div className="flex -space-x-2">
                        <img className="w-6 h-6 rounded-full border border-white" src="/avatar1.jpg" alt="user" />
                        <img className="w-6 h-6 rounded-full border border-white" src="/avatar2.jpg" alt="user" />
                        <img className="w-6 h-6 rounded-full border border-white" src="/avatar3.jpg" alt="user" />
                        <img className="w-6 h-6 rounded-full border border-white" src="/avatar4.jpg" alt="user" />
                    </div>
                </div>
            </div>

            {/* Second Event Card */}
            <div className="bg-white shadow-sm rounded-2xl p-4">
                <img
                src="/Image.png"
                alt="Event"
                className="w-full h-32 object-cover rounded-lg"
                />
                <h2 className="mt-3 text-sm font-semibold">Creating Awesome Mobile Apps</h2>
                <p className="text-gray-500 text-xs">IEEE - UCSC</p>
                
                <div className="flex justify-between items-center mt-2">
                <p className="text-gray-500 text-xs">Progress</p>
                <p className="text-blue-600">120,000 LKR</p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-1 mt-2 relative">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: "50%" }}></div>
                    <div
                        className="absolute -top-1 right-0 bg-blue-600 w-3 h-3 rounded-full -mr-0"
                        style={{ right: `calc(50% - 0.5rem)` }} 
                    ></div>
                </div>



                <div className="flex justify-between items-center mt-2">
                <p className="text-gray-500 text-sm"><FaRegCalendar className="text-sm" /> 1 day</p>
                </div>

                <div className="flex justify-between mt-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg w-1/4 text-xs flex items-center justify-center">
                        Accept
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg w-1/4 text-xs flex items-center justify-center">
                        Reject
                    </button>
                    <button className="bg-yellow-400 text-white px-3 py-1 rounded-lg w-1/4 text-xs flex items-center justify-center">
                        More Info
                    </button>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
