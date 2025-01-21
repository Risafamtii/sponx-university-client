// Sidebar.jsx
import React from "react";
import { assets } from "../../assets/assets"; // Assuming assets are imported from the assets folder
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-blue-950 text-white w-64 h-screen p-4 hidden md:block">
      <div className="flex items-center">
        <img
          src={assets.image}
          alt="Logo"
          className="mr-4 h-[160px] w-[150px] ml-6 -mt-10 -mb-4"
        />
      </div>

      <nav className="mt-2 space-y-8 ml-8">
        <a
          href="#"
          className="flex items-center hover:bg-white p-2 rounded pl-4"
        >
          <FaHome className="mr-2 text-gray-400" />
          <span className="text-gray-50 hover:text-gray-400">Overview</span>
        </a>

        <a
          href="#"
          className="flex items-center hover:bg-white p-2 rounded pl-4 text-gray-400"
        >
          <FaUser className="mr-2 " />
          <span className="text-gray-50 hover:text-gray-400">Event</span>
        </a>
        <a
          href="#"
          className="flex items-center hover:bg-white p-2 rounded pl-4"
        >
          <FaCog className="mr-2 text-gray-400" />
          <span className="text-gray-50 hover:text-gray-400">Club Profile</span>
        </a>
        <a
          href="#"
          className="flex items-center hover:bg-white p-2 rounded pl-4"
        >
          <FaSignOutAlt className="mr-2 text-gray-400" />
          <span className="text-gray-50 hover:text-gray-400">Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
