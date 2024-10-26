import React from 'react'
import fitness from "../assets/Fitness.png"
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'


const Fitness = () => {
  return (
    <div className='max-w-[1240px] m-auto my-60'>
        <div className= 'w-full mt-9 flex flex-col lg:flex-row px-10 gap-10 items-center'>
            <img className='w-full lg:w-1/2 rounded-md' src={fitness} alt="Fitness Website" />
            <div className='flex gap-8 flex-col'>
              <div>
                <h2 className='text-2xl font-semibold'>Next.js Website</h2>
                <p className='text-gray-400 font-light mt-1'>Built with Next.js and inspired by a UI8 page, this site emphasizes beautiful, functional design. It integrates Tailwind CSS for responsive styling and includes a custom favicon, Open Graph metadata, and accessible features, highlighting my ability to create visually appealing and user-friendly websites in Next.js.</p>
              </div>
              <div>
                <h2 className='text-xl font-semibold'>Tech Stack</h2>
                <div className="flex mt-4 gap-4">
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Next.js</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>React</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Tailwind CSS</p>
                </div>
              </div>
              <div className='flex'>
                <button className='rounded-sm green font-semibold text-white hover:underline'> <a href="https://fitness-lyart-three.vercel.app/" rel='noopener' target='_blank' className='flex items-baseline gap-2'>Visit Live Site <FaArrowUpRightFromSquare className='pt-1'/></a></button>
              </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Fitness