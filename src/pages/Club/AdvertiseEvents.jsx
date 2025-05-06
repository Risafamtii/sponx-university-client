import React, { useState } from "react";
import {assets} from '../../assets/assets'

import {
  Search,
  CalendarDays,
  Users,
  ChevronDown,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Filter
} from "lucide-react";

const AdvertiseEvents = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample event data
  const events = [
    {
      id: 1,
      title: "IEEE Xtreme 18.0 Hackathon",
      organizer: "IEEE Student Branch",
      date: "2024-11-19",
      time: "09:00 AM - 06:00 PM",
      location: "UCSC Main Auditorium",
      description: "24-hour competitive programming challenge with prizes for top performers",
      image: assets.event2,
      category: "tech",
    },
    {
      id: 2,
      title: "Annual Charity Gala",
      organizer: "Rotaract Club",
      date: "2024-12-05",
      time: "07:00 PM - 11:00 PM",
      location: "University Grand Ballroom",
      description: "Elegant evening fundraiser for local children's hospital",
      image: assets.event2,
      category: "social",
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      organizer: "Entrepreneurship Society",
      date: "2024-10-15",
      time: "02:00 PM - 05:00 PM",
      location: "Business School Building",
      description: "Present your startup idea to industry judges and win seed funding",
      image: assets.event2,
      category: "business",
    },
    {
      id: 4,
      title: "AI Workshop Series",
      organizer: "Computer Science Club",
      date: "2024-09-28",
      time: "10:00 AM - 12:00 PM",
      location: "CS Lab 302",
      description: "Hands-on sessions on machine learning fundamentals",
      image: assets.event2,
      category: "tech",
    },
    {
      id: 5,
      title: "Cultural Fest 2024",
      organizer: "International Students Association",
      date: "2024-11-02",
      time: "11:00 AM - 08:00 PM",
      location: "University Quadrangle",
      description: "Celebrate diversity with food, performances and exhibitions",
      image: assets.event2,
      category: "cultural",
    },
    {
      id: 6,
      title: "Environmental Cleanup",
      organizer: "Green Campus Initiative",
      date: "2024-10-21",
      time: "08:00 AM - 12:00 PM",
      location: "Campus Grounds",
      description: "Volunteer to help maintain our beautiful campus environment",
      image: assets.event2,
      category: "volunteer",
    }
  ];

  // Filter events based on active filter and search query
  const filteredEvents = events.filter(event => {
    const matchesFilter = activeFilter === "all" || event.category === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-8 mx-auto max-w-7xl ml-[17%] mt-12">
        <div className="flex flex-col items-center justify-between mb-8 space-y-4 md:flex-row md:space-y-0">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search events or organizations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:justify-end">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-full ${activeFilter === "all" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveFilter("tech")}
              className={`px-4 py-2 text-sm font-medium rounded-full ${activeFilter === "tech" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              Tech
            </button>
            <button
              onClick={() => setActiveFilter("social")}
              className={`px-4 py-2 text-sm font-medium rounded-full ${activeFilter === "social" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              Social
            </button>
            <button
              onClick={() => setActiveFilter("business")}
              className={`px-4 py-2 text-sm font-medium rounded-full ${activeFilter === "business" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              Business
            </button>
            <button
              onClick={() => setActiveFilter("cultural")}
              className={`px-4 py-2 text-sm font-medium rounded-full ${activeFilter === "cultural" ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
              Cultural
            </button>
          </div>
        </div>

       

        {/* Events Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {activeFilter === "all" ? "All Upcoming Events" : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Events`}
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"})
              </span>
            </h2>
            
          </div>

          {filteredEvents.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">No events found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <div key={event.id} className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-48"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <h3 className="text-lg font-bold text-white">{event.title}</h3>
                      <p className="text-sm text-blue-100">{event.organizer}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-3 text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4 mr-1.5" />
                      <span>{formatDate(event.date)}</span>
                      <Clock className="w-4 h-4 ml-3 mr-1.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center mb-3 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      <span>{event.location}</span>
                    </div>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-2">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <button className="px-4 py-2 text-sm font-medium text-blue-600 rounded-lg bg-blue-50 hover:bg-blue-100">
                        Learn More
                      </button>
                      <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                        Register <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default AdvertiseEvents;