import React from "react";

const AdvertiseEvents = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center bg-center bg-cover h-96"
        style={{ backgroundImage: "url('/adPageHero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

                  {/* Search Bar */}
      <div className="flex flex-col items-center justify-center max-w-6xl gap-2 mx-auto mt-6 mb-10 rounded-lg md:flex-row">
        <input
          type="text"
          placeholder="Event Name, Club Name"
          className="w-full px-4 py-2 border rounded-md md:w-1/3 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="date"
          className="w-full px-4 py-2 border rounded-md md:w-1/4 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <select
          className="w-full px-4 py-2 border rounded-md md:w-1/4 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="" disabled selected>
            Select Club
          </option>
          <option value="club1">Club 1</option>
          <option value="club2">Club 2</option>
          <option value="club3">Club 3</option>
        </select>
        <button className="w-full px-6 py-2 text-white rounded-md md:w-auto bg-sky-950 hover:bg-gray-800">
          Search
        </button>
      </div>



      {/* Events Section */}
      <div className="max-w-6xl px-6 mx-auto mt-12">
        <h2 className="mb-10 text-2xl font-bold">Upcoming Events</h2>
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
              className="p-2 mb-4 overflow-hidden bg-white rounded-md shadow-md"
              style={{ height: "350px", width: "250px" }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-sm font-bold text-gray-400">{event.organizer}</p>
                <p className="mt-2 text-sm">{event.date}</p>
                <p className="mt-2 text-xs text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseEvents;
