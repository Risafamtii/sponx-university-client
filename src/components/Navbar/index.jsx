import React, { useState } from 'react';
import { assets } from "../../assets/assets";
import BreadCrumbs from '../BreadCrumbs';
import { IoSettings } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return(

<nav className="bg-white px-3 py-0.1 flex items-center justify-between">
    <div className="flex justify-between items-center">

    <div className="flex items-center">
      <img
                src={assets.logo}
                alt="Logo"
                className="h-[60px] w-auto mt-4"
                />
        </div>

    </div>
    <div className="flex-1 pl-[130px] mt-[10px]">
        <BreadCrumbs />
      </div>
    <div className="flex items-center gap-x-5">
    <button className="p-2 hover:bg-gray-100 rounded-full">
          <IoSettings className="h-6 w-6" />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <IoIosNotifications className="h-6 w-6" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3 {/* Example: Unread notifications count */}
          </span>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <CgProfile className="h-8 w-8 rounded-full" />
        </button>
    </div>

</nav>
  )
};

export default Navbar;
