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
    <div className={'transition-all duration-300 w-[17%] fixed top-0 left-0 h-full overflow-y-autol'}>
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

        {/* Help Center */}
        {dropDown === null && (
          <div className="help-box relative bg-[#12192C] text-white w-[70%] text-center rounded-xl py-5 px-4 border border-[#8E92BC] shadow-lg pt-2 h-[30%]">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#192440] w-12 h-12 rounded-full flex items-center justify-center border border-[#8E92BC] shadow-md">
              <HelpCircle size={24} className="text-white" />
            </div>

            <h3 className="mt-3 text-lg font-bold">Help Center</h3>
            <p className="text-sm text-[#8E92BC] my-2">
              Having Trouble in Learning?
              <br />
              Please contact us for more questions.
            </p>
            <button className="bg-white text-black font-medium px-6 py-1 rounded-lg hover:bg-[#EDEDED] transition-all duration-300">
              Go
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
