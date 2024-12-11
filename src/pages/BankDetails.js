import React from "react";
import { assets } from "../assets/assets"; // Assuming assets are imported from the assets folder

const BankDetails = () => {
  React.useEffect(() => {
    // Prevent scrolling when the page is open
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Main form content */}
      <div className="fixed w-full max-w-3xl p-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
        
        {/* Header with logo and title */}
        <div className="flex items-center mb-6">
          <img src={assets.logo} alt="Logo" className="mr-4 h-18 w-18" />
          <h2 className="text-4xl text-blue-900 font-xs">Bank Details</h2>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Account Holder and Account Number */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700">
                Account Holder's Name
              </label>
              <input
                type="text"
                id="accountHolder"
                placeholder="Enter name"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="number"
                id="accountNumber"
                placeholder="Enter account number"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Bank Name and Branch */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                placeholder="Enter bank name"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                Bank Branch
              </label>
              <input
                type="text"
                id="branch"
                placeholder="Enter branch name"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Account Type and Holder's NIC */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <select
                id="accountType"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select account type</option>
                <option value="savings">Savings</option>
                <option value="current">Current</option>
                <option value="fixed">Fixed Deposit</option>
              </select>
            </div>
            <div>
              <label htmlFor="holderNIC" className="block text-sm font-medium text-gray-700">
                Account Holder's NIC
              </label>
              <input
                type="text"
                id="holderNIC"
                placeholder="Enter NIC"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Address and Contact Number */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="holderAddress" className="block text-sm font-medium text-gray-700">
                Account Holder's Address
              </label>
              <textarea
                id="holderAddress"
                rows="3"
                placeholder="Enter address"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="holderContactNumber" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                id="holderContactNumber"
                placeholder="Enter contact number"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-lg font-semibold text-white bg-blue-900 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankDetails;
