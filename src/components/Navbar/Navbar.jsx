import React from 'react';
import { assets } from "../../assets/assets";
import BreadCrumbs from '../BreadCrumbs';
import { IoSettings } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-0.1 flex items-center justify-between fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-[55px] w-auto mt-4"
          />
        </div>
      </div>

      <div className="flex-1 pl-[150px] mt-[10px]">
        <BreadCrumbs />
      </div>

      <div className="flex items-center gap-x-5">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <IoSettings className="w-6 h-6" />
        </button>

        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <IoIosNotifications className="w-6 h-6" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 text-xs text-white bg-red-500 rounded-full">
            3 {/* Example: Unread notifications count */}
          </span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100">
          <CgProfile className="w-8 h-8 rounded-full" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;