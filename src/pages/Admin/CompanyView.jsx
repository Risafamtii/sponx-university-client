import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiX, FiCheck, FiAlertCircle, FiLock, FiUnlock, FiChevronLeft } from 'react-icons/fi';
import { assets } from '../../assets/assets';
import { companyService } from '../../utils/api/admin';

const CompanyView = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showUnblockModal, setShowUnblockModal] = useState(false);
  const [blockReason, setBlockReason] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const logedUser = JSON.parse(localStorage.getItem("user"));  


  // Sample data
  const investmentData = [
    { name: "Jan", investment: 10000 },
    { name: "Feb", investment: 25000 },
    { name: "Mar", investment: 18000 },
    { name: "Apr", investment: 35000 },
    { name: "May", investment: 21000 },
    { name: "Jun", investment: 29000 },
    { name: "Jul", investment: 32000 },
  ];

  const activities = [
    {
      id: 1,
      author: "IEEE EXTREME",
      subtext: "IEEE-Student Branch",
      companyStatus: "Fully Funded",
      progress: "Rs.100,000",
      statusColor: "green-500",
      avatar: assets.compro
    },
    {
      id: 2,
      author: "Haloween Fiesta",
      subtext: "GAVEL-UOC..",
      companyStatus: "Approved",
      progress: "Rs.45,000",
      statusColor: "blue-500",
      avatar: assets.compro
    },
    {
      id: 3,
      author: "Rotaract-Baxx",
      subtext: "UJFE",
      companyStatus: "Rejected",
      progress: "Rs.200,000",
      statusColor: "red-500",
      avatar: assets.compro
    }
  ];

  const complaints = [
    {
      id: 1,
      title: "Complaints/Reporting",
      description: "Complaint Regarding Sponsorship Payment Delay by WSO2 Rotaract Club, University of Colombo"
    },
    {
      id: 2,
      title: "Complaints/Reporting",
      description: "Complaint Regarding Sponsorship Payment Delay by WSO2 Rotaract Club, University of Colombo"
    }
  ];

  const transactions = [
    { id: 1, name: "IEEE EXTRME(UOC)", date: "19 July 2021", amount: "LKR 568.11" },
    { id: 2, name: "New year blast (UOR)", date: "19 July 2021", amount: "LKR 568.11" },
    { id: 3, name: "Happy Birthday (UOJ)", date: "19 July 2021", amount: "LKR 568.11" }
  ];

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        const response = await companyService.getById(id);
        setCompany(response.data.company);
      } catch (error) {
        console.error("Failed to fetch company:", error);
        toast.error("Failed to load company data");
        navigate('/admin/companies');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [id, navigate]);

  const handleBlockClick = (companyId) => {
    setShowBlockModal(true);
    setSelectedCompanyId(companyId);
  };

  const handleUnblockClick = (companyId) => {
    setShowUnblockModal(true);
    setSelectedCompanyId(companyId);
  };

  const confirmBlock = async () => {
    if (!blockReason.trim()) {
      toast.error("Please provide a reason for blocking");
      return;
    }

    try {
      setIsProcessing(true);
      await companyService.block(selectedCompanyId, logedUser.id , blockReason);
      
      setCompany(prev => ({
        ...prev,
        user: {
          ...prev.user,
          isBlock: true,
          status: 'BLOCKED'
        }
      }));
      
      setShowBlockModal(false);
      setBlockReason('');
      toast.success("Company blocked successfully!");
    } catch (error) {
      console.error("Error blocking company:", error);
      toast.error(error.response?.data?.message || "Failed to block company");
    } finally {
      setIsProcessing(false);
    }
  };

  const confirmUnblock = async () => {
    try {
      
      setIsProcessing(true);
      await companyService.unblock(selectedCompanyId , logedUser.id);
      
      setCompany(prev => ({
        ...prev,
        user: {
          ...prev.user,
          isBlock: false,
          status: 'ACTIVE'
        }
      }));
      
      setShowUnblockModal(false);
      toast.success("Company unblocked successfully!");
    } catch (error) {
      console.error("Error unblocking company:", error);
      toast.error(error.response?.data?.message || "Failed to unblock company");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBack = () => navigate(-1);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 ml-[17%] mt-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-12 border-4 border-t-[#177695] border-gray-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-600">Loading company data...</p>
        </motion.div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-700">Company not found</h2>
          <p className="mt-2 text-gray-500">The requested company could not be loaded.</p>
          <button 
            onClick={() => navigate('/admin/companies')}
            className="flex items-center justify-center gap-2 px-6 py-2 mt-4 text-white bg-[#177695] rounded-lg hover:bg-[#145a76] transition-colors"
          >
            <FiChevronLeft className="w-5 h-5" />
            Back to Companies
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-sm items-start py-4 h-[90vh] overflow-y-auto grid grid-cols-3"
    >
      {/* Left Side - Main Content */}
      <div className="col-span-2 px-6 space-y-6">
        {/* Company Profile */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-white border border-gray-100 shadow-xs rounded-xl"
        >
          <div className="flex items-start gap-6">
            <motion.img
              src={company?.user?.profilePic || assets.compro}
              alt="Company Profile"
              className="object-cover border-4 border-white rounded-full shadow-md h-28 w-28"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div className="w-full">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-500">Company Name</label>
                    <div className="p-2 text-gray-800 rounded-lg bg-gray-50">
                      {company?.user?.name || "N/A"}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-500">Email</label>
                    <div className="p-2 text-gray-800 rounded-lg bg-gray-50">
                      {company?.user?.email || "N/A"}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-500">Industry Type</label>
                    <div className="p-2 text-gray-800 rounded-lg bg-gray-50">
                      {company?.industry || "N/A"}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-500">Registration Number</label>
                    <div className="p-2 text-gray-800 rounded-lg bg-gray-50">
                      {company?.user?.id || "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Activity Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-white border border-gray-100 shadow-xs rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Activity</h3>
              <p className="text-sm text-gray-500">32 Requests</p>
            </div>
            <button className="px-3 py-1 text-sm font-medium text-[#177695] bg-[#E6F4F9] rounded-lg hover:bg-[#D0E9F2]">
              View All
            </button>
          </div>
          <div className="overflow-hidden border border-gray-100 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Authors</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">Status</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">Progress</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity) => (
                  <motion.tr 
                    key={activity.id} 
                    className="transition-colors hover:bg-gray-50"
                    whileHover={{ scale: 1.005 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src={activity.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{activity.author}</div>
                          <div className="text-sm text-gray-500">{activity.subtext}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold leading-5 rounded-full bg-${activity.statusColor}/10 text-${activity.statusColor}`}>
                        {activity.companyStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
                      {activity.progress}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                      <button className="px-3 py-1 text-sm text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        View
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Complaints Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {complaints.map(complaint => (
              <motion.div 
                key={complaint.id}
                whileHover={{ y: -2 }}
                className="p-5 bg-white border border-gray-100 shadow-xs rounded-xl"
              >
                <h4 className="text-lg font-semibold text-gray-800">{complaint.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{complaint.description}</p>
                <button className="flex items-center gap-1 px-4 py-1.5 mt-3 text-sm font-medium text-white transition-colors bg-[#177695] rounded-lg hover:bg-[#145a76]">
                  View Details
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#177695] rounded-lg shadow-sm hover:bg-[#145a76]"
          >
            View All Complaints
          </motion.button>
        </motion.div>
      </div>

      {/* Right Side - Sidebar */}
      <div className="px-4 space-y-6">
        {/* Transactions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-white border border-gray-100 shadow-xs rounded-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Latest Transactions</h3>
            <button className="px-2 py-1 text-xs font-medium text-white rounded-lg bg-[#177695] hover:bg-[#145a76]">
              More
            </button>
          </div>
          <div className="space-y-4">
            {transactions.map(tx => (
              <motion.div 
                key={tx.id} 
                className="flex items-center justify-between p-3 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
                whileHover={{ x: 2 }}
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">{tx.name}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
                <span className="text-sm font-semibold text-green-500">{tx.amount}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-white border border-gray-100 shadow-xs rounded-xl"
        >
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Monthly Total Investment</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={investmentData}>
                <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280" 
                  tick={{ fontSize: 12 }} 
                />
                <YAxis 
                  stroke="#6B7280" 
                  tick={{ fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="investment" 
                  stroke="#177695" 
                  strokeWidth={3} 
                  dot={{ 
                    r: 5, 
                    fill: "#177695", 
                    strokeWidth: 2, 
                    stroke: "white" 
                  }}
                  activeDot={{ 
                    r: 7, 
                    fill: "#177695", 
                    stroke: "#fff", 
                    strokeWidth: 3 
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="p-6 space-y-4 bg-white border border-gray-100 shadow-xs rounded-xl"
        >
          <motion.button
            onClick={handleBack}
            whileHover={{ x: -2 }}
            className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <FiChevronLeft className="w-5 h-5" />
            Back to Companies
          </motion.button>

          {company?.user?.status === 'PENDING' && !company?.user?.isBlock ? (
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-white transition-colors bg-green-600 rounded-lg shadow-sm hover:bg-green-700"
              >
                <FiCheck className="w-5 h-5" />
                Approve Company
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-white transition-colors bg-red-600 rounded-lg shadow-sm hover:bg-red-700"
              >
                <FiX className="w-5 h-5" />
                Reject Application
              </motion.button>
            </div>
          ) : company?.user?.status === 'ACTIVE' && !company?.user?.isBlock ? (
            <motion.button
              onClick={() => handleBlockClick(company.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-white transition-colors bg-red-600 rounded-lg shadow-sm hover:bg-red-700"
            >
              <FiLock className="w-5 h-5" />
              Block Company
            </motion.button>
          ) : company?.user?.isBlock ? (
            <motion.button
              onClick={() => handleUnblockClick(company.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-white transition-colors bg-green-600 rounded-lg shadow-sm hover:bg-green-700"
            >
              <FiUnlock className="w-5 h-5" />
              Unblock Company
            </motion.button>
          ) : null}
        </motion.div>
      </div>

      {/* Block Company Modal */}
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
                <h3 className="text-xl font-semibold text-gray-800">Block Company</h3>
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
              
              <p className="mb-4 text-gray-600">Please provide a reason for blocking this company:</p>
              
              <textarea
                className="w-full p-3 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#177695] focus:border-transparent"
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

      {/* Unblock Company Modal */}
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
                <h3 className="text-xl font-semibold text-gray-800">Unblock Company</h3>
                <button
                  onClick={() => setShowUnblockModal(false)}
                  className="p-1 text-gray-400 rounded-full hover:text-gray-500 hover:bg-gray-100"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 mb-4 text-center rounded-lg bg-yellow-50">
                <FiAlertCircle className="w-12 h-12 mx-auto text-yellow-500" />
                <p className="mt-2 text-gray-700">Are you sure you want to unblock this company?</p>
                <p className="mt-1 text-sm text-gray-500">
                  The company will regain full access to their account and all features.
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
    </motion.div>
  );
};

export default CompanyView;