import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from "lucide-react";
import { IoAdd } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import propic from '../../assets/img/pro.png';
import location from '../../assets/img/location.png';
import phone from '../../assets/img/Phone.png';
import mail from '../../assets/img/Mail.png';
import { getAllCompanies } from '../../utils/api/admin'; // adjust path as needed


const Companies = () => {
  const [activeBar, setActiveBar] = useState('Active');
  const tabs = ["Active", "Pending", "Blocked"];
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await getAllCompanies();
        setProfiles(res.data.companies); // Make sure this matches your backend response
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  
  console.log(profiles);


  const filteredProfiles = profiles.filter(profile => {
    if (activeBar === 'Blocked') {
      return profile?.user?.isBlock === true;
    } else {
      return (
        profile?.user?.status?.toLowerCase() === activeBar.toLowerCase() &&
        profile?.user?.isBlock === false
      );
    }
  });
  

  

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
        
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-3 px-4 py-2 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
            <Filter />
            <button className='font-medium'>Filter</button>
          </div>
          <div>
            <button className='flex items-center justify-center w-10 h-10 text-xl font-bold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700'>
              <IoAdd />
            </button>
          </div>
        </div>
        
        <div className="relative w-1/4">
          <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-10 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      </div>


      <div className="flex flex-col items-center w-full gap-4 mt-4">
        {filteredProfiles.map((profile, index) => (
          <div key={index} className='w-[90%] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'>
            <div className='relative'>
              <img src={profile.coverPhoto} alt="Cover" className='object-cover w-full h-20'/>
              <img src={profile.profilePic} alt="Profile" className='absolute left-6 bottom-[-20px] h-16 w-16 rounded-full border-4 border-white shadow-lg' />
            </div>

            <div className="px-4 py-6">
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-extrabold text-gray-800'>{profile.name}</h2>
                <Link to = {`/admin/users/companies/view/${profile.id}`}>
                  <button className='px-4 py-1 font-medium text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-800' >View</button>
                </Link>
              </div>

              <div className='flex items-center justify-center gap-20 mt-4 font-medium text-gray-700 flex- text-md'>
                <div className='flex items-center gap-2'><img src={propic} alt="" className='h-4'/> {profile.name}</div>
                <div className='flex items-center gap-2'><img src={location} alt="" className='h-4'/> {profile.address}</div>
                <div className='flex items-center gap-2'><img src={phone} alt="" className='h-4'/> {profile.phone}</div>
                <div className='flex items-center gap-2'><img src={mail} alt="" className='h-4'/> {profile.user.email}</div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {filteredProfiles.length === 0 && (
        <p className="mt-4 font-medium text-gray-400">No companies found in this category.</p>
      )}
      
    </div>
  );
};

export default Companies;
