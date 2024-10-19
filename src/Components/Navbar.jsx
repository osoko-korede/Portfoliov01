import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center mx-auto max-w-[1440px] px-6 lg:px-20 relative z-30 py-5'>
      <div className='bg-gray-50 border  px-5 rounded-full'>
        <ul className='flex text-gray-700'>
            <li>
              <div className='p-4 md:mx-4 hover:scale-110 '>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "regular-16 text-gray-700 cursor-pointer p-2 transition-all font-medium  bg-gray-200 rounded-full px-4" : "" }>
                Home
                </NavLink>
              </div>
            </li>
            <li>
              <div className='p-4 md:mx-4 hover:scale-110 '>
                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "regular-16 text-gray-700 cursor-pointer p-2 transition-all font-medium  bg-gray-200 rounded-full px-4" : "" }>
                About
                </NavLink>
              </div>
            </li>
            <li>
              <div className='p-4 md:mx-4 hover:scale-110 '>
                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "regular-16 text-gray-700 cursor-pointer p-2 transition-all font-medium  bg-gray-200 rounded-full px-4" : "" }>
                Contact
                </NavLink>
              </div>
            </li>
            <li>
              <div className='p-4 md:mx-4 hover:scale-110 '>
                <NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "regular-16 text-gray-700 cursor-pointer p-2 transition-all font-medium  bg-gray-200 rounded-full px-4" : "" }>
                Projects
                </NavLink>
              </div>
            </li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar