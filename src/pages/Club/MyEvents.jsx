import { React, useState, useEffect } from "react";
import { FaSearch, FaPlus, FaFilter } from "react-icons/fa";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MyEvents = () => {
  const navigate = useNavigate();
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value === "") {
      setFilteredEvents(allEvents);
    } else {
      const filtered = allEvents.filter(event => 
        event.name.toLowerCase().includes(value.toLowerCase()) ||
        event.description?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  };

  const applyFilter = (filterType) => {
    setActiveFilter(filterType);
    const now = new Date();
    
    switch(filterType) {
      case "upcoming":
        setFilteredEvents(allEvents.filter(event => new Date(event.date) > now));
        break;
      case "past":
        setFilteredEvents(allEvents.filter(event => new Date(event.date) <= now));
        break;
      default:
        setFilteredEvents(allEvents);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:8080/api/v1/events/organizer/1");
        setAllEvents(res.data.events);
        setFilteredEvents(res.data.events);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex gap-6 p-6 w-[83%] ml-[17%] mt-[5%] items-start py-4 min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Events</h1>
          <p className="text-gray-600">Manage and organize your upcoming and past events</p>
        </div>

        <div className="flex flex-col p-6 mb-8 bg-white shadow-sm rounded-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events by name or description..."
                className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
                <select 
                  className="p-3 pl-10 pr-8 bg-white border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => applyFilter(e.target.value)}
                  value={activeFilter}
                >
                  <option value="all">All Events</option>
                  <option value="upcoming">Upcoming Events</option>
                  <option value="past">Past Events</option>
                </select>
              </div>
              
              <NavLink 
                to="/org/createevent"
                className="flex items-center justify-center p-3 px-6 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                <FaPlus className="mr-2" /> 
                <span className="whitespace-nowrap">Create Event</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Events List Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            {activeFilter === 'upcoming' ? 'Upcoming Events' : 
             activeFilter === 'past' ? 'Past Events' : 'All Events'}
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'})
            </span>
          </h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="overflow-hidden bg-white shadow-sm rounded-xl">
                  <Skeleton height={160} />
                  <div className="p-4">
                    <Skeleton count={2} />
                    <Skeleton width={100} />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => navigate("/club/eventdetails", { state: { event } })}
                  className="overflow-hidden transition-shadow duration-200 bg-white shadow-sm cursor-pointer rounded-xl hover:shadow-md"
                >
                  <div className="relative h-48 overflow-hidden">
                    {event.banner ? (
                      <img
                        src={`http://localhost:8080${event.banner}`}
                        alt={event.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-50 to-gray-100">
                        <span className="text-gray-400">No banner image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{event.name}</h3>
                      <span className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <p className="mb-4 text-sm text-gray-600 line-clamp-2">{event.description}</p>
                    
                    <div className="flex flex-col space-y-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <IoCalendarOutline className="mr-2 text-gray-400" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center">
                          <IoLocationOutline className="mr-2 text-gray-400" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 bg-white shadow-sm rounded-xl">
              <div className="max-w-md text-center">
                
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {searchTerm ? "No matching events found" : "No events available"}
                </h3>
                <p className="mt-2 text-gray-500">
                  {searchTerm 
                    ? "Try adjusting your search or filter to find what you're looking for."
                    : activeFilter === 'upcoming' 
                      ? "You don't have any upcoming events scheduled."
                      : "You don't have any past events yet."}
                </p>
                {!searchTerm && activeFilter !== 'all' && (
                  <button 
                    onClick={() => applyFilter('all')}
                    className="px-4 py-2 mt-4 text-sm font-medium text-blue-600 rounded-md bg-blue-50 hover:bg-blue-100"
                  >
                    View all events
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;