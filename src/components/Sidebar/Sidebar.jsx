import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { HelpCircle } from 'lucide-react';

const Sidebar = ({ menuItems }) => {
  const [dropDown, setDropDown] = useState(null);

  const handleDropDown = (index) => {
    setDropDown(dropDown === index ? null : index);
  };

  return (
    <div className={'transition-all duration-300 w-[17%] fixed top-0 left-0 h-full overflow-y-auto'}>
      <div className="body bg-[#192440] flex flex-col gap-10 py-4 items-center h-[100%]">
        
        {/* Logo */}
        <div>
          <img src={assets.logo} alt="Logo" className='w-auto' />
        </div>

        {/* Menu Items */}
        <div>
          <ul className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {!item.Children ? (
                  <NavLink
                    to={item.basePath}
                    className={({ isActive }) =>
                      isActive
                        ? 'flex items-center gap-4 text-black bg-white px-6 py-[8px] rounded-xl'
                        : 'flex items-center gap-4 text-[#8E92BC] hover:bg-[#1E2C4A] hover:text-white px-6 py-[8px] rounded-xl transition-all duration-300 ease-in-out'
                    }
                  >
                    <span className="text-xl">
                      <item.icon />
                    </span>
                    <span>{item.name}</span>
                  </NavLink>
                ) : (
                  <>
                    {/* Parent Item with Dropdown Toggle */}
                    <button
                      onClick={() => handleDropDown(index)}
                      className="flex items-center gap-4 text-[#8E92BC] hover:bg-[#1E2C4A] hover:text-white px-6 py-[8px] rounded-xl transition-all duration-300 ease-in-out w-full"
                    >
                      <span className="text-xl">
                        <item.icon />
                      </span>
                      <span>{item.name}</span>
                    </button>

                    {/* Child Items (Dropdown) */}
                    {dropDown === index && (
                      <ul className="flex flex-col gap-2 pt-1 pl-10 relative before:absolute before:top-0 before:left-8 before:h-full before:w-[1px] before:bg-[#8E92BC]">
                        {item.Children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <NavLink
                              to={child.basePath}
                              className={({ isActive }) =>
                                isActive
                                  ? 'flex items-center gap-4 text-black bg-white px-6 py-[8px] rounded-xl'
                                  : 'flex items-center gap-4 text-[#8E92BC] hover:bg-[#1E2C4A] hover:text-white px-6 py-[8px] rounded-xl transition-all duration-300 ease-in-out'
                              }
                            >
                              <span className="ml-4 text-sm">{child.name}</span>
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

      </div>
    </div>
  );
};

export default Sidebar;