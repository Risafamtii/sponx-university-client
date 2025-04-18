import React from 'react';

const Report = () => {
  return (
    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg p-6 h-[90vh] overflow-y-auto'>
      <h2 className='mb-4 text-2xl font-semibold'>Report</h2>
      
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label className='block font-medium'>Event ID</label>
          <input type='text' className='w-full p-2 border rounded' />
        </div>
        <div>
          <label className='block font-medium'>Event Name</label>
          <input type='text' className='w-full p-2 border rounded' />
        </div>
        <div>
          <label className='block font-medium'>University Name</label>
          <input type='text' className='w-full p-2 border rounded' defaultValue='University Of Colombo' />
        </div>
        <div>
          <label className='block font-medium'>University Name</label>
          <input type='text' className='w-full p-2 border rounded' defaultValue='University Of Colombo' />
        </div>
        <div>
          <label className='block font-medium'>Company Sponsored</label>
          <input type='text' className='w-full p-2 border rounded' />
        </div>
      </div>
      
      <div className='mt-6'>
        <p> <span className='font-bold'>Total Sponsorship Amount: </span> $[Total Sponsorship Amount]</p>
        <p> <span className='font-bold'>Platform Fee (10%): </span> $[Amount of 10%]</p>
        <p> <span className='font-bold'>Amount Paid to University Club: </span>  $[Amount Paid to University Club]</p>
        <p> <span className='font-bold'>Total Payment Received: </span>$[Total Amount Paid by Company]</p>
      </div>
      
      <p className='mt-4 text-sm'>
        This report is prepared to summarize the sponsorship funding and event outcomes for [Event Name], 
        organized by [University Club Name]. The information provided in this report is accurate and has been 
        verified by the platform. For any further inquiries or clarifications, please feel free to contact the platform admin.
      </p>
      
      <div className='flex justify-between mt-6'>
        <p>.........date..........</p>
        <p>.........signature..........</p>
      </div>
      
      <button className='px-8 py-2 mt-6 text-white rounded-full bg-[#3A466F] hover:bg-[#2a3353]'>Issue</button>
    </div>
  );
};

export default Report;