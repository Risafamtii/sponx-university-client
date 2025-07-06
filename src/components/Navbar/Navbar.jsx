import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from "../../assets/assets";
import { IoSettings } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdClose, MdEdit } from "react-icons/md";
import menuConfig from '../../utils/menuConfig';
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import { connectCompanySocket, subscribeToNotifications, disconnectSocket } from '../../utils/socket';
import { getStoredNotifications, storeNotifications, removeNotificationById, addNotification } from '../../utils/notificationStore';

const Navbar = ({ userType, userId }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);
  const [notifications, setNotifications] = useState(getStoredNotifications());
  const [selectedNotification, setSelectedNotification] = useState(null);
  const location = useLocation();
  // Prevent duplicate notifications by eventId (or id)
  const deduplicateNotifications = (notifs) => {
    const seen = new Set();
    return notifs.filter(n => {
      const id = n.event?.eventId || n.id;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  };
  
  const getCurrentPage = () => {
    let currentPage = "Overview"; 

    if (!menuConfig[userType]) return currentPage;
    
    for (const item of menuConfig[userType]) {
      if (location.pathname.startsWith(item.basePath)) {
        currentPage = item.name;

        if (item.Children) {
          for (const child of item.Children) {
            if (location.pathname.startsWith(child.basePath)) {
              currentPage = (
                <span className="flex items-center gap-2">
                  {item.name} <FaArrowRight className="w-4 h-4" /> {child.name}
                </span>
              );
              break;
            }
          }
        }
        break;
      }
    }

    return currentPage;
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPage());

  useEffect(() => {
    setCurrentPage(getCurrentPage());
  }, [location.pathname]);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  const toggleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  // Real-time notification setup for company users
  // Real-time notification setup for company users
  useEffect(() => {
    let interval;
    if (userType === 'company' && userId) {
      connectCompanySocket(userId);
      subscribeToNotifications((notification) => {
        const notifId = notification.eventId || notification.id || Date.now();
        setNotifications((prev) => {
          // Deduplicate by eventId or id
          if (prev.some(n => (n.event?.eventId || n.id) === notifId)) return prev;
          const notifObj = {
            id: notifId,
            avatar: notification.organization?.[0]?.toUpperCase() || 'EV',
            name: notification.organization,
            action: notification.title,
            description: notification.message,
            time: 'Just now',
            event: notification // store all event details
          };
          const updated = addNotification(notifObj);
          return deduplicateNotifications(updated);
        });
        setNotificationOpen(true);
      });
      // Poll every 5 seconds for updates from localStorage
      interval = setInterval(() => {
        setNotifications(deduplicateNotifications(getStoredNotifications()));
      }, 5000);
      return () => {
        disconnectSocket();
        clearInterval(interval);
      };
    }
  }, [userType, userId]);

  return (
    <nav className="z-20 fixed flex items-center justify-between w-[83%] ml-[17%] px-4 py-2 bg-white shadow-md h-[10%]">
      <div className="flex-1 text-lg font-semibold text-gray-800">
        {currentPage}
      </div>

      <div className="flex items-center gap-x-5">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <IoSettings className="w-6 h-6" />
        </button>

        {/* Notifications Button */}
        <button
          className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={toggleNotification}
          aria-label="Notifications"
        >
          <IoIosNotifications className="w-6 h-6" />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full shadow-lg animate-pulse">
              {notifications.length}
            </span>
          )}
        </button>

        {/* Notifications Popup */}
        {notificationOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-25"
              onClick={toggleNotification}
            ></div>

            <div className="absolute z-50 bg-white border border-blue-100 rounded-lg shadow-2xl w-96 right-4 top-14 animate-fade-in-down">
              <div className="p-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <IoIosNotifications className="w-5 h-5 text-blue-500" /> Notifications
                </h2>
                <div className="pr-1 mt-4 overflow-y-auto max-h-64 custom-scrollbar">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-4 py-3 border-b last:border-none cursor-pointer transition-all duration-150 hover:bg-blue-50/70 ${selectedNotification && selectedNotification.id === notification.id ? 'bg-blue-100/60' : ''}`}
                        onClick={() => setSelectedNotification(notification)}
                        tabIndex={0}
                        aria-label={`Notification from ${notification.name}`}
                      >
                        <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full shadow bg-gradient-to-br from-blue-500 to-blue-700">
                          {notification.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-semibold">{notification.name}</span>{" "}
                            {notification.action}
                          </p>
                          <p className="text-sm text-gray-600">
                            {notification.description}
                          </p>
                          <p className="text-xs text-gray-400">{notification.time}</p>
                        </div>
                        <div className="flex flex-col gap-1 ml-2">
                          <button
                            className="text-green-600 transition-colors duration-150 hover:text-green-800"
                            title="Mark as done"
                            onClick={e => {
                              e.stopPropagation();
                              setNotifications(removeNotificationById(notification.id));
                              setSelectedNotification(null);
                            }}
                          >
                            &#10003;
                          </button>
                          <button
                            className="text-red-600 transition-colors duration-150 hover:text-red-800"
                            title="Dismiss"
                            onClick={e => {
                              e.stopPropagation();
                              setNotifications(removeNotificationById(notification.id));
                              setSelectedNotification(null);
                            }}
                          >
                            <MdClose className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="py-8 text-sm text-center text-gray-600">No new notifications</p>
                  )}
                  {/* Event Details Modal */}
                  {selectedNotification && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fade-in">
                      <div className="bg-white rounded-lg shadow-2xl p-6 w-[400px] relative border border-blue-100 animate-fade-in-up">
                        <button
                          className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
                          onClick={() => setSelectedNotification(null)}
                          aria-label="Close event details"
                        >
                          <MdClose className="w-6 h-6" />
                        </button>
                        <h3 className="mb-2 text-lg font-bold text-blue-700">Event Details</h3>
                        <div className="mb-2">
                          <span className="font-semibold">Event Name:</span> {selectedNotification.event?.eventName || selectedNotification.event?.name || selectedNotification.description}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Organization:</span> {selectedNotification.name}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Description:</span> {selectedNotification.event?.description || selectedNotification.description}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Date:</span> {selectedNotification.event?.date ? new Date(selectedNotification.event.date).toLocaleString() : selectedNotification.time}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Location:</span> {selectedNotification.event?.location || 'N/A'}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Budget:</span> {selectedNotification.event?.budget ? `₹${selectedNotification.event.budget}` : 'N/A'}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Type:</span> {selectedNotification.event?.type || 'N/A'}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    className="flex items-center justify-center gap-1 px-3 py-1 text-xs font-medium text-white transition-all duration-300 bg-red-600 rounded-full shadow hover:bg-red-700"
                    onClick={toggleNotification}
                    aria-label="Close notifications"
                  >
                    <MdClose className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Profile Button */}
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={toggleProfile}
        >
          <CgProfile className="w-8 h-8 rounded-full" />
        </button>

        {/* Logout Button */}
        <button
          className="p-2 text-red-600 transition-colors duration-200 rounded-full hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => setLogoutConfirmOpen(true)}
          title="Logout"
        >
          <CgLogOut className="w-6 h-6" />
        </button>

        {/* Logout Confirmation Popup */}
        {logoutConfirmOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-25"
              onClick={() => setLogoutConfirmOpen(false)}
            ></div>
            <div className="absolute z-50 p-6 bg-white rounded-lg shadow-xl right-4 top-14 animate-fade-in-down w-72">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900">Logout Confirmation</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Are you sure you want to logout?</p>
                </div>
                <div className="flex justify-center gap-3 mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    onClick={() => setLogoutConfirmOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Profile Popup */}
      {profileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-25"
            onClick={toggleProfile}
          ></div>

          <div className="absolute z-50 w-64 bg-white rounded-lg shadow-lg right-4 top-14 animate-fade-in-down">
            <div className="p-4">
              <div className="flex items-center">
                <a href='/profile'>
                  <img
                    src={assets.rac}
                    alt="Profile"
                    className="w-12 h-12 border-2 border-gray-300 rounded-full"
                  />
                </a>
                <div className="ml-3">
                  <h1 className="text-lg font-semibold text-gray-800">Rotaract</h1>
                  <p className="text-sm text-gray-500">rtr@example.com</p>
                </div>
              </div>
              <ul className="flex justify-center mt-4 space-x-3">
                <li>
                  <a
                    href="#"
                    className="text-[#1B264B] hover:text-[#354884]"
                    aria-label="Facebook"
                  >
                    <BsFacebook className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1B264B] hover:text-[#354884]"
                    aria-label="Instagram"
                  >
                    <BsInstagram className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1B264B] hover:text-[#354884]"
                    aria-label="Twitter"
                  >
                    <BsTwitter className="w-6 h-6" />
                  </a>
                </li>
              </ul>
              <div className="flex items-center justify-between gap-2 mt-4">
                <button
                  className="flex items-center justify-center gap-1 px-3 py-1 text-xs font-medium text-white transition-all duration-300 bg-red-600 rounded-full shadow hover:bg-red-700"
                  onClick={toggleProfile}
                >
                  <MdClose className="w-4 h-4" />
                </button>
                <button
                  className="flex items-center justify-center gap-1 px-3 py-1 text-xs font-medium text-white transition-all duration-300 bg-blue-600 rounded-full shadow hover:bg-blue-700"
                  onClick={toggleEditProfile}
                >
                  <MdEdit className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;