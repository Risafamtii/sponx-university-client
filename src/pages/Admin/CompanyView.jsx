import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { assets } from '../../assets/assets'

const CompanyView = () => {

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
            companyStatus: "Fully Funded",
            progress: "Rs.100,000",
            statusColor: "green-500",
            avatar: assets.compro
        },
        {
            author: "Haloween Fiesta",
            subtext: "GAVEL-UOC..",
            companyStatus: "Approved",
            progress: "Rs.45,000",
            statusColor: "blue-500",
            avatar: assets.compro
        },
        {
            author: "Rotaract-Baxx",
            subtext: "UJFE",
            companyStatus: "Rejected",
            progress: "Rs.200,000",
            statusColor: "red-500",
            avatar: assets.compro
        }
    ]
    
  return (
    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg items-start py-4 h-[90vh] overflow-y-auto grid grid-cols-3'>
        <div className='col-span-2 leftside'>
            
            <div className="p-6 m-4 rounded-lg shadow-lg profile border-[1px]">
                <div className="flex items-center gap-8">
                    <img src={assets.compro} alt="Company Profile" className="object-cover rounded-full h-30 w-30" />
                    <div className="w-full">
                        <form action="" className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-4">
                                <label className="flex flex-col font-medium text-gray-700">
                                    Company Name:
                                    <input type="text" placeholder="WSO2" className="input-field" readOnly/>
                                </label>
                                <label className="flex flex-col font-medium text-gray-700">
                                    Email:
                                    <input type="email" placeholder="wso2@info.com" className="input-field" readOnly/>
                                </label>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="flex flex-col font-medium text-gray-700">
                                    Industry Type:
                                    <input type="text" placeholder="IT Industry" className="input-field" readOnly/>
                                </label>
                                <label className="flex flex-col font-medium text-gray-700">
                                    Registration Number:
                                    <input type="text" placeholder="C22000216" className="input-field" readOnly/>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='pt-3 m-4 bg-white rounded-lg shadow-lg border-[1px]'>
                <div className='flex flex-col'>
                    <span className="px-4 text-xl font-semibold">Activity</span>
                    <span className='px-4 text-[#B5B5C3] font-semibold text-sm'>32 Requests</span>
                </div>
                <table className="w-full mt-4 bg-white rounded-lg shadow-lg">
                    {/* Table Header */}
                    <thead className="text-sm font-semibold text-gray-600 uppercase bg-gray-100">
                        <tr>
                        <th className="px-6 py-4 text-center">Authors</th>
                        <th className="px-6 py-4 text-center">Company</th>
                        <th className="px-6 py-4 text-center">Progress</th>
                        <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-sm text-gray-700">
                        {activities.map((activity, index) => (
                        <tr key={index} className="transition duration-200 border-b hover:bg-gray-50">
                            
                            {/* Author Info */}
                            <td className="flex items-center gap-4 px-6 py-4">
                            <img src={activity.avatar} alt="Avatar" className="object-cover w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold">{activity.author}</p>
                                <p className="text-xs text-gray-500">{activity.subtext}</p>
                            </div>
                            </td>
                            
                            {/* Company Status */}
                            <td className="px-6 py-4 font-semibold text-center">
                            <span className={`inline-block border-b-4 border-${activity.statusColor} pb-1`}>{activity.companyStatus}</span>
                            </td>
                            
                            {/* Progress */}
                            <td className="px-6 py-4 font-medium text-center text-gray-500">{activity.progress}</td>

                            {/* Action Button */}
                            <td className="px-6 py-4 text-center">
                            <button className="px-4 py-2 text-gray-700 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300">
                                View
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
            </div>

            <div className="flex flex-wrap items-center col-span-2 gap-4 p-4">
                {/* Complaint Cards */}
                <div className="flex flex-row gap-4 w-[80%]">
                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                        <span className="text-lg font-semibold text-gray-800">Complaints/Reporting</span>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            Complaint Regarding Sponsorship Payment Delay by WSO2 Rotaract Club, University of Colombo
                        </p>
                        <button className="mt-3 px-4 py-1 text-sm bg-[#177695] text-white font-semibold rounded-md shadow-sm hover:bg-[#145a76] transition duration-200">
                            View
                        </button>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                        <span className="text-lg font-semibold text-gray-800">Complaints/Reporting</span>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            Complaint Regarding Sponsorship Payment Delay by WSO2 Rotaract Club, University of Colombo
                        </p>
                        <button className="mt-3 px-4 py-1 text-sm bg-[#177695] text-white font-semibold rounded-md shadow-sm hover:bg-[#145a76] transition duration-200">
                            View
                        </button>
                    </div>
                </div>

                {/* View All Button */}
                <div className="flex items-center">
                    <button className="bg-[#177695] text-white px-6 py-2 text-md font-semibold rounded-full shadow-md hover:bg-[#145a76] transition duration-200">
                        View All
                    </button>
                </div>
            </div>


            
                
        </div>

        <div className='col-span-1 rightside'>
            
            <div className='flex flex-col items-center justify-center gap-4 p-8 m-4 bg-white rounded-lg shadow-lg border-[1px]'>
                <span className='text-lg font-semibold text-gray-800'>Create Monthly Report</span>
                <button className='bg-[#5F5CF1] py-2 px-4 rounded-lg text-white font-semibold shadow-md hover:bg-[#4d4ae8] transition duration-200'>
                    Start Now
                </button>
            </div>

            <div className='p-4 m-4 bg-white border-[1px] rounded-lg shadow-lg'>
                <div className='flex items-center justify-between'>
                    <span className='text-lg font-semibold text-gray-800'>Latest Transactions</span>
                    <button className='px-2 text-sm font-semibold text-white transition duration-200 rounded-lg bg-slate-400 hover:bg-slate-500'>More</button>
                </div>
                
                
                <div className='flex items-center justify-between gap-4 mt-4'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-base'>IEEE EXTRME(UOC)</span>
                        <span className='text-[#1E2434] text-xs'>19 July 2021</span>
                    </div>
                    <div>
                        <span className='text-[#34E4B5] text-sm font-semibold'>LKR 568.11</span>
                    </div>
                </div>

                <div className='flex items-center justify-between gap-4 mt-4'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-base'>New year blast (UOR)</span>
                        <span className='text-[#1E2434] text-xs'>19 July 2021</span>
                    </div>
                    <div>
                        <span className='text-[#34E4B5] text-sm font-semibold'>LKR 568.11</span>
                    </div>
                </div>

                <div className='flex items-center justify-between gap-4 mt-4'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-base'>Happy Birthday (UOJ)</span>
                        <span className='text-[#1E2434] text-xs'>19 July 2021</span>
                    </div>
                    <div>
                        <span className='text-[#34E4B5] text-sm font-semibold'>LKR 568.11</span>
                    </div>
                </div>
            </div>

            <div className="p-4 m-4 bg-white border rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Monthly Total Investment</h2>
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

            <div className="flex justify-center gap-4 m-8 align">
                <button className="px-6 py-2 font-semibold text-white transition duration-200 bg-green-500 rounded-lg shadow-md hover:bg-green-600">
                    Accept
                </button>
                <button className="px-6 py-2 font-semibold text-white transition duration-200 bg-red-500 rounded-lg shadow-md hover:bg-red-600">
                    Reject
                </button>
                <button className="px-6 py-2 font-semibold text-white transition duration-200 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600">
                    Block
                </button>
            </div>
            
        </div>
        
        
    
    </div>
  )
}

export default CompanyView
