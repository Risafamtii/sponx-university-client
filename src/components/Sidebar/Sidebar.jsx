import React, { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { PiGavelLight } from "react-icons/pi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Overview');
  const navigate = useNavigate();
  
  const Menus = [
    { title: "Overview", route: "/overview"},
    { title: "My Bids", route: "/myevents", icon: <FaGavel /> },
    { title: "Profile", route: "/profile", icon: <FaUser /> },
    {
      title: <span style={{ color: 'red' }}>Logout</span>,
      spacing: true,
      icon: <IoIosLogOut style={{ color: 'red' }} />,
    },
  ];

  const handleMenuClick = (menuTitle, route) => {
    setActiveMenu(menuTitle); 
    if (route) {
      navigate(route);
    }
  };

  const handleSidebarToggle = () => {
    setOpen(!open);
    setSidebarOpen(!open); // Pass the open state to the parent
  };

  return (
    <div
      className={`mt-10 bg-white h-screen pt-8 ${
        open ? "w-60" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-blue-900 text-2xl rounded-full absolute -right-3 top-9 border border-blue-900 cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={handleSidebarToggle}
        aria-label="Toggle Sidebar"
      />
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`
              ${index === 3 ? "logout-item text-red-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-100 ml-4 mt-9" :
                "menu-item text-blue-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-100 ml-4"
              }
              ${
              menu.spacing ? "mt-9" : "mt-2"
            } ${activeMenu === menu.title ? "bg-slate-300" : ""}
            `}
            onClick={() => handleMenuClick(menu.title, menu.route)}
          >
            <span className="block float-left text-2xl">
              {menu.icon ? menu.icon : <RiDashboardFill />}
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
