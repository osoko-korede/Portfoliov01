import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center h-24 max-w-[1240px] m-auto'>
        <ul className='flex text-[#025A4E]'>
            <li className='p-4 md:mx-4'> <Link to="/">Home</Link></li>
            <li className='p-4 md:mx-4'> <Link to="/about">About</Link></li>
            <li className='p-4 md:mx-4'> <Link to="/contact">Contact</Link></li>
            <li className='p-4 md:mx-4'> <Link to="/projects">Projects</Link></li>
        </ul>
    </div>
  )
}

export default Navbar