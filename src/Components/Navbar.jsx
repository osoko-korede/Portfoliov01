import { NavLink } from 'react-router-dom'
import { useState } from "react"

import { AiOutlineClose } from "react-icons/ai"
import { BiMenuAltRight } from "react-icons/bi"
import { MdOutlineDragHandle } from "react-icons/md";

import { div } from 'framer-motion/client'

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }


  return (
    <div className='sticky z-30 top-0'>
      <div className='max-w-[90%]  m-auto flex items-center justify-between z-30 py-5 '>
      <NavLink to="/">
        <h1 className='green'>Osoko Korede</h1>
      </NavLink>

      <div className=''>

        <div className=" flex flex-col justify-end z-50">
            <button className="text-3xl text-white bg-black p-4 rounded-full z-50" onClick={toggleNavbar}>
                {mobileDrawerOpen ? <AiOutlineClose /> : < MdOutlineDragHandle/>}
            </button>
        </div>
      </div>
      </div>
      
      {mobileDrawerOpen && (
        <div className='fixed top-0 z-10 w-full h-full backdrop-blur-sm items-center justify-end flex'>
          <div className=" bg-black h-full w-full md:w-[50%] flex flex-col justify-center items-start text-white">
              <ul className="text-3xl m-auto md:text-5xl flex  flex-col justify-center items-center md:items-start gap-8">
                  <li>
                      <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-white cursor-pointer transition-all py-4" : "" } onClick={() => setMobileDrawerOpen(false)}>
                      Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-white cursor-pointer transition-all py-4" : "" } onClick={() => setMobileDrawerOpen(false)}>
                      About
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/contact"pricing className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-white cursor-pointer transition-all py-4" : "" } onClick={() => setMobileDrawerOpen(false)}>
                      Contact
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-white cursor-pointer transition-all py-4" : "" } onClick={() => setMobileDrawerOpen(false)}>
                      Projects
                      </NavLink>
                  </li>
              </ul>
          </div>
        </div>     
      )}

    </div>

  )
}

export default Navbar