import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { eventService } from "../../utils/api/company";

const EventsList = () => {
    const [events, setEvents] = useState([]);
    const [topEvent, setTopEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const res = await eventService.getAll();
                const fetchedEvents = res?.data?.events || [];
                setEvents(fetchedEvents);

                if (fetchedEvents.length > 0) {
                    const highestBudget = [...fetchedEvents]
                        .sort((a, b) => (b.budget || 0) - (a.budget || 0))[0];
                    setTopEvent(highestBudget);
                }
            } catch (err) {
                console.error("Failed to fetch events", err);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center w-full h-screen">Loading...</div>;
    }

    return (
        <div className="w-[83%] mt-[5%] bg-white ml-[17%]">
            <div className="flex min-h-screen bg-gray-100">
                {/* Main Content */}
                <main className="flex-1">
                    {/* Search Bar */}
                    <div className="flex items-center justify-center py-10 bg-gradient-to-r from-blue-200 to-purple-300">
                        <div className="relative w-2/3">
                            <input
                                type="text"
                                placeholder="Search by Event Name, Club Name"
                                className="w-full p-3 pl-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute px-6 py-2 text-white transform -translate-y-1/2 rounded-lg right-2 top-1/2 bg-zinc-700">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Trending Event */}
                    {topEvent && (
                        <section className="p-4 pl-20 mb-6 rounded-lg shadow bg-gradient-to-r from-sky-100 to-white">
                            <h2 className="pl-6 text-2xl font-bold">Most Trending Event</h2>
                            <div className="flex mt-4">
                                <img
                                    src={topEvent.banner || assets.defaultEventBanner} // Fallback image
                                    alt={topEvent.name}
                                    className="w-1/3 rounded-lg"
                                />
                                <div className="flex-1 pl-10 ml-4">
                                    <h3 className="text-xl font-bold">{topEvent.name}</h3>
                                    <p className="text-sm text-gray-600">
                                        {topEvent.description || "No description available"}
                                    </p>
                                    <div className="flex mt-2 space-x-10">
                                        <span className="flex flex-col items-center px-4 py-4 text-red-900 rounded bg-gradient-to-r from-stone-300 to-yellow-500">
                                            <span className="font-bold">Gold</span>
                                            <span>{topEvent.budget ? `${topEvent.budget} LKR` : "N/A"}</span>
                                        </span>
                                        <span className="flex flex-col items-center px-4 py-4 text-red-900 rounded bg-gradient-to-r from-neutral-200 to-neutral-300">
                                            <span className="font-bold">Silver</span>
                                            <span>{topEvent.budget ? `${Math.floor(topEvent.budget * 0.7)} LKR` : "N/A"}</span>
                                        </span>
                                        <span className="flex flex-col items-center px-4 py-4 text-red-900 rounded bg-gradient-to-r from-amber-600 to-neutral-300">
                                            <span className="font-bold">Bronze</span>
                                            <span>{topEvent.budget ? `${Math.floor(topEvent.budget * 0.5)} LKR` : "N/A"}</span>
                                        </span>
                                    </div>
                                    <button className="px-10 py-2 mt-4 text-white rounded bg-slate-800">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="relative p-4 overflow-hidden bg-white rounded-lg shadow group"
                            >
                                <img
                                    src={event.banner || assets.defaultEventBanner}
                                    alt={event.name}
                                    className="object-cover w-full h-40 rounded"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                                    <h3 className="text-lg font-bold text-white">{event.name}</h3>
                                    <p className="mt-2 text-sm text-white">{event.description || "No description"}</p>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Event Date: {event.date ? new Date(event.date).toLocaleDateString() : "TBD"}
                                    </p>
                                    <button className="px-4 py-2 mt-2 text-blue-900 bg-white rounded">
                                        Learn More
                                    </button>
                                </div>
                                <h3 className="mt-2 text-lg font-bold text-center">{event.name}</h3>
                                <p className="text-sm text-center text-gray-600">
                                    Event Date: {event.date ? new Date(event.date).toLocaleDateString() : "TBD"}
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EventsList;