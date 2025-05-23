import React, { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [banner, setCoverPhoto] = useState(null);
  const [proposal, setEventProposal] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const initialFormState = {
    name: "",
    date: "",
    budget: "",
    location: "",
    description: "",
    type: ""
  };

  const [formData, setFormData] = useState(initialFormState);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("budget", formData.budget);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("type", formData.type);

      formDataToSend.append("companies", JSON.stringify(selectedCompanies));

      if (banner) {
        formDataToSend.append("banner", banner);
      }

      if (proposal) {
        formDataToSend.append("proposal", proposal);
      }

      const response = await axios.post(
        "http://localhost:8080/api/v1/events",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (response.data.success) {
        setSuccess(true);
        setFormData(initialFormState);
        setSelectedCompanies([]);
        setCoverPhoto(null);
        setEventProposal(null);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to create event");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex gap-6 p-6 w-[83%] ml-[17%] mt-[5%] items-start py-4 min-h-screen bg-gray-50">
      {/* Left Side: Event Form */}
      <div className="flex-1 max-w-3xl p-6 bg-white shadow-lg rounded-xl">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">Create New Event</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Event Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Halloween Night 2024"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Budget (LKR)</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="80,000"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="123, Pandura Road, Town Hall"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Enter event details here..."
                required
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Type</label>
              <textarea
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="2"
                placeholder="Event Type"
                required
              ></textarea>
            </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Sponsorship Requests</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => handleCompanySelect(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>Select a company</option>
                  {companies.map((company, index) => (
                    <option key={index} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedCompanies.map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
                    >
                      {company}
                      <button
                        type="button"
                        onClick={() => removeCompany(company)}
                        className="text-lg font-bold text-blue-800 hover:text-blue-600"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create Event"}
              </button>
            </div>

            {error && <p className="mt-2 text-red-600">{error}</p>}
            {success && <p className="mt-2 text-green-600">Event created successfully!</p>}
          </div>
        </form>
      </div>

      {/* Right Side: Upload Cards */}
      <div className="flex flex-col w-1/3 gap-6">
        {/* Cover Photo */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Event Cover Photo</h3>
          <div className="p-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:border-blue-500">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="cover-photo"
              onChange={(e) => handleFileChange(e, setCoverPhoto)}
            />
            <label htmlFor="cover-photo" className="flex flex-col items-center justify-center cursor-pointer">
              <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-medium text-blue-600">Click to upload</p>
              <p className="mt-1 text-xs text-center text-gray-500">SVG, PNG, JPG, GIF (max 800x800px)</p>
            </label>
          </div>
          {banner && <p className="mt-2 text-sm text-gray-700">{banner.name}</p>}
        </div>

        {/* Event Proposal */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Event Proposal (PDF)</h3>
          <div className="p-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:border-blue-500">
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              id="event-proposal"
              onChange={(e) => handleFileChange(e, setEventProposal)}
            />
            <label htmlFor="event-proposal" className="flex flex-col items-center justify-center cursor-pointer">
              <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M12 4h9m-9 8h9M3 20h.01M3 4h.01M3 12h.01" />
              </svg>
              <p className="font-medium text-blue-600">Click to upload</p>
              <p className="mt-1 text-xs text-center text-gray-500">Only PDF format supported</p>
            </label>
          </div>
          {proposal && <p className="mt-2 text-sm text-gray-700">{proposal.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;