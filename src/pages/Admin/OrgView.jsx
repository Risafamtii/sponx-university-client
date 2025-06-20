import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import { organizationService } from '../../utils/api/admin';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowRight, FiX, FiAlertCircle, FiLock, FiUnlock, FiChevronLeft, FiPhone, FiMail, FiFacebook, FiInstagram, FiMapPin } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const OrgView = () => {
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
  const logedUser = JSON.parse(localStorage.getItem("user"));  


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

  const handleBlockClick = (organizerId) => {
    setShowBlockModal(true);
    setSelectedOrganizerId(organizerId);
  };

  const handleUnblockClick = (organizerId) => {
    setShowUnblockModal(true);
    setSelectedOrganizerId(organizerId);
  };

  const confirmBlock = async () => {
    if (!blockReason.trim()) {
      toast.error("Please provide a reason for blocking");
      return;
    }

    try {
      setIsProcessing(true);
      await organizationService.block(selectedOrganizerId,logedUser.id,blockReason);
      
      setOrganizer(prev => ({
        ...prev,
        user: {
          ...prev.user,
          isBlock: true,
          status: 'BLOCKED'
        }
      }));
      
      setShowBlockModal(false);
      setBlockReason('');
      toast.success("Organizer blocked successfully!");
    } catch (error) {
      console.error("Error blocking organizer:", error);
      toast.error(error.response?.data?.message || "Failed to block organizer");
    } finally {
      setIsProcessing(false);
    }
  };

  const confirmUnblock = async () => {
    try {
      setIsProcessing(true);
      await organizationService.unblock(selectedOrganizerId,logedUser.id);
      
      setOrganizer(prev => ({
        ...prev,
        user: {
          ...prev.user,
          isBlock: false,
          status: 'ACTIVE'
        }
      }));
      
      setShowUnblockModal(false);
      toast.success("Organizer unblocked successfully!");
    } catch (error) {
      console.error("Error unblocking organizer:", error);
      toast.error(error.response?.data?.message || "Failed to unblock organizer");
    } finally {
      setIsProcessing(false);
    }
  };

  h

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
        {/* Back Button */}
        <motion.button
          onClick={handleBack}
          whileHover={{ x: -2 }}
          className="flex items-center gap-2 mb-6 text-sm font-medium text-[#303972] hover:text-[#1B264B]"
        >
          <FiChevronLeft className="w-5 h-5" />
          Back to Organizations
        </motion.button>

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

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Events Button */}
          <motion.button
            onClick={() => setShowEvents(!showEvents)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-3 text-white bg-[#303972] rounded-lg shadow-md hover:bg-[#1B264B] transition-all"
          >
            {showEvents ? "Hide Events" : "View Upcoming Events"}
            <FiArrowRight className="transition-transform duration-300" style={{
              transform: showEvents ? 'rotate(90deg)' : 'rotate(0deg)'
            }} />
          </motion.button>

          {/* Block/Unblock Button */}
          {organizer?.user?.isBlock ? (
            <motion.button
              onClick={() => handleUnblockClick(organizer.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3 text-white transition-all bg-green-600 rounded-lg shadow-md hover:bg-green-700"
            >
              <FiUnlock className="w-5 h-5" />
              Unblock Organizer
            </motion.button>
          ) : (
            <motion.button
              onClick={() => handleBlockClick(organizer.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3 text-white transition-all bg-red-600 rounded-lg shadow-md hover:bg-red-700"
            >
              <FiLock className="w-5 h-5" />
              Block Organizer
            </motion.button>
          )}
        </div>
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

      {/* Block Organizer Modal */}
      <AnimatePresence>
        {showBlockModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md p-6 bg-white shadow-2xl rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Block Organizer</h3>
                <button
                  onClick={() => {
                    setShowBlockModal(false);
                    setBlockReason('');
                  }}
                  className="p-1 text-gray-400 rounded-full hover:text-gray-500 hover:bg-gray-100"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              <p className="mb-4 text-gray-600">Please provide a reason for blocking this organizer:</p>
              
              <textarea
                className="w-full p-3 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303972] focus:border-transparent"
                rows="4"
                placeholder="Enter reason..."
                value={blockReason}
                onChange={(e) => setBlockReason(e.target.value)}
                required
              />
              
              <div className="flex justify-end gap-3">
                <motion.button
                  onClick={() => {
                    setShowBlockModal(false);
                    setBlockReason('');
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </motion.button>
                
                <motion.button
                  onClick={confirmBlock}
                  disabled={!blockReason.trim() || isProcessing}
                  whileHover={!isProcessing ? { scale: 1.02 } : {}}
                  whileTap={!isProcessing ? { scale: 0.98 } : {}}
                  className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-all ${
                    isProcessing
                      ? 'bg-red-400 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Blocking...
                    </>
                  ) : (
                    <>
                      <FiLock className="w-4 h-4" />
                      Confirm Block
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unblock Organizer Modal */}
      <AnimatePresence>
        {showUnblockModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md p-6 bg-white shadow-2xl rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Unblock Organizer</h3>
                <button
                  onClick={() => setShowUnblockModal(false)}
                  className="p-1 text-gray-400 rounded-full hover:text-gray-500 hover:bg-gray-100"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 mb-4 text-center rounded-lg bg-yellow-50">
                <FiAlertCircle className="w-12 h-12 mx-auto text-yellow-500" />
                <p className="mt-2 text-gray-700">Are you sure you want to unblock this organizer?</p>
                <p className="mt-1 text-sm text-gray-500">
                  The organizer will regain full access to their account and all features.
                </p>
              </div>
              
              <div className="flex justify-end gap-3">
                <motion.button
                  onClick={() => setShowUnblockModal(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </motion.button>
                
                <motion.button
                  onClick={confirmUnblock}
                  disabled={isProcessing}
                  whileHover={!isProcessing ? { scale: 1.02 } : {}}
                  whileTap={!isProcessing ? { scale: 0.98 } : {}}
                  className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-all ${
                    isProcessing
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Unblocking...
                    </>
                  ) : (
                    <>
                      <FiUnlock className="w-4 h-4" />
                      Confirm Unblock
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrgView;