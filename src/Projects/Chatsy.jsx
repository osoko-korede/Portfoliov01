import React from 'react'
import chatsy from "../assets/Chatsy.png"
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'


const Chatsy = () => {
  return (
    <div className='max-w-[1240px] m-auto my-60'>
        <div className= 'w-full mt-9 flex flex-col lg:flex-row px-10 gap-10 items-center'>
            <img className='w-full lg:w-1/2 rounded-md' src={chatsy} alt="Chatsy website" />
            <div className='flex gap-8 flex-col'>
              <div>
                <h2 className='text-2xl font-semibold'>Chat App</h2>
                <p className='text-gray-400 font-light mt-1'>A community chat platform built in React and powered by Firebase for real-time messaging and Google authentication. Material UI enhances its responsive, modern design, supporting user login and chat functionality.</p>
              </div>
              <div>
                <h2 className='text-xl font-semibold'>Tech Stack</h2>
                <div className="flex mt-4 gap-4 flex-wrap">
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>React</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Firebase DB</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Firebase Auth</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Firebase Hosting</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Material UI</p>
                </div>
              </div>
              <div className='flex'>
                <button className='rounded-sm green font-semibold text-white hover:underline'> <a href="https://chatsy-c76a0.web.app/" rel='noopener' target='_blank' className='flex items-baseline gap-2'>Visit Live Site <FaArrowUpRightFromSquare className='pt-1'/></a></button>
              </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Chatsy