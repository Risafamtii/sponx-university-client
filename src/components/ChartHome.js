import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "WSO2", sponsorship: 400 },
  { name: "WinSys", sponsorship: 300 },
  { name: "Sysco", sponsorship: 200 },
  { name: "Creative Software", sponsorship: 600 },
];

const Graph = () => {
  return (
    <div className="flex gap-20">
        <div className="shadow-md rounded-lg p-6 w-full md:w-1/2 border border-grey-500">
        <h2 className="text-lg font-semibold mb-4 text-blue-900">Sponsorship</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }} barSize={40} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sponsorship" fill="#17135B" />
            </BarChart>
        </ResponsiveContainer>
        </div>

        <div className="shadow-md rounded-lg p-6 w-full md:w-1/3 border border-grey-500">
            <h2 className="text-lg font-semibold mb-4">Sponsorship Summary</h2>
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Required Amount:</span>
                <span className="text-gray-800 font-semibold">$2000</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount:</span>
                <span className="text-gray-800 font-semibold">$1800</span>
            </div>
        </div>
    </div>
  );
};

export default Graph;
