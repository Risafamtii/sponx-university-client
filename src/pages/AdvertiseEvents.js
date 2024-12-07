import React from "react";

const AdvertiseEvents = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/adPageHero.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
      </div>

      {/* Search Bar */}
      <div className="py-4 px-6 flex flex-col md:flex-row items-center justify-center gap-4 -mt-8 rounded-lg mx-auto max-w-6xl">
        <input
          type="text"
          placeholder="Event Name, Club Name"
          className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Event Date"
          className="w-full md:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Club Name"
          className="w-full md:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Events Section */}
      <div className="mt-12 mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Event Cards */}
          {[
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "https://via.placeholder.com/400x250",
            },
            {
              title: "Paris",
              organizer: "SIDE",
              date: "Wed 25 Jan - Fri 27 Jan",
              description: "A Tour of the City...",
              image: "https://via.placeholder.com/400x250",
            },
            // Add more events here...
          ].map((event, index) => (
            <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[150px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.organizer}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-700 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseEvents;
