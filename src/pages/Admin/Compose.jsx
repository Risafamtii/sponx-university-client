import React, { useState } from 'react';

const Compose = () => {
  const [selectedAudience, setSelectedAudience] = useState('allClubs');
  const [scheduleLater, setScheduleLater] = useState(false);

  return (
    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg p-8 h-[90vh] overflow-y-auto'>
      <h2 className='mb-6 text-3xl font-bold text-gray-800'>Compose Notification</h2>
      <form className='space-y-6'>
        <div>
          <label htmlFor='title' className='block text-lg font-medium text-gray-700'>Notification Title</label>
          <input 
            type='text' 
            id='title' 
            placeholder='Enter title...' 
            className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6379c2] focus:outline-none'
          />
        </div>

        <div>
          <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Notification Message</label>
          <textarea 
            id='message' 
            placeholder='Enter your message...' 
            className='w-full h-32 p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6379c2] focus:outline-none'
          ></textarea>
        </div>

        <div className='p-5 border border-gray-300 rounded-lg'>
          <p className='mb-3 text-lg font-semibold text-gray-800'>Target Audience</p>
          <div className='space-y-3'>
            <label className='flex items-center space-x-3'>
              <input type='radio' name='audience' value='allClubs' checked={selectedAudience === 'allClubs'} onChange={() => setSelectedAudience('allClubs')} className='text-[#6379c2] form-radio' />
              <span>All Clubs</span>
            </label>
            <label className='flex items-center space-x-3'>
              <input type='radio' name='audience' value='specificClub' checked={selectedAudience === 'specificClub'} onChange={() => setSelectedAudience('specificClub')} className='text-[#6379c2] form-radio' />
              <span>Specific Club</span>
            </label>
            <label className='flex items-center space-x-3'>
              <input type='radio' name='audience' value='allCompanies' checked={selectedAudience === 'allCompanies'} onChange={() => setSelectedAudience('allCompanies')} className='text-[#6379c2] form-radio' />
              <span>All Companies</span>
            </label>
            <label className='flex items-center space-x-3'>
              <input type='radio' name='audience' value='specificCompany' checked={selectedAudience === 'specificCompany'} onChange={() => setSelectedAudience('specificCompany')} className='text-[#6379c2] form-radio' />
              <span>Specific Company</span>
            </label>
            {selectedAudience === 'specificCompany' && (
              <input 
                type='text' 
                placeholder='Search by name or ID' 
                className='w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6379c2] focus:outline-none'
              />
            )}
          </div>
        </div>

        

        <div className='flex justify-center'>
          <button type='submit' className='w-1/4 py-3 text-lg font-semibold text-white bg-[#1B264B] rounded-lg hover:bg-[#101935] focus:ring-2 focus:ring-blue-400 focus:outline-none'>
            Send Notification
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compose;