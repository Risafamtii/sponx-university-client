import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const EventsList = () => {
    const events = Array(9).fill({
        title: "IEEE EXTREME 1.0",
        date: "22.12.2025",
        image: "https://via.placeholder.com/150", // Replace with actual images
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    });

    return (
        <div className="w-[83%] bg-white ml-[17%] ">
            <div className="flex min-h-screen bg-gray-100">


                {/* Main Content */}
                <main className="flex-1">
                    {/* Search Bar */}
                    <div className="flex justify-center items-center bg-gradient-to-r from-blue-200 to-purple-300 py-10">
                        <div className="relative w-2/3">
                            <input
                                type="text"
                                placeholder="Search by Event Name, Club Name"
                                className="w-full p-3 pl-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-700 text-white px-6 py-2 rounded-lg">
                                Search
                            </button>
                        </div>
                    </div>


                    {/* Trending Event */}
                    <section className="bg-white p-6 shadow rounded-lg mb-6">
                        <h2 className="text-xl font-bold">Most Trending Event</h2>
                        <div className="flex mt-4">
                            <img
                                src="https://via.placeholder.com/300"
                                alt="Career Fair"
                                className="w-1/3 rounded"
                            />
                            <div className="ml-4 flex-1">
                                <h3 className="text-lg font-bold">Career Fair Day - 2025</h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="flex space-x-2 mt-2">
                                    <span className="bg-yellow-500 px-2 py-1 rounded text-white">Gold 120,000LKR</span>
                                    <span className="bg-gray-500 px-2 py-1 rounded text-white">Silver 80,000LKR</span>
                                    <span className="bg-orange-500 px-2 py-1 rounded text-white">Bronze 50,000LKR</span>
                                </div>
                                <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded">Read More</button>
                            </div>
                        </div>
                    </section>

                    {/* Events Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="relative bg-white p-4 shadow rounded-lg overflow-hidden group"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-40 object-cover rounded"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
                                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                                    <p className="text-white text-sm mt-2">{event.description}</p>
                                    <p className="mt-2 text-sm text-gray-300">Event Date: {event.date}</p>
                                    <button className="mt-2 bg-white text-blue-900 px-4 py-2 rounded">Learn More</button>
                                </div>
                                <h3 className="mt-2 text-lg font-bold text-center">{event.title}</h3>
                                <p className="text-gray-600 text-sm text-center">Event Date: {event.date}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EventsList;
