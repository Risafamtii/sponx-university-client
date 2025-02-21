import React, { useState } from 'react';
import { Filter, Search } from "lucide-react";

const Sent = () => {
    const [activeBar, setActiveBar] = useState('Seen');
    const tabs = ["Seen", "Delivered", "Draft", "Failed"];
    
    const messages = [
        { id: 1, title: "System Update", content: "A new system update has been applied.", status: "Seen", timestamp: "Feb 17, 2025 - 10:30 AM" },
        { id: 2, title: "Meeting Reminder", content: "Don't forget about the team meeting at 3 PM.", status: "Delivered", timestamp: "Feb 16, 2025 - 02:00 PM" },
        { id: 3, title: "Event Invitation", content: "You are invited to the annual company event.", status: "Draft", timestamp: "Feb 15, 2025 - 09:00 AM" },
        { id: 4, title: "Security Alert", content: "Unusual login attempt detected.", status: "Failed", timestamp: "Feb 14, 2025 - 11:45 PM" },
        { id: 5, title: "System Update", content: "A new system update has been applied.", status: "Seen", timestamp: "Feb 17, 2025 - 10:30 AM" },
        { id: 7, title: "System Update", content: "A new system update has been applied.", status: "Seen", timestamp: "Feb 17, 2025 - 10:30 AM" },
        
    ];

    return (
        <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg flex flex-col items-center py-4 h-[90vh] overflow-y-auto'>
            <div className="flex justify-center gap-10 w-[60%] py-2 rounded-full border border-gray-300 font-semibold bg-gray-100 shadow-sm">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={`cursor-pointer relative px-4 py-1 transition-colors duration-300 ${activeBar === tab ? "text-blue-700 font-bold" : "text-gray-500"}`}
                        onClick={() => setActiveBar(tab)}
                    >
                        {tab}
                        {activeBar === tab && (
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-700 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between w-full px-[5%] my-3 pt-3">
                <div className='flex items-center gap-3 px-4 py-2 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
                    <Filter />
                    <button className='font-medium'>Filter</button>
                </div>
                <div className='flex items-center gap-3 px-4 py-1 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
                    <Search />
                    <input type="text" placeholder="Search..." className="w-40 px-2 py-1 bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>

            <div className='w-full mt-4 space-y-4 px-[5%]'>
                {messages.filter(msg => msg.status === activeBar).map((msg) => (
                    <div key={msg.id} className='p-4 transition-shadow border rounded-lg shadow-md bg-gray-50 hover:shadow-lg'>
                        <h3 className='text-lg font-semibold text-blue-700'>{msg.title}</h3>
                        <p className='text-gray-700'>{msg.content}</p>
                        <p className='mt-2 text-sm text-gray-500'>{msg.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sent;
