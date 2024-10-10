import React from 'react'
import { FaDribbble, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-60 h-full flex flex-col'>
        <h1 className='text-9xl text-green-900 text-center font-semibold'>
            Hi, I'm Korede. <br/> a Designer.
        </h1>
        <p className="text-green-950 text-center max-w-[50%] m-auto mt-10">
            I am an experienced graphics, UI/UX, and front-end designer that is very passionate about making an impact. I am an experienced graphics, UI/UX, and front-end designer that is very passionate about making an impact. 
        </p>
        <div className='flex justify-between mt-10 max-w-[30%] m-auto'>
            <a href="https://github.com/osoko-korede" rel='noopener' target='_blank'>
                <FaGithub size={30} className='mx-5 text-green-900'/>
            </a>
            <a href="https://wa.me/2348104432617?text=Hi,%20I%20just%20went%20through%20your%20portfolio%20my%20name%20is" rel='noopener' target='_blank'>
                <FaWhatsapp size={30} className='mx-5 text-green-900'/>
            </a>
            <a href="https://instagram.com/notkorede?utm_medium=copy_link" rel='noopener' target='_blank'>
                <FaInstagram size={30} className='mx-5 text-green-900'/>
            </a>
            <a href="https://twitter.com/not_korede/" rel='noopener' target='_blank'>
                <FaTwitter size={30} className='mx-5 text-green-900'/>
            </a>
            <a href="https://dribbble.com/notkorede" rel='noopener' target='_blank'>
                <FaDribbble size={30} className='mx-5 text-green-900'/>
            </a>

            
            
            
            
            
        </div>
    </div>
  )
}

export default Hero