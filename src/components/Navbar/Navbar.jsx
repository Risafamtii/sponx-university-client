import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from "../../assets/assets";
import { IoSettings } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdClose, MdEdit } from "react-icons/md";
import menuConfig from '../../utils/menuConfig';
import { FaArrowRight } from "react-icons/fa";

const Navbar = ({ userType }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const location = useLocation();
  
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

  // Update currentPage whenever the route changes
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

  const notifications = [
    {
      id: 1,
      avatar: "HA",
      name: "Hashir Ahamed",
      action: "assigned an issue to you",
      description: "[LMS] - AdminDashboard - Navbar (Develop)",
      time: "19 hours ago",
    },
    {
      id: 2,
      avatar: "AB",
      name: "Abdul Basith",
      action: "assigned an issue to you",
      description: "FE - Company overview",
      time: "5 days ago",
    },
    {
      id: 3,
      avatar: "HA",
      name: "Hashir Ahamed",
      action: "assigned an issue to you",
      description: "[LMS] - Login - Backend",
      time: "1 week ago",
    },
    {
      id: 4,
      avatar: "RI",
      name: "Risafa Imtiyas",
      action: "changed an issue from To Do to Done",
      description: "[UML] - Wireframe of UI",
      time: "2 weeks ago",
    },
  ];

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
          className="relative p-2 rounded-full hover:bg-gray-100"
          onClick={toggleNotification}
        >
          <IoIosNotifications className="w-6 h-6" />
          <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 text-xs text-white bg-red-500 rounded-full">
            3
          </span>
        </button>

        {/* Notifications Popup */}
        {notificationOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-25"
              onClick={toggleNotification}
            ></div>

            <div className="absolute z-50 bg-white rounded-lg shadow-lg w-96 right-4 top-14 animate-fade-in-down">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
                <div className="mt-4 overflow-y-auto max-h-64">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start gap-4 py-3 border-b last:border-none"
                      >
                        <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-500 rounded-full">
                          {notification.avatar}
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-semibold">{notification.name}</span>{" "}
                            {notification.action}
                          </p>
                          <p className="text-sm text-gray-600">
                            {notification.description}
                          </p>
                          <p className="text-xs text-gray-400">{notification.time}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">No new notifications</p>
                  )}
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    className="flex items-center justify-center gap-1 px-3 py-1 text-xs font-medium text-white transition-all duration-300 bg-red-600 rounded-full shadow hover:bg-red-700"
                    onClick={toggleNotification}
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