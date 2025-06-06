import React, { useEffect, useState } from 'react';
import event1 from "../../assets/img/event1.png";
import WSO2 from '../../assets/img/WSO2.png';
import { Filter } from 'lucide-react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import coverpic from '../../assets/img/coverpic.png';
import propic from '../../assets/img/pro.png';
import location from '../../assets/img/location.png';
import phone from '../../assets/img/Phone.png';
import mail from '../../assets/img/Mail.png';
import { eventService } from '../../utils/api/admin';
import { LoadingDots } from '../../components/Loading';

const Events = () => {
  const [activeBar, setActiveBar] = useState('Approved');
  const [events, setEvents] = useState([]);
  const [topevents, setTopevents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  
  const tabs = ["Approved", "Pending", "Completed", "Rejected"];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await eventService.getAll();
        setEvents(res?.data?.events || []);

        const upcoming = res?.data?.events
          ?.filter(event => event.status === 'APPROVED')
          ?.sort((a, b) => new Date(a.date) - new Date(b.date))
          ?.slice(0, 3) || [];
        setTopevents(upcoming);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
        setInitialLoad(false);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredEvents = Array.isArray(events) 
    ? events.filter(event => {
        switch (activeBar) {
          case "Approved":
            return event?.status === 'APPROVED';
          case "Pending":
            return event?.status === 'PENDING' || event?.status === 'DRAFT';
          case "Completed":
            return event?.status === 'COMPLETED';
          case "Rejected":
            return event?.status === 'REJECTED';
          default:
            return true;
        }
      })
    : [];

  if (initialLoad) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <LoadingDots />
      </div>
    );
  }

  return (
    <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg flex flex-col items-center py-4 h-[90vh] overflow-y-auto">
      {/* Tabs Navigation */}
      <div className="flex justify-center gap-10 w-[60%] py-2 rounded-full border border-gray-300 font-semibold bg-gray-100 shadow-sm">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer relative px-4 py-1 transition-colors duration-300 ${
              activeBar === tab ? "text-blue-700 font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveBar(tab)}
          >
            {tab}
            {activeBar === tab && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-700 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center w-full h-64">
          <LoadingDots />
        </div>
      ) : (
        <>
          {activeBar === "Approved" && (
            <>
              <div className="w-[90%] mt-9 rounded-2xl">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {topevents.length > 0 ? (
                    topevents.map((event) => (
                      <div
                        key={event.id}
                        className="flex p-4 transition-shadow duration-300 bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl"
                      >
                        <div className="w-1/4 h-24 mr-4 overflow-hidden rounded-lg">
                          <img
                            src={event.banner || event1}
                            alt="Event"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {event.name}
                          </h3>
                          <p className="mb-2 text-sm text-gray-500">
                            Due: {formatDate(event.date)}
                          </p>
                          <p className="mb-1 text-sm text-gray-600">Progress</p>
                          <div
                            className={`w-full h-2 rounded-full mb-2 ${
                              event.status === "APPROVED"
                                ? "bg-green-500"
                                : event.status === "PENDING"
                                ? "bg-blue-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600">
                              Sponsored by:
                            </span>
                            <img
                              src={WSO2}
                              alt="Company"
                              className="object-cover w-[40%] h-auto rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 py-10 text-center text-gray-500">
                      No approved events found
                    </div>
                  )}
                </div>
              </div>

              <div className="w-[90%] mt-4 border-2 shadow-2xl rounded-2xl">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 border rounded-full shadow-sm cursor-pointer hover:bg-gray-200">
                    <Filter />
                    <button className="font-medium">Filter</button>
                  </div>

                  <div className="relative w-1/4">
                    <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-10 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  {filteredEvents.length > 0 ? (
                    <table className="w-full bg-white rounded-lg shadow">
                      <thead>
                        <tr className="text-sm font-semibold text-gray-600 uppercase bg-blue-50">
                          <th className="px-6 py-4 text-left">Name</th>
                          <th className="px-6 py-4 text-center">Due Date</th>
                          <th className="px-6 py-4 text-center">Budget</th>
                          <th className="px-6 py-4 text-center">Status</th>
                          <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-700">
                        {filteredEvents.map((event) => (
                          <tr key={event.id} className="transition duration-200 border-b hover:bg-gray-100">
                            <td className="flex items-center gap-4 px-6 py-4">
                              <img 
                                src={event.banner || event1} 
                                alt="Avatar" 
                                className="object-cover w-10 h-10 rounded-full" 
                              />
                              <div>
                                <p className="font-semibold text-gray-800">{event.name}</p>
                                <p className="text-xs text-gray-500">{event.organizer?.user?.name}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">{formatDate(event.date)}</td>
                            <td className="px-6 py-4 text-center">${event.budget}</td>
                            <td className="px-6 py-4 text-center">
                              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                event.status === "APPROVED" ? "text-green-600 bg-green-100" :
                                event.status === "PENDING" ? "text-yellow-600 bg-yellow-100" :
                                event.status === "COMPLETED" ? "text-blue-600 bg-blue-100" :
                                "text-red-600 bg-red-100"
                              }`}>
                                {event.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Link to={`/admin/events/view/${event.id}`}>
                                <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200">View</button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="w-full py-10 text-center text-gray-500">
                      No approved events found
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {activeBar === "Pending" && (
            <>
              <div className="flex items-center justify-between w-full px-[5%] my-3 pt-3">
                <div className='flex items-center gap-3 px-4 py-2 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
                  <Filter />
                  <button className='font-medium'>Filter</button>
                </div>
                <div className="relative w-1/4">
                  <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-10 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center w-full gap-4 mt-4">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map(event => (
                    <div key={event.id} className='w-[90%] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'>
                      <div className='relative'>
                        <img src={event.banner || coverpic} alt="Cover" className='object-cover w-full h-20'/>
                      </div>
                      <div className="px-4 py-6">
                        <div className='flex items-center justify-between'>
                          <h2 className='text-xl font-extrabold text-gray-800'>{event.name}</h2>
                          <Link to={`/admin/events/view/${event.id}`}>
                            <button className='px-4 py-1 font-medium text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-800'>View</button>
                          </Link>
                        </div>
                        <div className='flex flex-wrap items-center justify-between gap-4 mt-4 font-medium text-gray-700 text-md'>
                          <div className='flex items-center gap-2'><img src={propic} alt="" className='h-4'/>{event.organizer?.user?.name}</div>
                          <div className='flex items-center gap-2'><img src={location} alt="" className='h-4'/>{event.location}</div>
                          <div className='flex items-center gap-2'><img src={phone} alt="" className='h-4'/>{event.organizer?.user?.phone || 'N/A'}</div>
                          <div className='flex items-center gap-2'><img src={mail} alt="" className='h-4'/>{event.organizer?.user?.email}</div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full py-10 text-center text-gray-500">
                    No pending events found
                  </div>
                )}
              </div>
            </>
          )}

          {activeBar === "Completed" && (
            <>
              <div className="flex items-center justify-between w-full px-[5%] my-3 pt-3">
                <div className='flex items-center gap-3 px-4 py-2 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
                  <Filter />
                  <button className='font-medium'>Filter</button>
                </div>
                <div className="relative w-1/4">
                  <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-10 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center w-full gap-4 mt-4">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map(event => (
                    <div key={event.id} className='w-[90%] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'>
                      <div className='relative'>
                        <img src={event.banner || coverpic} alt="Cover" className='object-cover w-full h-20'/>
                      </div>
                      <div className="px-4 py-6">
                        <div className='flex items-center justify-between'>
                          <h2 className='text-xl font-extrabold text-gray-800'>{event.name}</h2>
                          <div className='flex items-center gap-4'>
                            <button className='px-4 py-1 font-medium text-white transition duration-300 bg-[#131822] rounded-full hover:bg-[#0a0e15]'>Generate Report</button>
                            <Link to={`/admin/events/view/${event.id}`}>
                              <button className='px-4 py-1 font-medium text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-800'>View</button>
                            </Link>
                          </div>
                        </div>
                        <div className='flex flex-wrap items-center justify-between gap-4 mt-4 font-medium text-gray-700 text-md'>
                          <div className='flex items-center gap-2'><img src={propic} alt="" className='h-4'/>{event.organizer?.user?.name}</div>
                          <div className='flex items-center gap-2'><img src={location} alt="" className='h-4'/>{event.location}</div>
                          <div className='flex items-center gap-2'><img src={phone} alt="" className='h-4'/>{event.organizer?.user?.phone || 'N/A'}</div>
                          <div className='flex items-center gap-2'><img src={mail} alt="" className='h-4'/>{event.organizer?.user?.email}</div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full py-10 text-center text-gray-500">
                    No completed events found
                  </div>
                )}
              </div>
            </>
          )}

          {activeBar === "Rejected" && (
            <>
              <div className="flex items-center justify-between w-full px-[5%] my-3 pt-3">
                <div className='flex items-center gap-3 px-4 py-2 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
                  <Filter />
                  <button className='font-medium'>Filter</button>
                </div>
                <div className="relative w-1/4">
                  <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-10 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="w-full p-4 mt-9 rounded-2xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center p-4 transition-shadow duration-300 bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl"
                      >
                        <div className="w-1/4 h-24 mr-4 overflow-hidden rounded-lg">
                          <img
                            src={event.banner || event1}
                            alt="Event"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {event.name}
                          </h3>
                          <p className="mb-2 text-sm text-gray-500">
                            Due: {formatDate(event.date)}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              event.status === "REJECTED" ? "text-red-600 bg-red-100" : ""
                            }`}>
                              {event.status}
                            </span>
                            <Link to={`/admin/events/view/${event.id}`}>
                              <button className='px-4 py-2 text-sm text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200'>
                                View
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 py-10 text-center text-gray-500">
                      No rejected events found
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Events;