import React, { useState } from 'react';
import { Filter, Search } from "lucide-react";
import profilepic from '../../assets/img/Profil.png';
import coverpic from '../../assets/img/coverpic.png';
import propic from '../../assets/img/pro.png';
import location from '../../assets/img/location.png';
import phone from '../../assets/img/Phone.png';
import mail from '../../assets/img/Mail.png';

const Companies = () => {
  const [activeBar, setActiveBar] = useState('Register');
  const tabs = ["Register", "Pending", "Blocked"];
  const profiles = [
    {
      comName: "WSO2",
      personName: "Justin Hope",
      location: "Western, Colombo",
      phone: "+12 345 6789 0",
      email: "wso2@info.com",
      profilepic: profilepic,
      coverpic: coverpic
    },
    {
      comName: "SYSCO LABS",
      personName: "John Doe",
      location: "Western, Colombo",
      phone: "+12 345 6789 0",
      email: "sysco@info.com",
      profilepic: profilepic,
      coverpic: coverpic
    },
    {
      comName: "SYSCO LABS",
      personName: "John Doe",
      location: "Western, Colombo",
      phone: "+12 345 6789 0",
      email: "sysco@info.com",
      profilepic: profilepic,
      coverpic: coverpic
    },
  ];

  return (

    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg flex flex-col items-center py-4 h-[90vh] overflow-y-auto'>

      <div className="flex justify-center gap-10 w-[60%] py-2 rounded-full border border-gray-300 font-semibold bg-gray-100 shadow-sm">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer relative px-4 py-1 transition-colors duration-300 ${activeBar === tab ? "text-blue-700 font-bold" : "text-gray-500"}`}
            onClick={() => setActiveBar(tab)}
          >
            {tab}
            {activeBar === tab && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-700 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between w-full px-[5%] my-3 pt-3">
        <div className='flex items-center gap-3 px-4 py-2 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
          <Filter />
          <button className='font-medium'>Filter</button>
        </div>
        <div className='flex items-center gap-3 px-4 py-1 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
          <Search />
          <input type="text" placeholder="Search..." className="w-40 px-2 py-1 bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>


     
      <div className="flex flex-col items-center w-full gap-4 mt-4">
        {profiles.map((profile, index) => (
          <div key={index} className='w-[90%] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'>

            <div className='relative'>
              <img src={profile.coverpic} alt="Cover" className='object-cover w-full h-20'/>
              <img src={profile.profilepic} alt="Profile" className='absolute left-6 bottom-[-20px] h-16 w-16 rounded-full border-4 border-white shadow-lg' />
            </div>

            <div className="px-4 py-6">
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-extrabold text-gray-800'>{profile.comName}</h2>
                <button className='px-4 py-1 font-medium text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-800'>View</button>
              </div>

              <div className='flex items-center justify-center gap-20 mt-4 font-medium text-gray-700 flex- text-md'>
                <div className='flex items-center gap-2'><img src={propic} alt="" className='h-4'/> {profile.personName}</div>
                <div className='flex items-center gap-2'><img src={location} alt="" className='h-4'/> {profile.location}</div>
                <div className='flex items-center gap-2'><img src={phone} alt="" className='h-4'/> {profile.phone}</div>
                <div className='flex items-center gap-2'><img src={mail} alt="" className='h-4'/> {profile.email}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
