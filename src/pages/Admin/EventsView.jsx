import React from 'react';
import event4 from '../../assets/img/event4.png';
import WSO2 from '../../assets/img/WSO2.png';

export default function EventsView() {
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
      left: '2000'
    }
  ];

  return (
    <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg h-[90vh] overflow-y-auto relative flex flex-col justify-start items-start">
      <div className='w-full p-6 bg-white shadow-lg rounded-xl'>
        <div className='flex justify-center w-full mb-8'>
          <img 
            src={event4} 
            alt='Event' 
            className='rounded-lg  w-[2000px]  h-auto  border border-gray-300' 
          />
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div>
            <p className='text-lg font-semibold text-gray-800'>Type:</p>
            <p className='w-full p-2 text-[#718EBF] border-color-[#DFEAF2] rounded-md border-2'>{event[0].eventType}</p>

            <p className='mt-4 text-lg font-semibold text-gray-800'>Date:</p>
            <p className='w-full p-2 text-[#718EBF] border-color-[#DFEAF2] rounded-md border-2'>{event[0].dueDate}</p>

            <p className='mt-4 text-lg font-semibold text-gray-800'>Location:</p>
            <p className='w-full p-2 text-[#718EBF] border-color-[#DFEAF2] rounded-md border-2'>{event[0].venue}</p>
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-800'>Organizing Club:</p>
            <p className='w-full p-2 text-[#718EBF] border-color-[#DFEAF2] rounded-md border-2'>{event[0].club}</p>

            <p className='mt-4 text-lg font-semibold text-gray-800'>Time:</p>
            <p className='w-full p-2 text-[#718EBF] border-color-[#DFEAF2] rounded-md border-2'>{event[0].time}</p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-10 mt-6'>
          <div className='flex flex-col items-center'>
            <p className='mb-4 text-lg font-semibold text-center text-gray-800'>Requested Companies:</p>
            <div className='flex gap-6'>
              <img 
                src={event[0].companyImage} 
                alt='Company Logo' 
                className='object-contain w-24 h-24' 
              />
              <img 
                src={event[0].companyImage} 
                alt='Company Logo' 
                className='object-contain w-24 h-24' 
              />
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <p className='mb-4 text-lg font-semibold text-center text-gray-800'>Sponsored Companies:</p>
            <div className='flex gap-6'>
              <img 
                src={event[0].companyImage} 
                alt='Company Logo' 
                className='object-contain w-24 h-24' 
              />
              <img 
                src={event[0].companyImage} 
                alt='Company Logo' 
                className='object-contain w-24 h-24' 
              />
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
  );
}
