import React from 'react'
import ata from "../assets/Africa-Trade-Access.png"
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'


const AfricaTradeAccess = () => {
  return (
    <div className='max-w-[1240px] m-auto my-60'>
        <div className= 'w-full mt-9 flex flex-col lg:flex-row px-10 gap-10 items-center'>
            <img className='w-full lg:w-1/2 rounded-md' src={ata} alt="AFrica Trade Access" />
            <div className='flex gap-8 flex-col'>
              <div>
                <h2 className='text-2xl font-semibold'>Africa Trade Access</h2>
                <p className='text-gray-400 font-light mt-1'>Developed for Africa Trade Access, an organization facilitating African trade and investment, this WordPress and Elementor site reflects strong organizational branding and adaptability to meet business needs.</p>
              </div>
              <div>
                <h2 className='text-xl font-semibold'>Tech Stack</h2>
                <div className="flex mt-4 gap-4">
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Wordpress</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Elementor</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>SEO</p>
                </div>
              </div>
              <div className='flex'>
                <button className='rounded-sm green font-semibold text-white hover:underline'> <a href="https://africatradeaccess.com/" rel='noopener' target='_blank' className='flex items-baseline gap-2'>Visit Live Site <FaArrowUpRightFromSquare className='pt-1'/></a></button>
              </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default AfricaTradeAccess
