import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';
import { getCompanyById, blockCompany, unblockCompany } from '../../utils/api/admin';

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

  // Sample data - would normally come from API
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
        const response = await getCompanyById(id);
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
      await blockCompany(selectedCompanyId, blockReason);
      
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
      await unblockCompany(selectedCompanyId);
      
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
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading company data...</div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-red-500">Company not found</div>
      </div>
    );
  }

  return (
    <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg items-start py-4 h-[90vh] overflow-y-auto grid grid-cols-3">
      {/* Left Side - Main Content */}
      <div className="col-span-2 px-4 space-y-4">
        {/* Company Profile */}
        <div className="p-6 border rounded-lg shadow">
          <div className="flex items-center gap-8">
            <img 
              src={company?.user?.profilePic || assets.compro} 
              alt="Company Profile" 
              className="object-cover rounded-full h-30 w-30" 
            />
            <div className="w-full">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">Company Name:</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={company?.user?.name || "N/A"}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">Email:</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded" 
                      value={company?.user?.email || "N/A"}
                      readOnly
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">Industry Type:</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      value={company?.industry || "N/A"}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">Registration Number:</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded" 
                      value={company?.user?.id || "N/A"}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Table */}
        <div className="pt-3 bg-white border rounded-lg shadow">
          <div className="px-4 py-2">
            <h3 className="text-xl font-semibold">Activity</h3>
            <p className="text-[#B5B5C3] font-semibold text-sm">32 Requests</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-sm font-semibold text-gray-600 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-center">Authors</th>
                  <th className="px-6 py-4 text-center">Company</th>
                  <th className="px-6 py-4 text-center">Progress</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-50">
                    <td className="flex items-center gap-4 px-6 py-4">
                      <img src={activity.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="font-semibold">{activity.author}</p>
                        <p className="text-xs text-gray-500">{activity.subtext}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-center">
                      <span className={`inline-block border-b-4 border-${activity.statusColor} pb-1`}>
                        {activity.companyStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-center text-gray-500">
                      {activity.progress}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Complaints Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            {complaints.map(complaint => (
              <div key={complaint.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex-1 min-w-[300px]">
                <h4 className="text-lg font-semibold text-gray-800">{complaint.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{complaint.description}</p>
                <button className="mt-3 px-4 py-1 text-sm bg-[#177695] text-white font-semibold rounded-md hover:bg-[#145a76]">
                  View
                </button>
              </div>
            ))}
          </div>
          <button className="bg-[#177695] text-white px-6 py-2 text-md font-semibold rounded-full shadow-md hover:bg-[#145a76]">
            View All Complaints
          </button>
        </div>
      </div>

      {/* Right Side - Sidebar */}
      <div className="px-4 space-y-4">
        {/* Transactions */}
        <div className="p-4 bg-white border rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Latest Transactions</h3>
            <button className="px-2 py-1 text-sm font-semibold text-white rounded-lg bg-slate-400 hover:bg-slate-500">
              More
            </button>
          </div>
          <div className="space-y-4">
            {transactions.map(tx => (
              <div key={tx.id} className="flex items-center justify-between">
                <div>
                  <p className="text-base">{tx.name}</p>
                  <p className="text-[#1E2434] text-xs">{tx.date}</p>
                </div>
                <span className="text-[#34E4B5] text-sm font-semibold">{tx.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Chart */}
        <div className="p-4 bg-white border rounded-lg shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Monthly Total Investment</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={investmentData}>
                <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" tick={{ fontSize: 12 }} />
                <YAxis stroke="#6B7280" tick={{ fontSize: 12 }} />
                <Line 
                  type="monotone" 
                  dataKey="investment" 
                  stroke="#177695" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: "#177695", strokeWidth: 2, stroke: "white" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 space-y-4 bg-white border rounded-lg shadow">
          <button 
            onClick={handleBack}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Companies
          </button>

          {company?.user?.status === 'PENDING' && !company?.user?.isBlock ? (
            <div className="space-y-3">
              <button
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Approve Company
              </button>
              <button
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Reject Application
              </button>
            </div>
          ) : company?.user?.status === 'ACTIVE' && !company?.user?.isBlock ? (
            <button
              onClick={() => handleBlockClick(company.id)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
              </svg>
              Block Company
            </button>
          ) : company?.user?.isBlock ? (
            <button
              onClick={() => handleUnblockClick(company.id)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Unblock Company
            </button>
          ) : null}
        </div>
      </div>

      {/* Block Company Modal */}
      {showBlockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg">
            <h3 className="mb-4 text-lg font-semibold">Block Company</h3>
            <p className="mb-4">Please provide a reason for blocking this company:</p>
            
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Enter reason..."
              value={blockReason}
              onChange={(e) => setBlockReason(e.target.value)}
              required
            />
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowBlockModal(false);
                  setBlockReason('');
                }}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              
              <motion.button
                onClick={confirmBlock}
                disabled={!blockReason.trim() || isProcessing}
                whileTap={!isProcessing ? { scale: 0.98 } : {}}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-all shadow ${
                  isProcessing
                    ? 'bg-red-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 hover:shadow-lg'
                }`}
                aria-busy={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2 animate-spin"
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
                  </div>
                ) : (
                  "Confirm Block"
                )}
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Unblock Company Modal */}
      {showUnblockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg">
            <h3 className="mb-4 text-lg font-semibold">Unblock Company</h3>
            <p className="mb-4">Are you sure you want to unblock this company?</p>
            <p className="mb-4 text-sm text-gray-600">
              The company will regain full access to their account and all features.
            </p>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowUnblockModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              
              <motion.button
                onClick={confirmUnblock}
                disabled={isProcessing}
                whileTap={!isProcessing ? { scale: 0.98 } : {}}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-all shadow ${
                  isProcessing
                    ? 'bg-green-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 hover:shadow-lg'
                }`}
                aria-busy={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2 animate-spin"
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
                  </div>
                ) : (
                  "Confirm Unblock"
                )}
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyView;