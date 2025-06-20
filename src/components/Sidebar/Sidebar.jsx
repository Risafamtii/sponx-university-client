import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { HelpCircle, ChevronDown } from 'lucide-react';

const Sidebar = ({ menuItems }) => {
  const [dropDown, setDropDown] = useState(null);

  const handleDropDown = (index) => {
    setDropDown(dropDown === index ? null : index);
  };

  return (
    <div className="fixed top-0 left-0 h-full w-[17%] min-w-[200px] bg-[#192440] shadow-lg z-50">
      <div className="flex flex-col h-full">
        <div className="py-6 px-4 border-b border-[#2a3655]">
          <img 
            src={assets.logo} 
            alt="Company Logo" 
            className="w-auto h-8 mx-auto" 
          />
        </div>

        <div className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="flex flex-col gap-1 mx-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                {!item.Children ? (
                  <NavLink
                    to={item.basePath}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                        isActive
                          ? 'bg-white text-black font-medium shadow-sm'
                          : 'text-[#8E92BC] hover:bg-[#1E2C4A] hover:text-white'
                      }`
                    }
                  >
                    <item.icon size={20} className="flex-shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </NavLink>
                ) : (
                  <>
                    <button
                      onClick={() => handleDropDown(index)}
                      className={`flex items-center justify-between w-full gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                        dropDown === index 
                          ? 'text-white bg-[#1E2C4A]' 
                          : 'text-[#8E92BC] hover:bg-[#1E2C4A] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={20} className="flex-shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          dropDown === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {dropDown === index && (
                      <ul className="flex flex-col gap-1 pl-4 mt-1 ml-6 border-l-2 border-[#2a3655]">
                        {item.Children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <NavLink
                              to={child.basePath}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                                  isActive
                                    ? 'bg-white text-black font-medium shadow-sm'
                                    : 'text-[#8E92BC] hover:bg-[#1E2C4A] hover:text-white'
                                }`
                              }
                            >
                              <span className="text-sm truncate">{child.name}</span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 py-4 border-t border-[#2a3655]">
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-black font-medium'
                  : 'text-[#8E92BC] hover:bg-[#2a3655] hover:text-white'
              }`
            }
          >
            <HelpCircle size={18} />
            <span className="text-sm">Help & Support</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;