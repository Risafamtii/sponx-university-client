import React from 'react';

const EventForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-light-blue">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-3xl mt-16">
        <h1 className="text-2xl font-semibold mb-6 text-gray-700">Create Event</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="eventName" className="block text-gray-600 mb-2">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              placeholder="Enter Event Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventType" className="block text-gray-600 mb-2">
              Event Type
            </label>
            <input
              type="text"
              id="eventType"
              placeholder="Enter Event Type"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventDescription" className="block text-gray-600 mb-2">
              Event Description
            </label>
            <textarea
              id="eventDescription"
              placeholder="Enter Event Description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="eventDate" className="block text-gray-600 mb-2">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventLocation" className="block text-gray-600 mb-2">
              Event Location
            </label>
            <input
              type="text"
              id="eventLocation"
              placeholder="Enter Event Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventBudget" className="block text-gray-600 mb-2">
              Event Budget
            </label>
            <input
              type="text"
              id="eventBudget"
              placeholder="Enter Event Budget"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventCover" className="block text-gray-600 mb-2">Add Event Cover Photo</label>
            <label
                htmlFor="eventCover"
                className="inline-block bg-dark-blue text-white px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-700"
            >
                Upload
            </label>
                <input
                    type="file"
                    id="eventCover"
                    className="hidden" // Hide the actual file input
                />
            </div>

          <button
            type="submit"
            className="w-half py-2 px-4 bg-dark-blue text-white rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
