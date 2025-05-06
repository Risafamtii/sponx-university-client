import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { assets } from '../../assets/assets'
import { getCompanyById , blockCompany , unblockCompany } from '../../utils/api/admin';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CompanyView = () => {

    const [company, setCompany] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const res = await getCompanyById(id);
                setCompany(res.data.company);
            } catch (error) {
                console.error("Failed to fetch company:", error);
            }
        };
    
        fetchCompany();
    }, [id]);

    //console.log(company);

    const handleBack = () => {
        window.history.back();
    }

    const handleBlock = async (id) => {
        try {
            const updatedCompany = await blockCompany(id);

            setCompany(prev => ({
                ...prev,
                user: {
                    ...prev.user,
                    isBlock: true,
                },
            }));
    
            console.log("Company successfully blocked:", updatedCompany);
            
            toast.success("Company blocked successfully!");
        } catch (error) {
            
            console.error("Error blocking company with ID", id, ":", error.message);
    
            toast.error("Error blocking company");
        }
    };

    const handleUnblock = async(id) => {
        try {
            const updatedCompany = await unblockCompany(id);

            setCompany(prev => ({
                ...prev,
                user: {
                    ...prev.user,
                    isBlock: false,
                },
            }));

            console.log("Company successfully unblocked:", updatedCompany);

            toast.success("Company unblocked successfully!");
            

        } catch (error) {
            
            console.log("Error unblocking company with ID", id, ":", error.message);
            
            toast.error("Error unblocking company");
        }
    }
    

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
                    <img   src={company?.user?.profilePic || assets.compro} alt="Company Profile" className="object-cover rounded-full h-30 w-30" />
                    <div className="w-full">
                        <form action="" className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-4">
                                <label className="flex flex-col font-medium text-gray-700">
                            
                                    Company Name:
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={company?.name || "Loading...."}
                                        readOnly
                                    />
                                </label>
                                <label className="flex flex-col font-medium text-gray-700">
                                    Email:
                                    <input 
                                        type="email" 
                                        className="input-field" 
                                        value={company?.user?.email || "Loading...."}
                                        readOnly
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="flex flex-col font-medium text-gray-700">
                                    Industry Type:
                                    <input 
                                        type="text" 
                                        className="input-field" 
                                        value={company?.industry || "Loading...."}
                                        readOnly
                                    />
                                </label>
                                <label className="flex flex-col font-medium text-gray-700">
                                    Registration Number:
                                    <input 
                                        type="text" 
                                        className="input-field" 
                                        value={company?.user?.id || "Loading...."}
                                        readOnly
                                    />
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
            
            {/* <div className='flex flex-col items-center justify-center gap-4 p-8 m-4 bg-white rounded-lg shadow-lg border-[1px]'>
                <span className='text-lg font-semibold text-gray-800'>Create Monthly Report</span>
                <button className='bg-[#5F5CF1] py-2 px-4 rounded-lg text-white font-semibold shadow-md hover:bg-[#4d4ae8] transition duration-200'>
                    Start Now
                </button>
            </div> */}

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


            <div className="flex flex-col items-center justify-center gap-4 p-8 m-4 bg-white rounded-lg shadow-lg border-[1px]">
                
                <button 
                    onClick={handleBack}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 w-full text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Companies
                </button>

                {company?.user?.status === 'PENDING' && !company?.user?.isBlock ? (
                    
                    <div className="flex flex-col w-full gap-3">
                        <button
                            //onClick={handleAccept}
                            className="flex items-center justify-center gap-2 px-6 py-2.5 w-full text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Approve Company
                        </button>
                        
                        <button
                            //onClick={handleReject}
                            className="flex items-center justify-center gap-2 px-6 py-2.5 w-full text-sm font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Reject Application
                        </button>
                    </div>
                    
                ) : company?.user?.status === 'ACTIVE' && !company?.user?.isBlock ? (
                    <div className="w-full">
                        
                        <button
                            onClick={() => handleBlock(company?.id)}
                            className="flex items-center justify-center gap-2 px-6 py-2.5 w-full text-sm font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                            </svg>
                            Block Company
                        </button>
                        
                        {/* <button
                            //onClick={handleEdit}
                            className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Edit
                        </button> */}
                        
                    </div>
                    
                ) : company?.user?.isBlock ? (
                    
                    <button
                    onClick= {() => handleUnblock(company?.id)}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 w-full text-sm font-medium text-white bg-gray-600 rounded-lg shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                        Unblock Company
                    </button>
                    
                ) : null}
            </div>
            
        </div>
        
        
    
    </div>
  )
}

export default CompanyView
