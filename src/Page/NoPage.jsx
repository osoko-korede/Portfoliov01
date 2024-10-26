import React from 'react'
import { NavLink } from 'react-router-dom'


const NoPage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-[80%] my-32 lg:my-52 p-10'>
      <h1 className='p-5 pb-4 text-7xl md:text-9xl text-center font-semibold tracking-tight green inline-block text-transparent bg-clip-text'>Error 404</h1>
      <p className='text-center'>This page does not exist. Go back to <NavLink to="/" className="underline">Home</NavLink>.</p>
    </div>
  )
}

export default NoPage