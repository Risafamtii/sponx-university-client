import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import axios from 'axios';

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('http://localhost:8080/api/v1/events');
                setEvents(res.data);
            } catch (err) {
                console.error("Failed to fetch events", err);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="w-[83%] mt-[5%] bg-white ml-[17%] ">
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
                    <section className="bg-gradient-to-r from-sky-100 to-white pl-20 p-4 shadow rounded-lg mb-6">
                        <h2 className="text-2xl font-bold pl-6">Most Trending Event</h2>
                        <div className="flex mt-4">
                            <img
                                src={assets.image2}
                                alt="Career Fair"
                                className="w-3/3 rounded"
                            />
                            <div className="ml-4 flex-1 pl-10">
                                <h3 className="text-xl font-bold">Career Fair Day - 2025</h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                                </p>
                                <div className="flex space-x-10 mt-2">
                                    <span className="bg-gradient-to-r from-stone-300 to-yellow-500 px-4 py-4 rounded text-red-900 flex flex-col items-center">
                                        <span className="font-bold">Gold</span>
                                        <span>120,000 LKR</span>
                                    </span>
                                    <span className="bg-gradient-to-r from-neutral-200 to-neutral-300 px-4 py-4 rounded text-red-900 flex flex-col items-center">
                                        <span className="font-bold">Silver</span>
                                        <span>80,000LKR</span>
                                    </span>
                                    <span className="bg-gradient-to-r from-amber-600 to-neutral-300 px-4 py-4 rounded text-red-900 flex flex-col items-center">
                                        <span className="font-bold">Bronze</span>
                                        <span>50,000LKR</span>
                                    </span>

                                </div>
                                <button className="mt-4 bg-slate-800 text-white px-10 py-2 rounded">Read More</button>
                            </div>
                        </div>
                    </section>

                    {/* Events Grid */}
                    <div className="p-5 grid grid-cols-3 gap-4">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="relative bg-white p-4 shadow rounded-lg overflow-hidden group"
                            >
                                <img
                                    src={event.banner}
                                    alt={event.name}
                                    className="w-full h-40 object-cover rounded"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
                                    <h3 className="text-lg font-bold text-white">{event.name}</h3>
                                    <p className="text-white text-sm mt-2">{event.description}</p>
                                    <p className="mt-2 text-sm text-gray-300">Event Date: {new Date(event.date).toLocaleDateString()}</p>
                                    <button className="mt-2 bg-white text-blue-900 px-4 py-2 rounded">Learn More</button>
                                </div>
                                <h3 className="mt-2 text-lg font-bold text-center">{event.name}</h3>
                                <p className="text-gray-600 text-sm text-center">Event Date: {new Date(event.date).toLocaleDateString()}</p>
                            </div>
                        ))}

                        
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EventsList;
