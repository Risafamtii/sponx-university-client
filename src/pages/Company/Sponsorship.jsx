import { BsGridFill, BsBarChartFill } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";

export default function SponsorshipDashboard() {
    const sponsorships = [
        {
            id: 1,
            org: "IEEE - UCSC",
            event: "Creating Awesome Mobile Apps",
            amount: "120,000 LKR",
            time: "1 day",
            description: "Progress",
            image: "/images/mobile-app.jpg",
        },
        {
            id: 2,
            org: "IEEE - UCSC",
            event: "Creating Awesome Mobile Apps",
            amount: "120,000 LKR",
            time: "1 day",
            description: "Progress",
            image: "/images/mobile-app.jpg",
        },
        {
            id: 3,
            org: "IEEE - UCSC",
            event: "Creating Awesome Mobile Apps",
            amount: "120,000 LKR",
            time: "1 day",
            description: "Progress",
            image: ".\assets\img\event3.png",
        },
        {
            id: 4,
            org: "IEEE - UCSC",
            event: "Creating Awesome Mobile Apps",
            amount: "120,000 LKR",
            time: "1 day",
            description: "Progress",
            image: "/images/mobile-app.jpg",
        },
    ];

    return (
        <div className="w-[83%] bg-white ml-[17%] ">


            {/* Main Content */}
            <div className="flex-1 grid grid-cols-3 gap-6">
                {/* Left Section (2/3) */}
                <div className="col-span-2 p-4  ">
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
                            <div key={index} className="bg-white shadow rounded-lg p-4 flex items-start space-x-4">
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
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded">More Info</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
