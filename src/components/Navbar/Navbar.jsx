import React, { useState } from 'react';
import { assets } from "../../assets/assets";
import BreadCrumbs from '../BreadCrumbs';
import { IoSettings } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";


const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  const toggleEditProfile = () => {
    setEditProfile(!editProfile);
  }

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
    <nav className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-4 py-2 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-[55px] w-auto"
        />
      </div>

      <div className="flex-1 pl-[150px]">
        <BreadCrumbs />
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

                {editProfile && (
                <>
                  {/* Overlay */}
                  <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-25"
                    onClick={toggleEditProfile}
                  ></div>

                  {/* Form Popup */}
                  <div className="fixed z-50 w-4/5 max-w-lg p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl top-1/2 left-1/2">
                    <h2 className="text-xl font-semibold text-center text-[#1B264B]">
                      Edit Profile
                    </h2>
                    <form
                      className="mt-6 space-y-4 overflow-y-auto"
                      style={{ maxHeight: '60vh' }} // Optional: set a max-height to make the form scrollable
                    >
                      {/* Club Name */}
                      <div>
                        <label
                          htmlFor="clubName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Club Name
                        </label>
                        <input
                          type="text"
                          id="clubName"
                          name="clubName"
                          placeholder="Enter club name"
                          defaultValue="Rotaract Club of UCSC"
                          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                        />
                      </div>

                      {/* University */}
                      <div>
                        <label
                          htmlFor="university"
                          className="block text-sm font-medium text-gray-700"
                        >
                          University
                        </label>
                        <input
                          type="text"
                          id="university"
                          name="university"
                          placeholder="Enter university name"
                          defaultValue="University of Colombo"
                          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                        />
                      </div>

                      {/* Faculty */}
                      <div>
                        <label
                          htmlFor="faculty"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Faculty
                        </label>
                        <input
                          type="text"
                          id="faculty"
                          name="faculty"
                          placeholder="Enter faculty name"
                          defaultValue="School Of Computing"
                          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                        />
                      </div>

                      {/* Mission */}
                      <div>
                        <label
                          htmlFor="mission"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mission
                        </label>
                        <textarea
                          id="mission"
                          name="mission"
                          placeholder="Enter mission"
                          defaultValue="Social Service and Community Engagement"
                          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                          rows={3}
                        />
                      </div>

                      {/* Contact Person */}
                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-medium text-[#1B264B]">
                          Contact Person Details
                        </h3>
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter contact person name"
                            defaultValue="John Doe"
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                          />
                        </div>

                        {/* Position */}
                        <div>
                          <label
                            htmlFor="position"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Position
                          </label>
                          <input
                            type="text"
                            id="position"
                            name="position"
                            placeholder="Enter position"
                            defaultValue="President"
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            defaultValue="johndoe@rotaract.org"
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                          />
                        </div>

                        {/* Contact Number */}
                        <div>
                          <label
                            htmlFor="contactNumber"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            placeholder="Enter contact number"
                            defaultValue="+94 123 456 789"
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-[#1B264B] focus:border-[#1B264B]"
                          />
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex justify-end gap-4 pt-4 border-t">
                        <button
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                          onClick={toggleEditProfile}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 text-sm font-medium text-white bg-[#1B264B] rounded-md shadow hover:bg-[#3A466F]"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
                
              </div>

            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
