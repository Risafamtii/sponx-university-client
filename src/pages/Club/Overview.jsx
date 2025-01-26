import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { assets } from '../../assets/assets';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ProgressBar Component
const ProgressBar = ({ progress }) => (
  <div className="w-full h-2 bg-gray-300 rounded-full">
    <div
      className="h-2 bg-[#3A466F] rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const Overview = () => {
  const requiredAmount = 40000;
  const amountRaised = 9000;
  const progressPercentage = (amountRaised / requiredAmount) * 100;

  // Data for the chart
  const chartData = {
    labels: ['WSO2', 'Sysco Labs', '99X Technology', 'Virtusa', 'IFS'],
    datasets: [
      {
        label: 'Sponsorship Progress (LKR)',
        data: [40000, 20000, 30000, 25000, 35000],
        backgroundColor: ['#3A466F', '#1B264B', '#3A466F', '#1B264B', '#3A466F'], // Updated colors
        borderColor: ['#3A466F', '#1B264B', '#3A466F', '#1B264B', '#3A466F'],    // Updated colors
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 12 },
          color: '#3A466F',
        },
      },
      title: {
        display: true,
        text: 'Sponsorship Progress',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#3A466F',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#3A466F',
        },
        grid: {
          color: '#e5e7eb',
        },
      },
      x: {
        barPercentage: 0.4,
        ticks: {
          color: '#3A466F',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="min-h-full font-sans bg-slate-100">
      <div className="container px-6 py-8 mx-auto">

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Logged in as <span className="font-semibold text-[#1B264B]">Rotaract Club Of UCSC</span>  {/* Updated color */}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">

          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h1 className="text-xl font-extrabold text-[#3A466F]">Upcoming Event</h1>
              <div className="flex flex-col mt-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">

                <img src={assets.hoop} alt="event" className="w-full rounded-lg shadow-lg md:w-1/3" />
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-bold text-[#3A466F]">Hoop Hustle 3X3</p>
                    <p className="mt-2 text-gray-600">
                      Event Date: <span className="font-semibold text-[#1B264B]">2024-09-30</span> {/* Updated color */}
                    </p>
                    <p className="mt-4 text-gray-700">
                      Hoop Hustle 3X3 is a basketball event aimed at promoting{' '}
                      <span className="font-semibold text-[#3A466F]">teamwork</span> and{' '}
                      <span className="font-semibold text-[#3A466F]">community engagement</span>. Join us for an
                      exciting day of sports and networking!
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-700">
                      Required Amount:{' '}
                      <span className="font-semibold text-[#1B264B]">{requiredAmount.toLocaleString()}</span> LKR
                    </p>
                    <p className="text-sm text-gray-700">
                      Amount Raised: <span className="font-semibold text-[#1B264B]">{amountRaised.toLocaleString()}</span> LKR
                    </p>

                    <div className='mt-4'>
                      <ProgressBar progress={progressPercentage} />
                    </div>
                  </div>
                  <div className="flex mt-6 space-x-4">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-red-900 rounded-lg shadow hover:bg-red-800">
                      Stop Bidding
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-[#3A466F] rounded-lg shadow hover:bg-[#4a598b]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h1 className="text-xl font-extrabold text-[#3A466F] mb-4">Sponsorship Progress</h1>
              <p className="mb-4 text-sm text-gray-500">
                This chart represents the current sponsorship contributions from various companies.
              </p>
              <div className="relative w-full h-[300px]">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
