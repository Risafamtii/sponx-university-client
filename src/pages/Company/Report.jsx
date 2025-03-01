import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ArrowUpRight } from 'lucide-react';  // optional icon if you want

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Report = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Sales',
        data: [90, 85, 92, 88, 84, 91, 87, 89],
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: 'rgb(99, 102, 241)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="mt-[5%] bg-[#F9F9F9] p-6 bg-gray-100 min-h-screen w-[83%] ml-[17%]">
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-xl flex items-center gap-12">
            <div className="relative w-20 h-20">
            <CircularProgressbar
                value="70"
                text=""
                strokeWidth={8}
                styles={buildStyles({
                pathColor: '#6366F1',     
                trailColor: '#E5E7EB',    
                strokeLinecap: 'round',
                })}
            />
            {/* Centered arrow inside the chart */}
            <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUpRight className="text-gray-400 w-5 h-5" />
            </div>
            </div>
            <div>
          <p className="text-gray-500">Total Bids</p>
          <p className="text-2xl font-semibold">200</p>
          </div>
        </div>
        
        <div className="p-6 bg-white shadow rounded-xl flex items-center gap-12">
            <div className="relative w-20 h-20">
            <CircularProgressbar
                value="70"
                text=""
                strokeWidth={8}
                styles={buildStyles({
                pathColor: '#6366F1',     
                trailColor: '#E5E7EB',    
                strokeLinecap: 'round',
                })}
            />
            {/* Centered arrow inside the chart */}
            <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUpRight className="text-gray-400 w-5 h-5" />
            </div>
            </div>
            <div>
          <p className="text-gray-500">Total Sponsorships</p>
          <p className="text-2xl font-semibold">1500</p>
          </div>
        </div>

        <div className="p-6 bg-white shadow rounded-xl flex items-center gap-12">
            <div className="relative w-20 h-20">
            <CircularProgressbar
                value="70"
                text=""
                strokeWidth={8}
                styles={buildStyles({
                pathColor: '#08B1BA',     
                trailColor: '#E5E7EB',    
                strokeLinecap: 'round',
                })}
            />
            {/* Centered arrow inside the chart */}
            <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUpRight className="text-gray-400 w-5 h-5" />
            </div>
            </div>
            <div>
          <p className="text-gray-500">Total Cost</p>
          <p className="text-2xl font-semibold">LKR 100,000</p>
          </div>
        </div>
      </div>

      {/* Quota Cards */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <p className="text-gray-500">Monthly Quota</p>
          <div className="flex justify-center gap-4 mt-2">
            <div>
              <p className="text-xl font-bold">36%</p>
              <p className="text-gray-500">Spent</p>
            </div>
            <div>
              <p className="text-xl font-bold">17%</p>
              <p className="text-gray-500">Balance</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <p className="text-gray-500">Yearly Quota</p>
          <div className="flex justify-center gap-4 mt-2">
            <div>
              <p className="text-xl font-bold">36%</p>
              <p className="text-gray-500">Spent</p>
            </div>
            <div>
              <p className="text-xl font-bold">17%</p>
              <p className="text-gray-500">Balance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-6 p-6 bg-white shadow rounded-xl">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Sales</p>
          <select className="border rounded px-3 py-1">
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Report;
