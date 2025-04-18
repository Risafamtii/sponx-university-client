import React, { useState } from 'react';
import event4 from '../../assets/img/event4.png';
import WSO2 from '../../assets/img/WSO2.png';

const EventsView = () => {
  const [isType, setIsType] = useState('Approved');

  const event = [
    {
      id: 1,
      eventType: 'Fun and Activity',
      club: 'Gavel UOC',
      dueDate: '2025/01/10',
      time: '8:00 A.M',
      venue: 'UOC Grounds',
      companyImage: WSO2,
      estimatedBudget: '22000',
      left: '2000',
      type: 'Completed'
    }
  ];

  return (
    <>
      {event[0].type === 'Approved' && (
        <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg h-[90vh] overflow-y-auto relative flex flex-col justify-start items-start">
          <div className='w-full p-6 bg-white shadow-lg rounded-xl'>
            <div className='flex justify-center w-full mb-8'>
              <img 
                src={event4} 
                alt='Event' 
                className='rounded-lg w-[2000px] h-auto border border-gray-300' 
              />
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <p className='text-lg font-semibold text-gray-800'>Type:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].eventType}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Date:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].dueDate}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Location:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].venue}</p>
              </div>
              <div>
                <p className='text-lg font-semibold text-gray-800'>Organizing Club:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].club}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Time:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].time}</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-10 mt-6'>
              <div className='flex flex-col items-center'>
                <p className='mb-4 text-lg font-semibold text-center text-gray-800'>Requested Companies:</p>
                <div className='flex gap-6'>
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                </div>
              </div>

              <div className='flex flex-col items-center'>
                <p className='mb-4 text-lg font-semibold text-center text-gray-800'>Sponsored Companies:</p>
                <div className='flex gap-6'>
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                </div>
              </div>
            </div>

            <p className='flex justify-center mt-10 text-lg font-semibold text-gray-800'>Estimated Budget</p>

            <div className='flex justify-center mt-6'>
              <div className='w-[70%] h-[35px] rounded-2xl overflow-hidden shadow-md bg-gray-400 flex'>
                <div className='bg-green-400 w-[75%] flex justify-center items-center rounded-2xl'>
                  <span className='font-bold text-white'>Rs {event[0].estimatedBudget}</span>
                </div>
                <div className='bg-gray-400 w-[25%] flex justify-center items-center '>
                  <span className='font-bold text-white'>Rs {event[0].left}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {event[0].type === 'Pending' && (
        <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg h-[90vh] overflow-y-auto relative flex flex-col justify-start items-start">
          <div className='w-full p-6 bg-white shadow-lg rounded-xl'>
            <div className='flex justify-center w-full mb-8'>
              <img 
                src={event4} 
                alt='Event' 
                className='rounded-lg w-[2000px] h-auto border border-gray-300 opacity-70' 
              />
            </div>

            <div className="absolute flex gap-4 transform -translate-x-1/2 top-1/4 left-1/2">
              <button className='p-3 bg-[#2C2765] text-white font-bold rounded-full hover:bg-[#1c1565] transition duration-300 w-32'>
                Approve Now
              </button>
              <button className='p-3 bg-[#EF4949] text-white font-bold rounded-full hover:bg-[#f02c2c] transition duration-300 w-32'>
                Decline
              </button>
            </div>


            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <p className='text-lg font-semibold text-gray-800'>Type:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].eventType}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Date:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].dueDate}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Location:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].venue}</p>
              </div>
              <div>
                <p className='text-lg font-semibold text-gray-800'>Organizing Club:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].club}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Time:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].time}</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-10 mt-6'>
              <div className='flex flex-col items-center'>
                <p className='mb-4 text-lg font-semibold text-center text-gray-800'>Requested Companies:</p>
                <div className='flex gap-6'>
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                </div>
              </div>

              

            </div>

            <p className='flex justify-center mt-10 text-lg font-semibold text-gray-800'>Estimated Budget</p>

            <div className='flex justify-center mt-6'>
              <div className='w-[70%] h-[35px] rounded-2xl overflow-hidden shadow-md bg-gray-400 flex'>
                <div className='bg-gray-400 w-[100%] flex justify-center items-center rounded-2xl'>
                  <span className='font-bold text-white'>Rs {event[0].estimatedBudget}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {event[0].type === 'Completed' && (
        <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg h-[90vh] overflow-y-auto relative flex flex-col justify-start items-start">
          <div className='w-full p-6 bg-white shadow-lg rounded-xl'>
            <div className='flex justify-center w-full mb-8'>
              <img 
                src={event4} 
                alt='Event' 
                className='rounded-lg w-[2000px] h-auto border border-gray-300 opacity-30' 
              />
            </div>

            <div className="absolute flex gap-4 transform -translate-x-1/2 top-1/4 left-1/2">
              <button className='p-3 bg-[#192440] text-white font-bold rounded-full hover:bg-[#131822] transition duration-300 px-5'>
                Generate Report
              </button>
              <button className='p-3 bg-[#192440] text-white font-bold rounded-full hover:bg-[#131822] transition duration-300 px-5'>
                Feedback
              </button>
            </div>


            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <p className='text-lg font-semibold text-gray-800'>Type:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].eventType}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Date:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].dueDate}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Location:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].venue}</p>
              </div>
              <div>
                <p className='text-lg font-semibold text-gray-800'>Organizing Club:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].club}</p>

                <p className='mt-4 text-lg font-semibold text-gray-800'>Time:</p>
                <p className='w-full p-2 text-[#718EBF] border border-[#DFEAF2] rounded-md'>{event[0].time}</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-10 mt-6'>
              <div className='flex flex-col items-center'>
                <p className='mb-4 text-lg font-semibold text-center text-gray-800'>Requested Companies:</p>
                <div className='flex gap-6'>
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                </div>
              </div>

              <div className='flex flex-col items-center'>
                <p className='mb-4 text-lg font-semibold text-center text-gray-800'>Sponsored Companies:</p>
                <div className='flex gap-6'>
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                  <img src={event[0].companyImage} alt='Company Logo' className='object-contain w-24 h-24' />
                </div>
              </div>
            </div>

            <p className='flex justify-center mt-10 text-lg font-semibold text-gray-800'>Estimated Budget</p>

            <div className='flex justify-center mt-6'>
              <div className='w-[70%] h-[35px] rounded-2xl overflow-hidden shadow-md bg-gray-400 flex'>
                <div className='bg-green-400 w-[100%] flex justify-center items-center rounded-2xl'>
                  <span className='font-bold text-white'>Completed</span>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      )}

      

      
    </>


  );
};

export default EventsView;
