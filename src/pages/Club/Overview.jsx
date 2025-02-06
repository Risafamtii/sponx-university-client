import { React, useState } from "react";
import { Calendar, Eye, MessageCircle, Pen } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Overview() {
  const [selectedDate, setSelectedDate] = useState(14);
  const days = [10, 11, 12, 13, 14, 15, 16];
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  const doughnutData = {
    labels: ['Fashion', 'Accessories'],
    datasets: [
      {
        data: [251, 176],
        backgroundColor: ['#2563eb', '#67e8f9'],
        borderColor: ['#2563eb', '#67e8f9'],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  const barData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
    datasets: [
      {
        label: 'Primary',
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 30 + 20)),
        backgroundColor: '#2563eb',
        borderRadius: 4,
      },
      {
        label: 'Secondary',
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 40 + 10)),
        backgroundColor: '#67e8f9',
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Hi, IEEE STUDENT BRANCH,</h1>
          <p className="text-gray-500">Let's finish your task today!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-1 ml-3">Profile</h2>
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=200"
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold mb-1">Rotract Club</h2>
              <p className="text-sm text-gray-500 ">
                University of Colombo School of Computing
              </p>
              <p className="text-sm text-gray-500 mb-2">
                University of Colombo
              </p>
              <div className="flex gap-8 m-6">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Pen className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Eye className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Card */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-3 rounded-xl shadow-md w-full max-w-sm mx-auto h-40 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <FaChevronLeft className="text-gray-400 cursor-pointer" />
                <h3 className="text-base font-bold">July 2022</h3>
                <FaChevronRight className="text-gray-400 cursor-pointer" />
              </div>

              <div className="grid grid-cols-7 gap-2 text-center mb-1 text-gray-500 font-medium text-sm">
                {weekdays.map((day, index) => (
                  <div key={index}>{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 text-center">
                {days.map((day) => (
                  <div
                    key={day}
                    className={`relative p-2 rounded-full w-10 h-10 flex items-center justify-center text-sm 
                          ${
                            day === selectedDate
                              ? "bg-black text-white"
                              : "bg-gray-200 text-gray-600"
                          }`}
                    onClick={() => setSelectedDate(day)}
                  >
                    {day === selectedDate && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {day}
                      </span>
                    )}
                    {day !== selectedDate && day}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl shadow-md w-full max-w-sm mx-auto h-40">
              <div className="grid grid-cols-2 gap-4 pt-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">36</div>
                  <div className="text-lg text-gray-500">Upcoming Events</div>
                </div>
                <div className="text-center border-l-2 border-black pl-4">
                  <div className="text-3xl font-bold">36</div>
                  <div className="text-lg text-gray-500">Past Events</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2 -mt-1 ml-3">Upcoming Event</h2>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=100&h=100"
                alt="Event"
                className="w-[350px] h-[150px] rounded-lg object-cover"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Reid Shadow 1.0</h3>
              <p className="text-sm text-gray-500">30/12/2024</p>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-medium">
                    Bidding in Progress
                  </span>
                  <span className="text-sm font-medium">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-xl">Earnings</h3>
            <select className="text-sm text-gray-500 border rounded-md px-2 py-1">
              <option>This Week</option>
            </select>
          </div>
          <div className="flex gap-8 items-center">
            <div className="relative w-48 h-48 m-10">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <div>
                  <div className="font-medium">Fashion</div>
                  <div className="text-sm text-gray-500">251K</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-300"></div>
                <div>
                  <div className="font-medium">Accessories</div>
                  <div className="text-sm text-gray-500">176K</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-xl">Conversions</h3>
            <select className="text-sm text-gray-500 border rounded-md px-2 py-1">
              <option>This Week</option>
            </select>
          </div>
          <div className="h-[300px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>
    </div>
      </div>
  
  );
}

export default Overview;
