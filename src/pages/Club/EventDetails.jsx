import { React, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { FaPenToSquare, FaSquareCheck } from "react-icons/fa6";
import { FaCrown, FaTrophy, FaMedal } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

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
  labels: ["WSO2", "WinSys", "sysco", "Creative Software"],
  datasets: [
    {
      label: "Bid Amount",
      data: [450, 400, 300, 600],
      backgroundColor: ["#f97316", "#6b7280", "#3b82f6", "#a855f7"], // orange, gray, blue, purple
    },
  ],
};

const barOptions = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => `$ ${value}`,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};


const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    name: "",
    type: "",
    date: "",
    description: "",
    location: "",
    budget: "",
    status: "active",
    banner: "",
    proposal: "",
    organizerId: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/events/${id}`);
        setEvent(res.data.event);
        setEditedEvent(res.data.event);
      } catch (err) {
        console.error("Failed to fetch event details", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!event) return <p>Event not found</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/events/update/${event.id}`,
        editedEvent
      );

      if (response.status === 200) {
        toast.success("Event updated successfully!");
        setEvent(response.data.updatedEvent || editedEvent);
        setEditedEvent(response.data.updatedEvent || editedEvent);
        setIsEditing(false);
      } else {
        toast.error("Failed to update the event.");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error("An error occurred while updating.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 w-[83%] ml-[17%]">
      {/* Info Section */}
      <div className="w-full bg-white p-6 rounded-lg shadow-lg ml-6 mt-16">
        <div className="flex items-center justify-between mb-4">
          <p className="text-3xl text-bolder mb-6">{event.name}</p>
          {/* Buttons */}
          <div className="mb-4 md:ml-96 flex flex-col md:flex-row gap-4">
            {isEditing ? (
              <button
                className="mt-4 flex items-center text-blue-600 px-4 py-2 rounded hover:text-blue-700"
                onClick={handleSave}
              >
                <FaSquareCheck className="mr-2 text-xl" />
                Save Changes
              </button>
            ) : (
              <button
                className="mt-4 flex items-center text-red-600 px-4 py-2 rounded hover:text-red-900"
                onClick={() => setIsEditing(true)}
              >
                <FaPenToSquare className="mr-2 text-xl" />
                Edit Event
              </button>
            )}
          </div>

        </div>
        <div className="flex items-start gap-12">
          {/* Image */}
          <div className="mt-1">
            <img
              src={`http://localhost:8080${event.banner}`}
              alt="Event Banner"
              className="w-[550px] h-[390px] rounded-lg object-cover"
            />
          </div>

          {/* Event Info */}
          <div className="w-1/2 space-y-4">
            {isEditing ? (
              <input
                type="text"
                name="type"
                value={editedEvent.type}
                onChange={handleChange}
                className="border border-blue-200 p-2 w-full rounded"
              />
            ) : (
              <h1 className="text-lg font-semibold">
                Type: <span className="font-bold">{event.type}</span>
              </h1>
            )}

            {isEditing ? (
              <input
                type="date"
                name="date"
                value={
                  editedEvent.date
                    ? editedEvent.date.split("T")[0]
                    : ""
                }
                onChange={handleChange}
                className="border border-blue-200 p-2 w-full rounded"
              />
            ) : (
              <h1 className="text-lg font-semibold">
                Date:{" "}
                <span className="font-bold">
                  {event.date?.split("T")[0]}
                </span>
              </h1>
            )}

            {isEditing ? (
              <textarea
                name="description"
                value={editedEvent.description}
                onChange={handleChange}
                className="border border-blue-200 p-2 w-full rounded"
              />
            ) : (
              <>
                <h2 className="text-lg font-semibold">Description</h2>
                <p className="text-gray-600 mt-2 leading-relaxed border-l-2 border-black pl-4">
                  {event.description}
                </p>
              </>
            )}

            {isEditing ? (
              <input
                type="text"
                name="location"
                value={editedEvent.location}
                onChange={handleChange}
                className="border border-blue-200 p-2 w-full rounded"
              />
            ) : (
              <h1 className="text-lg font-semibold">
                Location: <span className="font-bold">{event.location}</span>
              </h1>
            )}

            {isEditing ? (
              <input
                type="number"
                name="budget"
                value={editedEvent.budget}
                onChange={handleChange}
                className="border border-blue-200 p-2 w-full rounded"
              />
            ) : (
              <h1 className="text-lg font-semibold">
                Budget: <span className="font-bold">{event.budget}</span>
              </h1>
            )}

            {isEditing ? (
              <h1 className="text-lg font-semibold">
                Status:
                <span className="text-green-500 font-bold">{event.status}</span>
              </h1>
            ) : (
              <h1 className="text-lg font-semibold">
                Status:
                <span className="text-green-500 font-bold">{event.status}</span>
              </h1>
            )}


          </div>
        </div>
      </div>

      {/* Charts & Sponsorship */}
      <div className="mt-8 w-full bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-6 ml-6">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-xl">Biding Information</h3>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
              Stop Bid
            </button>
          </div>
          <div className="h-[300px] w-[650px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>


        <div className="bg-white p-6 rounded-2xl shadow-xl text-blue-950 w-[400px] ml-16">
          <div className="space-y-8 mt-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Sponsorship</h2>
              <span className="text-blue-600 font-bold text-sm">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-blue-500 h-2.5 rounded-full w-[90%]"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center  text-lg font-medium">
                <FaCrown className="text-purple-600 mr-3 text-xl" />
                Creative Software:{" "}
                <span className="ml-auto font-semibold">Rs. 40,000</span>
              </div>
              <div className="flex items-center text-lg font-medium">
                <FaTrophy className="text-orange-500 mr-3 text-xl" />
                WSO2: <span className="ml-auto font-semibold">Rs. 25,000</span>
              </div>
              <div className="flex items-center text-lg font-medium">
                <FaMedal className="text-gray-600 mr-3 text-xl" />
                WinSys: <span className="ml-auto font-semibold">Rs. 10,000</span>
              </div>
            </div>
            <hr className="my-3" />
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
