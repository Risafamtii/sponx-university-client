import React, { useState} from 'react';
import event1 from "../../assets/img/event1.png";
import WSO2 from '../../assets/img/WSO2.png';
import { Filter } from 'lucide-react';
import { FaSearch } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


const Events = () => {
  const [activeBar, setActiveBar] = useState('Approved');

  const tabs = ["Approved", "Pending", "Completed"];

  const eventCard = [
    {
      id: 1,
      title: "Reid Handawaa UOC",
      eventImage: event1,
      companyImage: WSO2,
      statusColor: "green-500",
      dueDate: "2024.01.01",
    },
    {
      id: 2,
      title: "Reid Handawa",
      eventImage: event1,
      companyImage: WSO2,
      statusColor: "blue-500",
      dueDate: "2024.01.01",
    },
    {
      id: 3,
      title: "Reid Handawa",
      eventImage: event1,
      companyImage: WSO2,
      statusColor: "red-500",
      dueDate: "2024.01.01",
    },
  ];

  const activities = [
    {
      author: "IEEE EXTREME",
      subtext: "IEEE-Student Branch",
      dueDate: "2025.10.10",
      progress: "Rs.100,000",
      statusColor: "green-500",
      status:"Pending",
      avatar: assets.compro
    },
    {
      author: "Haloween Fiesta",
      subtext: "GAVEL-UOC",
      dueDate: "2025.10.10",
      progress: "Rs.45,000",
      statusColor: "blue-500",
      status:"In Progress",
      avatar: assets.compro
    },
    {
      author: "Rotaract-Baxx",
      subtext: "UJFE",
      dueDate: "2025.10.10",
      progress: "Rs.200,000",
      statusColor: "red-500",
      status:"Completed",
      avatar: assets.compro
    }
  ];

  return (
    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg flex flex-col items-center py-4 h-[90vh] overflow-y-auto'>
      <div className="flex justify-center gap-10 w-[60%] py-2 rounded-full border border-gray-300 font-semibold bg-gray-100 shadow-sm">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer relative px-4 py-1 transition-colors duration-300 ${activeBar === tab ? "text-blue-700 font-bold" : "text-gray-500"}`}
            onClick={() => setActiveBar(tab)}
          >
            {tab}
            {activeBar === tab && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-700 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      <div className='w-full p-4 mt-9 rounded-2xl'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {eventCard.map((event) => (
            <div
              key={event.id}
              className='flex items-center p-4 transition-shadow duration-300 bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl'
            >
              <div className='w-1/4 h-24 mr-4 overflow-hidden rounded-lg'>
                <img
                  src={event.eventImage}
                  alt='Event'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-gray-800'>
                  {event.title}
                </h3>
                <p className='mb-2 text-sm text-gray-500'>Due: {event.dueDate}</p>
                <p className='mb-1 text-sm text-gray-600'>Progress</p>
                <div
                  className={`w-full h-2 rounded-full mb-2 ${
                    event.statusColor === 'green-500'
                      ? 'bg-green-500'
                      : event.statusColor === 'blue-500'
                      ? 'bg-blue-500'
                      : 'bg-red-500'
                  }`}
                ></div>
                <div className='flex items-center gap-2'>
                  <span className='text-sm font-medium text-gray-600'>Sponsored by:</span>
                  <img
                    src={event.companyImage}
                    alt='Company'
                    className='object-cover w-[40%] h-auto rounded-full'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="p-4 bg-white border-2 shadow-2xl w-[97%] itemt-4 rounded-2xl">
        <div className="flex items-center justify-between w-full mb-4 ">
          <div className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 border rounded-full shadow-sm cursor-pointer hover:bg-gray-200">
            <Filter />
            <button className="font-medium">Filter</button>
          </div>
          
          
          <div className="relative w-1/4">
            <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-10 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>
        </div>

  
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="text-sm font-semibold text-gray-600 uppercase bg-blue-50">
                <th className="px-6 py-4 text-center">Authors</th>
                <th className="px-6 py-4 text-center">Due Date</th>
                <th className="px-6 py-4 text-center">Budget</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {activities.map((activity, index) => (
                <tr 
                  key={index} 
                  className="transition duration-200 border-b hover:bg-gray-100"
                >
                  <td className="flex items-center gap-4 px-6 py-4">
                    <img 
                      src={activity.avatar} 
                      alt="Avatar" 
                      className="object-cover w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{activity.author}</p>
                      <p className="text-xs text-gray-500">{activity.subtext}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-center text-gray-600">
                    {activity.dueDate}
                  </td>
                  <td className="px-6 py-4 font-medium text-center text-gray-600">
                    {activity.progress}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        activity.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : activity.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link 
                    to= "/admin/events/view">
                    <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200">
                      View
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Events;
