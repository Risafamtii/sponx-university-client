import { React, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaPlus,
} from "react-icons/fa";
import eventImg from "/club/event.svg";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Events</h1>
          <p className="text-gray-500">Find and manage your events.</p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Filter and Create Event Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-row md:flex-row items-center md:space-x-4">
            <div className="relative w-full md:w-auto mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search events..."
                className="w-[400px] p-2 border rounded-full pl-10"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="mt-4 md:mt-0">
              <select className="w-full md:w-auto p-2 border rounded-3xl">
                <option>All Events</option>
                <option>Upcoming Events</option>
                <option>Past Events</option>
              </select>
            </div>
            <div className="flex-grow"></div>
            <Link to="/club/createevent">
              <button className="w-full md:w-auto bg-blue-500 text-white p-2 px-4 rounded-3xl flex items-center justify-center ">
                <FaPlus className="mr-2" /> Create Event
              </button>
            </Link>
          </div>

          {/* Events List Section */}
          <div className="flex gap-10 flex-wrap">
            {events.map((event, index) => (
              <div
                key={index}
                className="p-4 max-w-[350px] bg-white rounded-2xl shadow-lg"
              >
                <img
                  src={eventImg}
                  alt="Event"
                  className=" h-32 object-cover rounded-t-2xl"
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
                    <div className="relative w-full mt-2 bg-gray-200 rounded-full h-2">
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
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-gray-500 flex gap-2">
                      <IoCalendarOutline className="text-black text-lg" />
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
