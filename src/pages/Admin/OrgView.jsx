import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import { organizationService } from '../../utils/api/admin';
import { useParams, useNavigate } from 'react-router-dom';
import { FiX, FiArrowRight, FiFacebook, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ClubView = () => {
  const [organizer, setOrganizer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showUnblockModal, setShowUnblockModal] = useState(false);
  const [blockReason, setBlockReason] = useState('');
  const [selectedOrganizerId, setSelectedOrganizerId] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEvents, setShowEvents] = useState(false);

  const upcomingEvents = [
    { id: 1, title: "World History", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VII-B" },
    { id: 2, title: "Ancient History", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VII-A" },
    { id: 3, title: "Culture", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VIII-A" },
    { id: 4, title: "World History", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VII-C" },
  ];

  useEffect(() => {
    const fetchOrganizerData = async () => {
      try {
        setLoading(true);
        const response = await organizationService.getById(id);
        setOrganizer(response.data.organizer);
      } catch (error) {
        console.error("Failed to fetch organizer:", error);
        toast.error("Failed to load organizer data");
        navigate('/admin/users/orgs');
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizerData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 ml-[17%] mt-[5%]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-[#303972] border-gray-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-600">Loading organizer data...</p>
        </div>
      </div>
    );
  }

  if (!organizer) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Organizer not found</h2>
          <p className="mt-2 text-gray-500">The requested organizer could not be loaded.</p>
          <button 
            onClick={() => navigate('/admin/users/orgs')}
            className="px-6 py-2 mt-4 text-white bg-[#303972] rounded-lg hover:bg-[#1B264B] transition-colors"
          >
            Back to Organizations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-sm h-[90vh] overflow-y-auto relative">
      {/* Cover Photo Section */}
      <div className='relative w-full h-56 overflow-hidden bg-gradient-to-r from-[#303972] to-[#1B264B] rounded-t-xl'>
        <motion.img
          src={organizer.user?.coverPhoto || assets.defaultCover}
          alt="Club Cover"
          className="object-cover w-full h-full opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Profile Picture */}
        <motion.div 
          className="absolute z-10 bg-white border-4 border-white rounded-full shadow-xl w-36 h-36 left-8 -bottom-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img 
            src={organizer.user?.profilepic || assets.defaultProfile} 
            alt="Profile" 
            className="object-cover w-full h-full rounded-full" 
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="px-10 pt-24 pb-10">
        {/* Club Info */}
        <motion.div 
          className='mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className='text-4xl font-bold text-gray-800'>{organizer.user?.name}</h1>
          <div className="flex items-center mt-2 space-x-4">
            <span className='px-3 py-1 text-sm font-medium text-[#303972] bg-[#E9ECF5] rounded-full'>
              {organizer.University}
            </span>
            <span className='px-3 py-1 text-sm font-medium text-[#303972] bg-[#E9ECF5] rounded-full'>
              {organizer.department}
            </span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className='flex flex-wrap gap-6 mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {organizer.user?.facebook && (
            <a 
              href={`https://facebook.com/${organizer.user.facebook}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg hover:bg-gray-100"
            >
              <FiFacebook className="w-5 h-5 text-[#303972]" />
              <span className='font-medium text-gray-700'>{organizer.user.facebook}</span>
            </a>
          )}
          
          {organizer.user?.instagram && (
            <a 
              href={`https://instagram.com/${organizer.user.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg hover:bg-gray-100"
            >
              <FiInstagram className="w-5 h-5 text-[#303972]" />
              <span className='font-medium text-gray-700'>{organizer.user.instagram}</span>
            </a>
          )}
          
          {organizer.user?.phone && (
            <a 
              href={`tel:${organizer.user.phone}`}
              className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg hover:bg-gray-100"
            >
              <FiPhone className="w-5 h-5 text-[#303972]" />
              <span className='font-medium text-gray-700'>{organizer.user.phone}</span>
            </a>
          )}
          
          {organizer.user?.email && (
            <a 
              href={`mailto:${organizer.user.email}`}
              className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg hover:bg-gray-100"
            >
              <FiMail className="w-5 h-5 text-[#303972]" />
              <span className='font-medium text-gray-700'>{organizer.user.email}</span>
            </a>
          )}
          
          {organizer.user?.location && (
            <div className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg hover:bg-gray-100">
              <FiMapPin className="w-5 h-5 text-[#303972]" />
              <span className='font-medium text-gray-700'>{organizer.user.location}</span>
            </div>
          )}
        </motion.div>

        {/* Description */}
        <motion.div 
          className='mb-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className='mb-3 text-xl font-bold text-gray-800'>Description</h2>
          <p className='leading-relaxed text-gray-600'>
            {organizer.description || 'No description provided.'}
          </p>
        </motion.div>

        <div className="grid gap-8 mb-10 md:grid-cols-2">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-white shadow-sm rounded-xl"
          >
            <h2 className="mb-4 text-xl font-bold text-gray-800">Contact Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Primary Contact Person</h3>
                <p className="text-gray-500">{organizer.user.contactPerson || 'Not specified'}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Phone Number</h3>
                <p className="text-gray-500">{organizer.user?.phone || 'Not specified'}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Contact Email</h3>
                <p className="text-gray-500">{organizer.user?.email || 'Not specified'}</p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="p-6 bg-white shadow-sm rounded-xl"
          >
            <h2 className="mb-4 text-xl font-bold text-gray-800">Mission Statement</h2>
            <p className="text-gray-600">
              {organizer.mission || 'No mission statement provided.'}
            </p>
          </motion.div>
        </div>

        {/* Events Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => setShowEvents(!showEvents)}
            className="flex items-center gap-2 px-8 py-3 text-white bg-[#303972] rounded-lg shadow-md hover:bg-[#1B264B] transition-all hover:shadow-lg"
          >
            {showEvents ? "Hide Events" : "View Upcoming Events"}
            <FiArrowRight className="transition-transform duration-300" style={{ 
              transform: showEvents ? 'rotate(90deg)' : 'rotate(0deg)' 
            }} />
          </button>

          { organizer?.user?. }

          
        </motion.div>

        
      </div>

      {/* Events Modal */}
      <AnimatePresence>
        {showEvents && (
          <motion.div 
            className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="w-full max-w-md bg-white shadow-2xl rounded-l-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
            >
              <div className="relative h-screen p-6 overflow-y-auto">
                <button 
                  onClick={() => setShowEvents(false)} 
                  className="absolute p-2 text-gray-500 rounded-full top-4 right-4 hover:bg-gray-100"
                >
                  <FiX className="w-5 h-5" />
                </button>
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      className="p-5 transition-all bg-white border border-gray-100 rounded-xl hover:shadow-md"
                      whileHover={{ y: -2 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span>{event.class}</span>
                        <span className="mx-2">•</span>
                        <span>{event.date}</span>
                        <span className="mx-2">•</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex justify-end mt-3">
                        <button 
                          className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-[#303972] rounded-lg hover:bg-[#1B264B]"
                        >
                          View Details
                          <FiArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClubView;