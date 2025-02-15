import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiSort } from "react-icons/bi"; // Sort Icon
import { FiFilter } from "react-icons/fi"; // Filter Icon
import { FaEllipsisV } from "react-icons/fa"; // Import FontAwesome icon


const Payment = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const data = [
    {
      eventName: "Reid Shadpws",
      company: "Gavel",
      sponsType: "Gold",
      date: "28 Jan, 12.30 AM",
      amount: "100,000",
      rank: 1,
      status: "Completed",
    },
    {
      eventName: "Freepik Sales",
      company: "Gavel",
      sponsType: "Gold",
      date: "25 Jan, 10.40 PM",
      amount: "100,000",
      rank: 2,
      status: "Completed",
    },

    {
      eventName: "Wilson",
      company: "Pedro",
      sponsType: "General",
      date: "15 Jan, 03.29 PM",
      amount: "100,000",
      rank: 7,
      status: "Completed",
    },

    {
      eventName: "Mobile Service",
      company: "Gavel",
      sponsType: "Silver",
      date: "20 Jan, 10.40 PM",
      amount: "100,000",
      rank: 3,
      status: "Completed",
    },

    {
      eventName: "Emilly",
      company: "Creative software",
      sponsType: "Bronze",
      date: "14 Jan, 10.40 PM",
      amount: "100,000",
      rank: 10,
      status: "Completed",
    },
  ];

  return (
    <div className="mx-auto font-inter bg-[#FAFAFA] mt-[6%] ml-[17%] w-[83%]">
      
      <div className="flex justify-around bg-gray-100 rounded-full w-[900px] max-w-2xl mx-auto mt-8">
        <button
          className={`flex-1 text-center py-2 rounded-full transition-all duration-200 ${
            activeTab === "pending"
              ? "bg-white shadow text-[#253361] font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </button>
        <button
          className={`flex-1 text-center py-2 rounded-full transition-all duration-200 ${
            activeTab === "completed"
              ? "bg-white shadow text-[#253361] font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>

      <div className="flex items-center justify-between mt-10 w-full px-4 ml-8">
        {/* Search Bar (Left) */}
        <div className="relative w-1/4">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-200 rounded-full px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      
      </div>


      {/* Content Area */}
      <div className="mt-6">
        {activeTab === "pending" && (
          <div className="p-4 max-w-5xl mx-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-white border-b">
                  <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Event Name</th>
                  <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Club</th>
                  <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Spon. Type</th>
                  <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Date</th>
                  <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Amount</th>
                  
                  <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="p-4 text-sm text-gray-700">{row.eventName}</td>
                    <td className="p-4 text-sm text-gray-700">{row.company}</td>
                    <td
                      className={"text-gray-700 p-4 text-sm"
                      }
                    >
                      {row.sponsType}
                    </td>
                    <td className="p-4 text-sm text-gray-700">{row.date}</td>
                    <td className="p-4 text-sm text-[#16DBAA]">{row.amount}</td>
                   
                    <td className="p-4 text-sm">
                      <button className="px-3 text-gray-300">
                        <FaEllipsisV size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


        </div>
        )}
        {activeTab === "completed" && (
          <div className="p-4 max-w-5xl mx-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-white border-b">
                <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Event Name</th>
                <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Club</th>
                <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Spon. Type</th>
                <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Date</th>
                <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Amount</th>
                <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Status</th>
                <th className="text-left p-4 text-sm font-medium text-[#718EBF]">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="p-4 text-sm text-gray-700">{row.eventName}</td>
                  <td className="p-4 text-sm text-gray-700">{row.company}</td>
                  <td className="p-4 text-sm text-gray-700">{row.sponsType}</td>
                  <td className="p-4 text-sm text-gray-700">{row.date}</td>
                  <td className="p-4 text-sm text-[#16DBAA]">{row.amount}</td>
                  <td className="p-4 text-xs">
                    
                    <span
                      
                      className={`px-2 py-1 rounded-full ${
                        row.status === "Completed"
                          ? "bg-[#ECFDF3] text-[#037847]"
                          : "bg-[#F2F4F7] text-[#364254]"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                  <button className="px-2 py-1 border border-blue-800 text-blue-800 rounded-full hover:border-purple-500 hover:bg-gray-100 hover:text-purple-800 hover:font-semi-bold transition">
      Download
    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>



      </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
