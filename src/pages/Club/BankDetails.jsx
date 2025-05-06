import React, { useState } from "react";
import { assets } from "../../assets/assets";


const activities = [
  { id: "56037-XDER", event: "Brasil", code: "BR", date: "05/28/2020", status: "Paid", amount: "100,000",amount: "100,000", category: "Web, UI/UX Design", badge: "Approved", badgeColor: "bg-purple-200 text-purple-700" },
  { id: "05822-FXSP", event: "Belarus", code: "BY", date: "02/04/2020", status: "Rejected", amount: "100,000",amount: "100,000", category: "Houses & Hotels", badge: "Bidding", badgeColor: "bg-yellow-200 text-yellow-700" },
  { id: "00347-BCLQ", event: "Phillipines", code: "PH", date: "23/12/2020", status: "Paid", amount: "100,000",amount: "100,000", category: "Transportation", badge: "Success", badgeColor: "bg-green-200 text-green-700" },
  { id: "4472-QREX", event: "Argentina", code: "AR", date: "17/09/2021", status: "Pending", amount: "10,000",amount: "100,000", category: "Insurance", badge: "Rejected", badgeColor: "bg-red-200 text-red-700" },
  
  
];

const BankDetails = () => {
  const [progress, setProgress] = useState(null);

  // Handler function to show progress
  const showProgress = () => {
    setProgress("Progress checked successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 w-[83%] ml-[17%] mt-1 py-4 ">
      {/* Information Section */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg mt-24">
        <p className="text-3xl font-bold mb-6">Bank Details</p>
        <hr className="mb-6" />
        <div className="w-full p-6  rounded-xl">
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-sm font-medium">
                Account Number
              </label>
              <input
                type="text"
                value="22001369"
                readOnly
                className="w-full p-2 border rounded-md bg-gray-200"
              />
            </div>
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-sm font-medium">
                Account Name
              </label>
              <input
                type="text"
                value="Amrah Slamath"
                readOnly
                className="w-full p-2 border rounded-md bg-gray-200"
              />
            </div>
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-sm font-medium">
                Bank Name
              </label>
              <input
                type="text"
                value="Commercial Bank"
                readOnly
                className="w-full p-2 border rounded-md bg-gray-200"
              />
            </div>
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-sm font-medium">Branch</label>
              <input
                type="text"
                value="Maradana"
                readOnly
                className="w-full p-2 border rounded-md bg-gray-200"
              />
            </div>
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-sm font-medium">
                Upload Bank Document (PDF)
              </label>
              <input
                type="file"
                accept=".pdf"
                className="w-full h-[42px] p-2 border border-black rounded-md bg-gray-200 "
              />
            </div>
          </div>
        </div>
        {progress && (
          <p className="mt-4 text-center text-green-500">{progress}</p>
        )}
      </div>

      {/* Additional Information Section (can be filled in later) */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-3xl font-bold mb-6">Transaction</h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">Event Name</th>
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">Company Name</th>
                    <th className="py-2 px-4 text-blue-400 text-sm font-semibold">Sponsorship Type</th>
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">Date</th>
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">Amount</th>
                    <th className="py-2 px-4 text-gray-400 text-sm font-semibold">Receipt</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity, index) => (
                    <tr key={index} className="border-b">
                        <td className="py-2 px-4 font-medium text-xs text-gray-600">{activity.id}</td>
                        <td className="py-2 px-4">
                        <div>{activity.event}</div>
                        <div className="text-sm text-gray-500 ">Code: {activity.code}</div>
                        </td>
                        <div>{activity.amount}</div>
                        <td className="py-2 px-4 text-blue-600 font-medium text-xs">{activity.date}</td>
                        <td className="py-2 px-4 text-xs">
                        <div>{activity.amount}</div>
                        
                        <div className="text-sm text-gray-500 ">{activity.category}</div>
                        </td>
                        <td className="py-2 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${activity.badgeColor}`}>{activity.badge}</span>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
  
  );
};

export default BankDetails;
