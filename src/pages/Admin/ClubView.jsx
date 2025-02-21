import React from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'


const ClubView = () => {
    const [showEvents, setShowEvents] = useState(false);

  const upcomingEvents = [
    { title: "World History", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VII-B" },
    { title: "Ancient History", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VII-A" },
    { title: "Culture", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VIII-A" },
    { title: "World History", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VII-C" },
    // { title: "Culture", date: "March 20, 2021", time: "09:00 - 10:00 AM", class: "Class VIII-A" },
  ];
  return (
    <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg h-[90vh] overflow-y-auto relative flex flex-col justify-start items-start">

        <div className='w-full h-[20%] bg-[#1B264B] rounded-t-xl flex items-center justify-center'>
            <div className="relative w-full overflow-hidden">
                <img src={assets.clubCover} alt="Club Cover" className="object-cover w-full h-full" />
            </div>

            <div className="absolute left-[2%] top-[8%] z-10 w-[120px] h-[120px]">
                <img src={assets.profilepic} alt="Profile" className="w-full h-full border-4 border-white rounded-full shadow-lg" />
            </div>
        </div>

        <div className='w-full mt-[5%] pl-[2%]'>
            <div className='flex flex-col'>
                <span className='text-[#303972] font-bold text-2xl pb-2'>Gavel Club</span>
                <span className='text-[#A098AE] font-semibold'>University of Colombo</span>
                <span className='text-[#A098AE] font-semibold'>Faculty of Science</span>
            </div>
        </div>

        <div className='px-[2%] my-[2%] flex justify-between w-full'>
            <div className='flex items-center justify-center gap-3'>
                <img src={assets.facebook} />
                <span className='text-[#303972] font-semibold'>Gavel Club</span>
            </div>

            <div className='flex items-center justify-center gap-3'>
                <img src={assets.instagram} />
                <span className='text-[#303972] font-semibold'>Gavel Club</span>
            </div>

            <div className='flex items-center justify-center gap-3'>
                <img src={assets.phone} />
                <span className='text-[#303972] font-semibold'>Gavel Club</span>
            </div>

            <div className='flex items-center justify-center gap-3'>
                <img src={assets.mail} />
                <span className='text-[#303972] font-semibold'>Gavel Club</span>
            </div>

            <div className='flex items-center justify-center gap-3'>
                <img src={assets.location} />
                <span className='text-[#303972] font-semibold'>Gavel Club</span>
            </div>
            
        </div>

        <div className='ml-[2%]'>
            <span className='text-[#303972] font-bold text-xl'>Description : </span>
            <p className='text-[#303972] my-[1%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>

        <div className="ml-[2%] mt-[2%] w-[60%]">
            <span className="text-[#303972] font-bold text-xl">Contact Details:</span>
            <div className="mt-[1%] grid grid-cols-2 gap-6">

                <div className="flex flex-col gap-4 my-[2%]">
                    <ul className="list-disc pl-4 text-[#303972] space-y-2">
                        <li>
                            <span className="font-semibold">Primary Contact Person:</span><br />
                            <span className="text-[#A098AE] ml-2">PineApple-Secretary</span>
                        </li>
                        <li>
                            <span className="font-semibold">Phone Number:</span><br />
                            <span className="text-[#A098AE] ml-2">0701234576</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <ul className="list-disc pl-4 text-[#303972] space-y-2">
                        <li>
                            <span className="font-semibold">Contact Email:</span><br />
                            <span className="text-[#A098AE] ml-2">pineapple@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='ml-[2%] my-[2%]'>
            <span className='text-[#303972] font-bold text-xl'>Mission : </span>
            <p className='text-[#303972] my-[2%]'>
            World History, Philosophy, Prehistoric, Culture, Ancient
            </p>
        </div>

        <div className="flex justify-center w-full my-4">
        <button
          onClick={() => setShowEvents(!showEvents)}
          className="bg-[#303972] text-white px-4 py-2 rounded-lg shadow-md"
        >
          {showEvents ? "Hide Events" : "Show Upcoming Events"}
        </button>
      </div>

      {showEvents && (
  <div className="fixed inset-0 z-50 flex justify-end overflow-y-auto bg-black bg-opacity-50">
    <div className="w-[20%] bg-[#303972] rounded-l-lg p-6 shadow-xl border border-[#303972] relative overflow-y-auto">
      <button 
        onClick={() => setShowEvents(false)} 
        className="absolute text-xl text-white top-2 right-2 hover:text-gray-300"
      >
        ✖
      </button>
      <h2 className="mb-3 text-xl font-bold text-center text-white">Upcoming Events</h2>
      <div className="flex flex-col gap-3">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="relative p-4 bg-white rounded-lg shadow-md border-l-8 border-[#8591c2] 
                      group transition-all duration-300 hover:from-[#4A5FA2] hover:to-[#6B7FD7] hover:border-gray-800 hover:scale-105"
          >
            <h3 className="font-semibold text-black">{event.title}</h3>
            <p className="text-[#374785] text-sm">{event.class}</p>
            <p className="text-[#374785] text-sm">{event.date}</p>
            <p className="text-[#374785] text-sm">{event.time}</p>

            {/* View Button - More Vibrant and Visible on Hover */}
            <button 
              className="absolute px-3 py-1 font-bold text-white transition-opacity duration-300 bg-gray-800 rounded-lg shadow-md opacity-0 bottom-3 right-3 group-hover:opacity-100 hover:bg-gray-950"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

    </div>

  )
}

export default ClubView
