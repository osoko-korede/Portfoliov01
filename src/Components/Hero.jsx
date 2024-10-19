import React from 'react'
import { FaDribbble, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-28 h-full flex flex-col'>
        <div className='w-full flex justify-center'>
            <h1 className=' pb-4 text-9xl text-center font-semibold tracking-tight bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 inline-block text-transparent bg-clip-text'>
                Hi, I'm Korede. <br/> a Designer.
            </h1>
        </div>
        <div>
            <p className="text-gray-950 text-center max-w-[50%] m-auto mt-10">
                I am an experienced graphics, UI/UX, and front-end designer that is very passionate about making an impact. I am an experienced graphics, UI/UX, and front-end designer that is very passionate about making an impact. 
            </p>
        </div>
        <div className='flex justify-between mt-10 max-w-[30%] mx-auto'>
            <a href="https://github.com/osoko-korede" rel='noopener' target='_blank'>
                <FaGithub size={30} className='mx-5 text-gray-900'/>
            </a>
            <a href="https://wa.me/2348104432617?text=Hi,%20I%20just%20went%20through%20your%20portfolio%20my%20name%20is" rel='noopener' target='_blank'>
                <FaWhatsapp size={30} className='mx-5 text-gray-900'/>
            </a>
            <a href="https://instagram.com/notkorede?utm_medium=copy_link" rel='noopener' target='_blank'>
                <FaInstagram size={30} className='mx-5 text-gray-900'/>
            </a>
            <a href="https://twitter.com/not_korede/" rel='noopener' target='_blank'>
                <FaTwitter size={30} className='mx-5 text-gray-900'/>
            </a>
            <a href="https://dribbble.com/notkorede" rel='noopener' target='_blank'>
                <FaDribbble size={30} className='mx-5 text-gray-900'/>
            </a>
        </div>
    </div>
  )
}

export default Hero