import React, { useState } from "react";

const activities = [
  { id: "56037-XDER", event: "Brasil", code: "BR", date: "05/28/2020", status: "Paid", amount: "100,000", category: "Web, UI/UX Design", badge: "Approved", badgeColor: "bg-purple-100 text-purple-800" },
  { id: "05822-FXSP", event: "Belarus", code: "BY", date: "02/04/2020", status: "Rejected", amount: "100,000", category: "Houses & Hotels", badge: "Bidding", badgeColor: "bg-amber-100 text-amber-800" },
  { id: "00347-BCLQ", event: "Phillipines", code: "PH", date: "23/12/2020", status: "Paid", amount: "100,000", category: "Transportation", badge: "Success", badgeColor: "bg-green-100 text-green-800" },
  { id: "4472-QREX", event: "Argentina", code: "AR", date: "17/09/2021", status: "Pending", amount: "10,000", category: "Insurance", badge: "Rejected", badgeColor: "bg-red-100 text-red-800" },
];

const BankDetails = () => {
  const [progress, setProgress] = useState(null);

  

  return (
    <div className="bg-gray-50 min-h-screen w-[83%] ml-[17%] py-8 px-6">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Bank Details Card */}
        <div className="mt-12 mb-8 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="px-6 py-5 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-800">Bank Details</h1>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Account Number</label>
                <div className="relative">
                  <input
                    type="text"
                    value="22001369"
                    
                    className="w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Account Name</label>
                <input
                  type="text"
                  value="Amrah Slamath"
                  
                  className="w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Bank Name</label>
                <input
                  type="text"
                  value="Commercial Bank"
                  
                  className="w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Branch</label>
                <input
                  type="text"
                  value="Maradana"
                  
                  className="w-full p-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Upload Bank Document (PDF)
              </label>
              <div className="flex items-center">
                <label className="flex flex-col items-center justify-center w-full p-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF (MAX. 5MB)</p>
                  </div>
                  <input type="file" accept=".pdf" className="hidden" />
                </label>
              </div>
            </div>
            
            {progress && (
              <div className="p-3 mt-4 text-sm text-green-700 rounded-lg bg-green-50">
                {progress}
              </div>
            )}
          </div>
          
          <div className="flex justify-end px-6 py-4 border-t border-gray-200 bg-gray-50">
            <button 
              className="px-6 py-2 font-medium text-white transition duration-150 bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700"
              onClick={() => setProgress("Bank details updated successfully!")}
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
              View All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Transaction ID</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Event</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-blue-600 uppercase">Date</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Amount</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Category</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{activity.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{activity.event}</div>
                      <div className="text-sm text-gray-500">Code: {activity.code}</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-blue-600 whitespace-nowrap">{activity.date}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">${activity.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{activity.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${activity.badgeColor}`}>
                        {activity.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;