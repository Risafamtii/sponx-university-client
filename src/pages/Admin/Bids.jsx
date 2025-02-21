import { data } from 'jquery'
import React from 'react'
import { assets } from '../../assets/assets'
import { FaCheckCircle, FaClock, FaGavel } from 'react-icons/fa'
import { Filter, Search } from 'lucide-react'

const Bids = () => {
  const events = [
    { id: 1, title: "Sant Outstanding", club: "Gavel Club UOC", budget: "2,000,000 LKR", date: "Jan 15", year: "2025", company: "IFS PVT (LTD)", sponsor: "Gold Sponsor", company: "IFS"},
    { id: 2, title: "Telegram Mobile", club: "Gavel Club", budget: "4,600,000 LKR", date: "Feb 12", year: "2025", company: "IFS PVT (LTD)", sponsor: "Silver Sponsor", company: "WSO2" },
    { id: 3, title: "Cisco Management", club: "bprow@bnc.cc", budget: "560,000 LKR", date: "Mar 4", year: "2025", company: "IFS PVT (LTD)", sponsor: "Bronze Sponsor", company: "SYSCO LABS" },
    { id: 4, title: "Beats Studio", club: "bprow@bnc.cc", budget: "57,000 LKR", date: "Jun 3", year: "2025", company: "IFS PVT (LTD)", sponsor: "Platinum Sponsor", company: "IFS" },
    // { id: 5, title: "KTR Application", club: "bprow@bnc.cc", budget: "45,200,000 LKR", date: "Dec 19", year: "2025", company: "IFS PVT (LTD)", sponsor: "Gold Sponsor" }
  ];

  return (
    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg items-start py-4 h-[90vh] overflow-y-auto grid grid-cols-5'>

      <div className='col-span-2 p-4 mx-5 bg-white shadow-lg rounded-xl min-h-[400px]'>
        <h2 className='mb-4 ml-2 text-lg font-semibold'>Will Expire Soon..</h2>
        <div className='flex flex-col gap-1'> 
          {events.map((event) => (
            <div key={event.id} className='flex items-center justify-between px-2 py-2 transition duration-300 rounded-lg cursor-pointer bg-gray-50 group hover:bg-slate-100 hover:scale-105 hover:shadow-lg'>
              <div className='flex items-center gap-3'>
                <img src={assets.event} alt="event" className='w-12 h-12 rounded-lg' />
                <div>
                  <p className='font-medium'>{event.title}</p>
                  <p className='text-sm text-gray-500'>{event.club}</p>
                  <p className='text-xs text-blue-500'><span>Due: </span>{event.date} <span>of </span>{event.year}</p>
                </div>
              </div>
              <p className='font-semibold'>{event.budget}</p>
            </div>
          ))}
        </div>
      </div>


      <div className='col-span-2 p-4 mr-5 bg-white shadow-lg rounded-xl min-h-[400px]'>
        <h2 className='mb-4 ml-2 text-lg font-semibold'>Recently Requested</h2>
          <div className='flex flex-col gap-1'> 
            {events.map((event) => (
              <div key={event.id} className='flex items-center justify-between px-2 py-2 transition duration-300 rounded-lg cursor-pointer bg-gray-50 group hover:bg-slate-100 hover:scale-105 hover:shadow-lg'>
                <div className='flex items-center gap-3'>
                  <img src={assets.event} alt="event" className='w-12 h-12 rounded-lg' />
                  <div>
                    <p className='font-medium'>{event.title}</p>
                    <p className='text-sm text-gray-500'>{event.club}</p>
                    <p className='text-xs text-blue-500'><span>Due: </span>{event.date} <span>of </span>{event.year}</p>
                    </div>
                </div>
                <p className='font-semibold'>{event.budget}</p>
              </div>
            ))}
          </div>
      </div>


      <div className='flex flex-col justify-between h-[400px] col-span-1 mr-5'>
        
        <div className='flex flex-col p-4 text-white bg-[#FEB4C8] rounded-lg shadow-lg h-[30%] transition duration-300 hover:bg-[#e97c99] hover:scale-105'> 
          <FaGavel className='mb-2 text-2xl' />
          <h3 className='text-xl font-bold'>19</h3>
          <p className='text-sm'>Active Biddings</p>
        </div>
        <div className='flex flex-col p-4 text-white bg-[#81D9DA] rounded-lg shadow-lg h-[30%] transition duration-300 hover:bg-[#4db7b9] hover:scale-105'>
          <FaClock className='mb-2 text-2xl' />
          <h3 className='text-xl font-bold'>19</h3>
          <p className='text-sm'>Ongoing Biddings</p>
        </div>
        <div className='flex flex-col p-4 text-white bg-[#704CB8] rounded-lg shadow-lg h-[30%] transition duration-300 hover:bg-[#4a2f6f] hover:scale-105'>
          <FaCheckCircle className='mb-2 text-2xl' />
          <h3 className='text-xl font-bold'>19</h3>
          <p className='text-sm'>Completed Biddings</p>
        </div>
      </div>

      <div className='col-span-5 pt-3 mx-5 my-3 bg-white rounded-lg shadow-lg border-[1px]'>
        <div className="flex items-center justify-between w-full px-6 pt-3 my-3">
          <div className='flex items-center gap-3 px-6 py-2 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
            <Filter />
            <button className='font-medium'>Filter</button>
          </div>
          <div className='flex items-center gap-3 px-4 py-1 bg-gray-100 border rounded-full shadow-md cursor-pointer hover:bg-gray-200'>
            <Search />
            <input type="text" placeholder="Search..." className="w-40 px-2 py-1 bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <table className="w-full mt-4 bg-white rounded-lg shadow-lg">
          <tbody className="text-sm text-gray-700">
            {events.map((event) => (
              <tr key={event.id} className="transition duration-200 border-b hover:bg-gray-50">
                <td className='px-6 py-4'>
                  <div className='flex flex-col items-start justify-center'>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-xs text-gray-500"><span className='font-semibold'>By: </span>{event.club}</p>
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex flex-col items-end justify-center'>
                    <p className='font-semibold'>{event.budget}</p>
                    <p className='text-xs text-gray-500'>Budget</p>
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex flex-col items-end justify-center'>
                    <p className='font-semibold'>{event.date}</p>
                    <p className='text-xs text-gray-500'>{event.year}</p>
                  </div>
                  
                </td>

                <td className='px-6 py-4'>
                  <div className='flex flex-col items-end justify-center'>
                    <p className='font-semibold'>{event.company}</p>
                    <p className='text-xs text-gray-500'>Sponsored</p>
                  </div>
                </td>

                <td className='px-6 py-4'>
                  <div className='flex flex-col items-end justify-center'>
                    <img src={assets.gold} alt="" />
                    <p className='text-xs text-gray-500'>Gold Sponsor</p>
                  </div>
                </td>

                <td className="px-6 py-4 text-center">
                  <button className="px-4 py-2 text-white transition duration-200 bg-[#333333] rounded-lg hover:bg-[#1e1d1d] font-bold">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Bids
