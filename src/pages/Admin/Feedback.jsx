import React, { useState } from 'react';

const Feedback = () => {
  const [activeTab, setActiveTab] = useState('Club');

  return (
    <div className='bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg p-6 h-[90vh] overflow-y-auto'>
      {/* Tabs */}
      <div className='flex pb-2 mb-4 border-b'>
        <button 
          className={`flex-1 text-lg font-semibold pb-2 ${activeTab === 'Club' ? 'border-b-2 border-gray-800' : 'text-gray-600'}`} 
          onClick={() => setActiveTab('Club')}
        >
          Club
        </button>
        <button 
          className={`flex-1 text-lg font-semibold pb-2 ${activeTab === 'Company' ? 'border-b-2 border-gray-800' : 'text-gray-600'}`} 
          onClick={() => setActiveTab('Company')}
        >
          Company User
        </button>
      </div>
      
      {/* Content */}
      <div className='p-4 bg-gray-100 rounded-lg'>
        <p className='font-semibold'>
          <span className='font-bold'>Subject:</span> Excellent Collaboration for HomeComing Alumni
        </p>
        <p className='mt-2 font-semibold'>
          <span className='font-bold'>Rating:</span> ★★★★★
        </p>
        <p className='mt-2 font-semibold'>
          <span className='font-bold'>Feedback:</span>
        </p>
        <p className='mt-1 text-gray-700'>
          {activeTab === 'Club' ? (
            "We were truly impressed with the professionalism and organization of the university's club team. The event xxxxxx was a great success, and we are glad to have been part of it. The club was highly proactive and responsive throughout the process, ensuring everything ran smoothly. We look forward to future collaborations!"
          ) : (
            "The company was thrilled to sponsor this event. The collaboration was seamless, and the exposure was well worth it. The club team ensured everything ran smoothly, making it an enjoyable experience for everyone involved. We would love to partner again for future events!"
          )}
        </p>
      </div>
    </div>
  );
};

export default Feedback;
