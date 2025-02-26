import { useState } from "react";
import { BsGridFill, BsBarChartFill } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import { assets } from "../../assets/assets";

export default function SponsorshipDashboard() {
    const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event for modal

    const sponsorships = [
        {
            id: 1,
            org: "IEEE - UCSC",
            event: "Creating Awesome Mobile Apps",
            amount: "120,000 LKR",
            time: "1 day",
            description: "Progress",
            image: assets.image3,
        },
        {
            id: 2,
            org: "IEEE - UCSC",
            event: "Creating Awesome Mobile Apps",
            amount: "120,000 LKR",
            time: "1 day",
            description: "Progress",
            image: assets.image1,
        },
        {
            id: 3,
            org: "IEEE - UCSC",
            event: "Creating Awesome Mobile Apps",
            amount: "120,000 LKR",
            time: "1 day",
            description: "Progress",
            image: assets.image3,
        },
        {
            id: 4,
            org: "IEEE - UCSC",
            event: "Celebrating 25 Years of Excellence",
            amount: "120,000 LKR",
            time: "1 day",
            description: "Progress",
            image: assets.image2,
        },
        {
            id: 5,
            org: "IEEdE - UCSC",
            event: "Celedbrating 25 Years of Excellence",
            amount: "120,3000 LKR",
            time: "1 dsssay",
            description: "Prosssgress",
            image: assets.image2,
        },
    ];

    return (
        <div className="w-[83%] mt-[4%] bg-white ml-[17%]">
            {/* Main Content */}
            <div className="flex-1 grid grid-cols-3 gap-6">
                {/* Left Section (2/3) */}
                <div className="col-span-2 p-4">
                    {/* Header Cards */}
                    <div className="grid grid-cols-2 gap-4 p-8">
                        <div className="bg-blue-500 text-white p-10 rounded-lg flex items-center">
                            <BsGridFill className="text-4xl mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">All Requests</h3>
                                <p className="text-sm">All the sponsorship requests received</p>
                            </div>
                        </div>
                        <div className="bg-gray-900 text-white p-6 rounded-lg flex items-center">
                            <BsBarChartFill className="text-4xl mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">Pending Requests</h3>
                                <p className="text-sm">Sponsorship Requests to be approved</p>
                            </div>
                        </div>
                    </div>

                    {/* Sponsorship List */}
                    <div className="mt-6 space-y-4">
                        {sponsorships.map((s, index) => (
                            <div
                                key={index}
                                className="bg-white shadow rounded-lg p-4 flex items-start space-x-4 cursor-pointer"
                                onClick={() => setSelectedEvent(s)} // Set selected event on click
                            >
                                <img src={s.image} alt="Event" className="h-12 w-12 rounded-full object-cover" />
                                <div className="flex-1">
                                    <h4 className="font-semibold">{s.org}</h4>
                                    <p className="text-gray-500 text-sm">{s.time}</p>
                                    <p className="font-semibold mt-1">
                                        Event Name: <span className="text-blue-500">{s.event}</span>
                                    </p>
                                    <p className="text-green-500 font-bold">Amount {s.amount}</p>
                                    <p className="text-sm text-gray-600 mt-1">{s.description}</p>
                                </div>
                                <FaEllipsisH className="text-gray-500 cursor-pointer" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section (1/3) - Sponsorship Cards */}
                <div className="min-h-screen bg-gray-100">
                    <div className="space-y-3">
                        {sponsorships.slice(0, 3).map((s, index) => (
                            <div key={index} className="bg-white shadow rounded-lg p-3 m-5">
                                <img src={s.image} alt="Event" className="rounded-lg w-full h-28 object-cover" />
                                <h4 className="font-semibold mt-3">{s.event}</h4>
                                <p className="text-gray-500 text-sm">{s.org}</p>
                                <p className="text-blue-500 font-semibold">{s.description}</p>
                                <p className="text-green-500 font-bold text-lg">{s.amount}</p>
                                <div className="flex justify-between mt-3">
                                    <button className="bg-green-500 text-white px-4 py-2 rounded">Accept</button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => setSelectedEvent(s)}>More Info</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg w-[1000px] p-8 shadow-lg">
                        <div className="flex justify-between items-center border-b pb-2">
                            <h2 className="text-xl font-semibold">{selectedEvent.event}</h2>
                            <button
                                className="text-gray-500 hover:text-red-500 text-lg"
                                onClick={() => setSelectedEvent(null)} // Close modal
                            >
                                ✕
                            </button>
                        </div>

                        <div className="flex border-b mt-4">
                            <button className="p-2 border-b-2 border-blue-500 text-blue-500 font-semibold">
                                Details
                            </button>
                            <button className="p-2 text-gray-500">Attachments</button>
                            <button className="p-2 text-gray-500">Other</button>
                        </div>

                        <div className="mt-4 space-y-3">
                            <p className="text-gray-600">{selectedEvent.org}</p>
                            <div className="flex justify-between bg-gray-100 p-4 pr-6 pl-6 rounded">
                                <div>
                                    <h4 className="text-sm text-gray-500">Amount Seeking for Sponsorship</h4>
                                    <p className="text-lg font-semibold">{selectedEvent.amount}</p>
                                </div>
                                <div p-6>
                                    <h4 className="text-sm text-gray-500">Sponsor Type</h4>
                                    <p className="text-lg font-semibold text-yellow-500">Gold</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-3 rounded">
                                <h4 className="text-sm text-gray-500">Description</h4>
                                <p className="text-gray-600">{selectedEvent.description}</p>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-2 mt-5">
                            <button className="px-4 py-2 border rounded-lg">Reply</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Reject</button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Accept</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
