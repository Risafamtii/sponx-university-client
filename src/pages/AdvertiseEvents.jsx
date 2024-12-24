import React from "react";

const AdvertiseEvents = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('/adPageHero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

                  {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6 mb-10 rounded-lg mx-auto max-w-6xl">
        <input
          type="text"
          placeholder="Event Name, Club Name"
          className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="date"
          className="w-full md:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <select
          className="w-full md:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="" disabled selected>
            Select Club
          </option>
          <option value="club1">Club 1</option>
          <option value="club2">Club 2</option>
          <option value="club3">Club 3</option>
        </select>
        <button className="w-full md:w-auto px-6 py-2 bg-sky-950  hover:bg-gray-800 text-white rounded-md hover:bg-blue-700">
          Search
        </button>
      </div>



      {/* Events Section */}
      <div className="mt-12 mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold mb-10">Upcoming Events</h2>
        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Event Cards */}
          {[
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "/Picture.png",
            },
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "/Picture.png",
            },
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "/Picture.png",
            },
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "/Picture.png",
            },
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "/Picture.png",
            },
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "/Picture.png",
            },
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "/Picture.png",
            },
            {
              title: "IEEE Xtreme 18.0",
              organizer: "IEEE Student Branch UCSC",
              date: "19 November 2024",
              description: "Gear up for the Competition...",
              image: "/Picture.png",
            },
            
            // Add more events here...
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden mb-4 p-2"
              style={{ height: "350px", width: "250px" }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-sm text-gray-400 font-bold">{event.organizer}</p>
                <p className="text-sm mt-2">{event.date}</p>
                <p className="text-xs text-gray-700 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseEvents;
