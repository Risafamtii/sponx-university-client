import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from "lucide-react";
import { IoAdd } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import propic from '../../assets/img/pro.png';
import location from '../../assets/img/location.png';
import phone from '../../assets/img/Phone.png';
import mail from '../../assets/img/Mail.png';
import { getAllCompanies } from '../../utils/api/admin';
import { LoadingDots } from '../../components/Loading';

const Companies = () => {
  const [activeBar, setActiveBar] = useState('Active');
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const tabs = ["Active", "Pending", "Blocked"];

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const res = await getAllCompanies();
        // console.log(res.data.companies[0].user.id);
        setProfiles(res.data.companies);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const filteredProfiles = profiles.filter(profile => {
    const statusMatch = activeBar === 'Blocked' 
      ? profile?.user?.isBlock === true
      : profile?.user?.status?.toLowerCase() === activeBar.toLowerCase() && 
        profile?.user?.isBlock === false;
    
    if (!searchTerm) return statusMatch;
    
    const searchLower = searchTerm.toLowerCase();
    return statusMatch && (
      profile?.user?.name?.toLowerCase().includes(searchLower) ||
      profile?.user?.email?.toLowerCase().includes(searchLower) ||
      profile?.user?.phone?.toLowerCase().includes(searchLower) ||
      profile.address?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg flex flex-col items-center py-4 h-[90vh] overflow-y-auto'>
      <div className={`flex justify-center gap-10 w-[60%] py-2 rounded-full border border-gray-300 font-semibold bg-gray-100 shadow-sm ${isLoading ? 'opacity-50' : ''}`}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer relative px-4 py-1 transition-colors duration-300 ${activeBar === tab ? "text-blue-700 font-bold" : "text-gray-500"} ${isLoading ? 'pointer-events-none' : ''}`}
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
          <div className={`flex items-center gap-3 px-4 py-2 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200 ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
            <Filter />
            <button className='font-medium'>Filter</button>
          </div>
          <div>
            <Link to="/admin/users/companies/add" className={isLoading ? 'pointer-events-none' : ''}>
              <button className={`flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-white transition-all duration-300 bg-blue-600 rounded-full shadow-md hover:bg-blue-700 ${isLoading ? 'opacity-50' : ''}`}>
                <IoAdd className="text-lg" />
                Add Company
              </button>
            </Link>
          </div>
        </div>
        
        <div className="relative w-1/4">
          <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-10 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-4 mt-4">
        {isLoading ? (
          <div className="flex items-center justify-center w-full py-20">
            <LoadingDots />
          </div>
        ) : filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
            <div key={index} className='w-[90%] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]'>
              <div className='relative'>
                <img 
                  src={profile.coverPhoto} 
                  alt="Cover" 
                  className='object-cover w-full h-20'
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'default-cover.jpg';
                  }}
                />
                <img 
                  src={profile.profilePic} 
                  alt="Profile" 
                  className='absolute left-6 bottom-[-20px] h-16 w-16 rounded-full border-4 border-white shadow-lg'
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'default-profile.jpg';
                  }}
                />
              </div>

              <div className="px-4 py-6">
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-extrabold text-gray-800'>{profile?.user?.name}</h2>
                    <Link 
                      to={`/admin/users/companies/view/${profile?.user?.id}`}
                      onClick={() => console.log("Navigating to company ID:", profile?.user?.id)}
                    >
                      <button className='px-4 py-1 font-medium text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-800'>
                        View
                      </button>
                    </Link>
                </div>

                <div className='flex items-center justify-center gap-20 mt-4 font-medium text-gray-700 text-md'>
                  <div className='flex items-center gap-2'>
                    <img src={propic} alt="" className='h-4'/> 
                    {profile?.user?.name}
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={location} alt="" className='h-4'/> 
                    {profile.address || 'N/A'}
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={phone} alt="" className='h-4'/> 
                    {profile?.user?.phone || 'N/A'}
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={mail} alt="" className='h-4'/> 
                    {profile?.user?.email}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xl font-medium text-gray-500">No companies found</p>
            <p className="text-gray-400">Try changing your filters or search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;