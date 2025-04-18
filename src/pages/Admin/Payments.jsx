import React from 'react'
import { FaCoins,FaUndo, FaTelegramPlane,FaSearch  } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { assets } from '../../assets/assets'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";
import { Filter } from 'lucide-react';
import { Link } from 'react-router-dom';


const Payments = () => {

  const invoices = [
    {
      id:1,
      name:"Risafa",
      position:"Treasurer",
      club:"Gavel UOC",
      avatar:assets.compro
      
    },
    {
      id:1,
      name:"Nishaza",
      position:"Treasurer",
      club:"Aisec UOC",
      avatar:assets.compro
      
    },
    {
      id:1,
      name:"Ilthizam",
      position:"Treasurer",
      club:"Rotract UOC",
      avatar:assets.compro
      
    }
    
  ]

  const data = [
    { name: "Jan", investment: 10000 },
    { name: "Feb", investment: 25000 },
    { name: "Mar", investment: 18000 },
    { name: "Apr", investment: 35000 },
    { name: "May", investment: 21000 },
    { name: "Jun", investment: 29000 },
    { name: "Jul", investment: 32000 },
  ]

  const activities = [
      {
        author: "IEEE EXTREME",
        subtext: "IEEE-Student Branch",
        transID:"1231S",
        card:"20013234532 VISA",
        dueDate: "2025.10.10",
        amount: "Rs.100,000",
        avatar: assets.compro
      },
      {
        author: "Haloween Fiesta",
        subtext: "GAVEL-UOC",
        transID:"12322E",
        card:"20013234532 VISA",
        dueDate: "2025.10.10",
        amount: "Rs.45,000",
        avatar: assets.compro
      },
      {
        author: "Rotaract-Baxx",
        subtext: "UJFE",
        transID:"1240D",
        card:"20013234532 VISA",
        dueDate: "2025.10.10",
        amount: "Rs.200,000",
        avatar: assets.compro
      }
    ];
  return (
    
    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg items-start py-4 h-[90vh] overflow-y-auto '>
      
      <div className='flex flex-row items-center justify-between w-full  h-[30%] p-4'>
        
        <div className='w-[25%] h-[90%] bg-gray-100 rounded-xl shadow-xl p-4  ml-4 flex  flex-row hover:bg-gray-200 transition duration-300'>
          
          <div className='bg-white-200 w-[90%] h-auto  flex-row  flex gap-7'>
            
          <div className=''>
          <FaCoins className='mt-5 ml-4 text-5xl text-yellow-400' />
          </div>
          
          <div className='flex flex-col mt-3'>
            <h1 className='text-lg text-black'>Total Revenue</h1>
            <p className='text-2xl font-semibold text-center text-gray-800 '>Rs.100,000</p>
          </div>
          
          </div>
        </div>
      
        <div className='flex flex-row justify-between gap-5 mr-4 '>
          
          <div className='min-h-[90%] bg-pink-100 rounded-xl shadow-xl p-4  flex  flex-row hover:bg-pink-200 transition duration-300'>
            
            <div className=' w-[90%] h-auto  flex-row  flex gap-7'>
              
            <div className=''>
            <FaSackDollar className='mt-5 ml-4 text-3xl text-pink-400' />
            </div>
            
            <div className='flex flex-col mt-2'>
              <h1 className='text-sm text-black'>Total Transactions</h1>
              <p className='text-lg font-semibold text-center text-gray-800 '>Rs.100,000</p>
            </div>
            
            </div>
          </div>
          
          <div className='min-h-[90%] bg-pink-100 rounded-xl shadow-xl p-4  flex  flex-row hover:bg-pink-200 transition duration-300'>
            
            <div className='bg-white-200 w-[90%] h-auto  flex-row  flex gap-7'>
              
            <div className=''>
            <FaSackDollar className='mt-5 ml-4 text-3xl text-gray-400' />
            </div>
            
            <div className='flex flex-col mt-2'>
              <h1 className='text-sm text-black'>Total Transactions</h1>
              <p className='text-lg font-semibold text-center text-gray-800 '>Rs.100,000</p>
            </div>
            
            </div>
          </div>      
        
              
          <div className=' min-h-[90%] max-w-full bg-pink-100 rounded-xl shadow-xl p-4  flex  flex-row hover:bg-pink-200 transition duration-300'>
            
            <div className='bg-white-200 w-[90%] h-[90%]  flex-row  flex gap-7'>
              
            <div className=''>
            <FaUndo className='mt-5 ml-4 text-3xl text-gray-400' />
            </div>
            
            <div className='flex flex-col mt-2'>
              <h1 className='text-sm text-black'>Reje. Transactions</h1>
              <p className='mr-5 text-lg font-semibold text-center text-gray-800'>Rs.100,000</p>
            </div>
            
            </div>
          </div>
        
        </div>

      </div>

      <div className="flex flex-row items-start justify-between p-4 bg-white">
        <div className="h-full flex-1 max-w-[45%] p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold">Invoices Sent</h1>
          <div className='h-0.5 mt-2 bg-green-300'/>
          <div className="flex flex-row w-full h-full mt-2">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex flex-col items-center p-3 text-center">
                <img src={invoice.avatar} alt="Profile" className="w-20 h-20 p-1 border rounded-full" />
                <p className="font-medium text-gray-700">{invoice.name}</p>
                <p className="text-sm text-gray-500">{invoice.position}</p>
                <p className="text-sm text-gray-500">{invoice.club}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-end px-10 '>
          <button className="mt-3 font-semibold text-white transition rounded-full hover:bg-blue-600 bg-blue-500 w-[23%] flex items-center p-1 gap-2 transition duration-300">
            <h1 className="ml-2">Check</h1>
            <FaTelegramPlane className="text-xl text-white" />
          </button>
          </div>
          
        </div>
        
        <div className="h-full flex-1 max-w-[45%] p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold">Monthly Revenue</h1>
          <div className='h-0.5 mt-2 bg-green-300'/>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" tick={{ fontSize: 12 }} />
                <YAxis stroke="#6B7280" tick={{ fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="investment"
                  stroke="#177695"
                  strokeWidth={4}
                  dot={{ r: 6, fill: "#177695", strokeWidth: 2, stroke: "white" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
  
      </div>

      <div className="p-4 ml-4 mr-4 bg-white border-2 shadow-lg rounded-xl">
        
        <h1 className='mb-3 text-lg font-semibold'>Recent Transactions</h1>
        
        <div className='flex flex-row gap-10'>
          
          <div className='flex flex-col'>
            <Link to="admin/transcation">
            <h1 className='font-semibold text-blue-600'>All Transactions</h1>
            <div className='h-0.5 mt-2 bg-blue-600'/>
            </Link>
          </div>
          
          <Link to="admin/lastmonthTrans">
            <h1 className='opacity-20'>Last-Month Trans.</h1>
          </Link>
          
        </div>
        
        <div className="flex items-center justify-between w-full mt-4 mb-4">
          
          <div className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 border rounded-full shadow-sm cursor-pointer hover:bg-gray-200">
            <Filter />
            <button className="font-medium">Filter</button>
          </div>
          
          <div className="relative w-1/4">
            <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-10 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>
          
        </div>

  
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-sm font-semibold text-gray-700 uppercase bg-gray-100 border-b">
            <th className="px-6 py-4 text-center">Event</th>
            <th className="px-6 py-4 text-center">Transaction ID</th>
            <th className="px-6 py-4 text-center">Card</th>
            <th className="px-6 py-4 text-center">Date</th>
            <th className="px-6 py-4 text-center">Amount</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {activities.map((activity, index) => (
            <tr
              key={index}
              className="transition duration-200 border-b hover:bg-gray-50"
            >
              <td className="flex items-center gap-4 px-6 py-4">
                <img
                  src={activity.avatar}
                  alt="Avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-md"
                />
                <div>
                  <p className="font-semibold text-gray-900">{activity.author}</p>
                  <p className="text-xs text-gray-500">{activity.subtext}</p>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-center text-gray-700">
                {activity.transID}
              </td>
              <td className="px-6 py-4 font-medium text-center text-gray-700">
                {activity.card}
              </td>
              <td className="px-6 py-4 font-medium text-center text-gray-700">
                {activity.dueDate}
              </td>
              <td className="px-6 py-4 font-medium text-center text-gray-900">
                ${activity.amount}
              </td>
              <td className="px-6 py-4 text-center">
                <Link to="/admin/events/view">
                  <button className="px-4 py-2 text-sm font-medium text-blue-900 transition bg-white rounded-lg shadow hover:bg-gray-100">
                    Download
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>


    </div>
    
  )
}

export default Payments