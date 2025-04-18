import React, { useState } from "react";

const CreateEvent = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [eventProposal, setEventProposal] = useState(null);
  const companies = ["WSO2", "IFS", "Google", "Microsoft", "Amazon"];

  const handleCompanySelect = (company) => {
    if (company && !selectedCompanies.includes(company)) {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const removeCompany = (company) => {
    setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
  };

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className="flex gap-6 p-6 w-[83%] ml-[17%] mt-[5%] items-center py-4 h-[90vh]">
      {/* Event Information Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl flex-1">
        <h2 className="text-xl font-semibold text-[#333]">Event Information</h2>

        <div className="mt-4">
          <label className="text-[#555]">Name</label>
          <input
            type="text"
            className="w-full bg-blue-50 p-2 px-4 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#4C6EF5]"
            placeholder="Halloween Night 2024"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="text-[#555]">Date</label>
            <input
              type="date"
              className="w-full bg-blue-50 p-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#4C6EF5]"
            />
          </div>
          <div>
            <label className="text-[#555]">Budget</label>
            <input
              type="text"
              className="w-full bg-blue-50 p-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#4C6EF5]"
              placeholder="Rs. 80,000"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-[#555]">Location</label>
          <input
            type="text"
            className="w-full bg-blue-50 p-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#4C6EF5]"
            placeholder="123, Pandaura Road, Town Hall"
          />
        </div>

        <div className="mt-4">
          <label className="text-[#555]">Description</label>
          <textarea
            className="w-full bg-blue-50 p-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#4C6EF5]"
            rows="4"
            placeholder="Enter event details here..."
          ></textarea>
        </div>

        <div className="mt-4">
          <label className="text-[#555]">Companies for Sponsorship Requests</label>
          <select
            className="w-full bg-blue-50 p-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#4C6EF5]"
            onChange={(e) => handleCompanySelect(e.target.value)}
          >
            <option value="">Select a company</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {selectedCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-[#E0E7FF] text-[#4C6EF5] px-3 py-1 rounded-md flex items-center gap-2"
            >
              {company}
              <button
                onClick={() => removeCompany(company)}
                className="text-[#4C6EF5] font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Cancel</button>
          <button className="px-4 py-2 bg-[#4C6EF5] text-white rounded-md">Create</button>
        </div>
      </div>

      {/* Right Side: Event Cover Photo & Event Proposal */}
      <div className="flex flex-col gap-4 w-1/3">
        {/* Event Cover Photo Card */}
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h3 className="font-semibold mb-3">Event Cover Photo</h3>
          <div className="p-8 bg-blue-50 border-dashed border-2 border-[#4C6EF5] rounded-lg flex flex-col items-center justify-center cursor-pointer">
            <input type="file" accept="image/*" className="hidden" id="cover-photo" onChange={(e) => handleFileChange(e, setCoverPhoto)} />
            <label htmlFor="cover-photo" className="text-[#4C6EF5] cursor-pointer">Click to upload</label>
            <p className="text-sm text-[#555]">SVG, PNG, JPG, GIF (max 800x800px)</p>
            {coverPhoto && <p className="text-sm text-[#555] mt-2">{coverPhoto.name}</p>}
          </div>
          <div className="mt-4 flex justify-end gap-4">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Cancel</button>
            <button className="px-4 py-2 bg-[#4C6EF5] text-white rounded-md">Save</button>
          </div>
        </div>

        {/* Event Proposal Card */}
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <h3 className="font-semibold mb-3">Event Proposal</h3>
          <div className="p-8 bg-blue-50 border-dashed border-2 border-[#4C6EF5] rounded-lg flex flex-col items-center justify-center cursor-pointer">
            <input type="file" accept=".pdf,.doc,.docx" className="hidden" id="event-proposal" onChange={(e) => handleFileChange(e, setEventProposal)} />
            <label htmlFor="event-proposal" className="text-[#4C6EF5] cursor-pointer">Click to upload</label>
            <p className="text-sm text-[#555]">SVG, PNG, JPG, GIF (max 800x800px)</p>
            <p className="text-sm text-[#555]">PDF, DOC (max 10MB)</p>
            {eventProposal && <p className="text-sm text-[#555] mt-2">{eventProposal.name}</p>}
          </div>
          <div className="mt-4 flex justify-end gap-4">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Cancel</button>
            <button className="px-4 py-2 bg-[#4C6EF5] text-white rounded-md">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
