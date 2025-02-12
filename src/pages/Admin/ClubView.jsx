import React from 'react'
import { assets } from '../../assets/assets'

const ClubView = () => {
  return (
    <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg h-[90vh] overflow-y-auto relative flex flex-col justify-start items-start">

        <div className='w-full h-[20%] bg-[#1B264B] rounded-t-xl flex items-center justify-center'>
            <div className="relative w-full overflow-hidden">
                <img src={assets.clubCover} alt="Club Cover" className="object-cover w-full h-full" />
            </div>

            <div className="absolute left-[2%] top-[8%] z-10 w-[120px] h-[120px]">
                <img src={assets.profilepic} alt="Profile" className="w-full h-full border-4 border-white rounded-full shadow-lg" />
            </div>
        </div>

        <div className='w-full mt-[5%] pl-[2%]'>
            <div className='flex flex-col'>
                <span className='text-[#303972] font-bold text-2xl pb-2'>Gavel Club</span>
                <span className='text-[#A098AE] font-semibold'>University of Colombo</span>
                <span className='text-[#A098AE] font-semibold'>Faculty of Science</span>
            </div>
        </div>

        <div>
            <div>
            </div>
        </div>

        

        
    </div>

  )
}

export default ClubView
