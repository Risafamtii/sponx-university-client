import { React, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaPlus,
} from "react-icons/fa";
import eventImg from "/club/event.svg";
import { IoCalendarOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function MyEvents() {
  const [selectedDate, setSelectedDate] = useState(14);
  const days = [10, 11, 12, 13, 14, 15, 16];
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  const events = [
    {
      name: "Halloween Fest 2024",
      type: "Fun and Activity",
      sponsorship: 90,
      date: "31 Dec 2024",
      status: "Active",
    },
    {
      name: "IEEE Xtream 2024",
      type: "Hackathon",
      sponsorship: 100,
      date: "07 Nov 2024",
      status: "Closed",
    },
    {
      name: "Reid Shadows 2024",
      type: "Fun and Activity",
      sponsorship: 25,
      date: "13 OCT 2024",
      status: "Closed",
    },
    {
      name: "Reid Shadows 2024",
      type: "Fun and Activity",
      sponsorship: 25,
      date: "13 OCT 2024",
      status: "Closed",
    },
  ];

  return (
    <div className=" bg-gray-100 p-6 w-[83%] ml-[17%] mt-[5%] flex items-center ">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Events</h1>
          <p className="text-gray-500">Find and manage your events.</p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Filter and Create Event Section */}
          <div className="flex flex-row items-center p-6 bg-white shadow-sm rounded-2xl md:flex-row md:space-x-4">
            <div className="relative w-full mb-4 md:w-auto md:mb-0">
              <input
                type="text"
                placeholder="Search events..."
                className="w-[400px] p-2 border rounded-full pl-10"
              />
              <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            </div>
            <div className="mt-4 md:mt-0">
              <select className="w-full p-2 border md:w-auto rounded-3xl">
                <option>All Events</option>
                <option>Upcoming Events</option>
                <option>Past Events</option>
              </select>
            </div>
            <div className="flex-grow"></div>
            <NavLink to="/club/createevent">
              <button className="flex items-center justify-center w-full p-2 px-4 text-white bg-blue-500 md:w-auto rounded-3xl ">
                <FaPlus className="mr-2" /> Create Event
              </button>
            </NavLink>
          </div>

          {/* Events List Section */}
          <div className="flex flex-wrap gap-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="p-4 max-w-[350px] bg-white rounded-2xl shadow-lg"
              >
                <img
                  src={eventImg}
                  alt="Event"
                  className="object-cover h-32 rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-sm text-gray-500">{event.type}</p>
                  <div className="mt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sponsorship</span>
                      <span className="text-sm font-medium">
                        {event.sponsorship}%
                      </span>
                    </div>
                    <div className="relative w-full h-2 mt-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${
                          event.sponsorship < 30
                            ? "bg-red-500"
                            : event.sponsorship === 100
                            ? "bg-green-400"
                            : "bg-blue-500"
                        }`}
                        style={{ width: `${event.sponsorship}%` }}
                      ></div>
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 right-0 w-3 h-3 -ml-1 rounded-full ${
                          event.sponsorship < 30
                            ? "bg-red-500"
                            : event.sponsorship === 100
                            ? "bg-green-400"
                            : "bg-blue-500"
                        }`}
                        style={{ left: `${event.sponsorship}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="flex gap-2 text-sm text-gray-500">
                      <IoCalendarOutline className="text-lg text-black" />
                      {event.date}
                    </p>
                    <span
                      className={`text-sm font-medium ${
                        event.status === "Active"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEvents;