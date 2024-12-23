import React, { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import "../Sidebar/Sidebar.css"

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText />},
    { title: "Media", icon:<AiOutlineFileText /> },
    { title: "Analytics",icon:<AiOutlineFileText /> },
    { title: "PagInboxes", icon:<AiOutlineFileText />},
    { title: "Profile",icon:<AiOutlineFileText /> },
    { title: "Setting",icon:<AiOutlineFileText /> },
    {
        title: <span style={{ color: 'red' }}>Logout</span>,
        spacing: true,
        icon: <AiOutlineFileText style={{ color: 'red' }} />,
      }
      
  ];

  return (
    <div className="flex">
      <div className={`bg-white h-screen pt-8 ${open ? "w-60" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort 
          className={`bg-white text-blue-900 text-2xl rounded-full absolute -right-3 top-9 border border-blue-900 cursor-pointer ${!open && 'rotate-180'}`} 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle Sidebar"
        />

        

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
            <li 
              key={index} 
              className={`menu-item text-blue-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 
              hover:bg-slate-100  ml-4 ${menu.spacing ?"mt-9" : "mt-2"}`}>
                <span className='text-2xl block float-left'>
                {menu.icon ? menu.icon :<RiDashboardFill />}
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
              
            </li>
            </>
          ))}
        </ul>
      </div>

      <div className="bg-slate-200 flex-1 p-7">
        <h1 className="text-2xl font-semibold"></h1>
      </div>
    </div>
  );
};

export default Sidebar;
