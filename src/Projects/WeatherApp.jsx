import React from 'react'
import weather from "../assets/Weather-App.png"
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'


const WeatherApp = () => {
  return (
    <div className='max-w-[1240px] m-auto my-60'>
        <div className= 'w-full mt-9 flex flex-col lg:flex-row px-10 gap-10 items-center'>
            <img className='w-full lg:w-1/2 rounded-md' src={weather} alt="Weather App Website" />
            <div className='flex gap-8 flex-col'>
              <div>
                <h2 className='text-2xl font-semibold'>Weater App</h2>
                <p className='text-gray-400 font-light mt-1'>A weather application built in React, utilizing the OpenWeather API to showcase API integration skills. This responsive app, styled with Tailwind CSS, displays real-time weather data.</p>
              </div>
              <div>
                <h2 className='text-xl font-semibold'>Tech Stack</h2>
                <div className="flex mt-4 gap-4">
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>React</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Vite</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>API</p>
                    <p className='green bg-[#E4EAA2] rounded-full px-3 py-1'>Tailwind CSS</p>
                </div>
              </div>
              <div className='flex'>
                <button className='rounded-sm green font-semibold text-white hover:underline'> <a href="https://weather-app-rosy-xi.vercel.app/" rel='noopener' target='_blank' className='flex items-baseline gap-2'>Visit Live Site <FaArrowUpRightFromSquare className='pt-1'/></a></button>
              </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default WeatherApp