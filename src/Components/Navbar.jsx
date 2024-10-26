import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky flex items-center justify-center z-30 py-5 top-0'>
      <div className=' border rounded-full backdrop-blur-md'>
        <ul className='flex gray text-sm md:text-base'>
            <li>
              <div className='p-4 md:mx-4 hover:scale-110 '>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "regular-16 text-white backdrop-blur-sm cursor-pointer p-2 transition-all font-medium  green-bg rounded-full px-4" : "" }>
                Home
                </NavLink>
              </div>
            </li>
            <li>
              <div className='p-4 md:mx-4 hover:scale-110 '>
                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "regular-16 text-white cursor-pointer p-2 transition-all font-medium  green-bg rounded-full px-4" : "" }>
                About
                </NavLink>
              </div>
            </li>
            <li>
              <div className='p-4 md:mx-4 hover:scale-110 '>
                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "regular-16 text-white cursor-pointer p-2 transition-all font-medium   green-bg rounded-full px-4" : "" }>
                Contact
                </NavLink>
              </div>
            </li>
            <li>
              <div className='p-4 md:mx-4 hover:scale-110 '>
                <NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "regular-16 text-white cursor-pointer p-2 transition-all font-medium   green-bg rounded-full px-4" : "" }>
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