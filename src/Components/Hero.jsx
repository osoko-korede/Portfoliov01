import React from 'react'
import { FaDribbble, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { ReactTyped } from "react-typed";



const Hero = () => {
  return (
    <div className='max-w-[90%] m-auto mt-72 h-full flex flex-col px-5 lg:px-5'>
        <div className='w-full flex flex-col gap-2'>
            <h1 className='text-4xl tracking-tight green'>
                Hi, I'm Korede.
            </h1>
            <h1 className='pb-4 text-5xl md:text-8xl font-medium tracking-tight green inline-block text-transparent bg-clip-text'>
                <ReactTyped
                strings={[
                    "A Designer",
                    "A Developer",
                    "A Creative",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                />
            </h1>
        </div>
        <div className='w-full grid  md:justify-items-end'>
            <p className="green w-full lg:max-w-[20%] md:max-w-[50%] mt-10 text-left text-lg font-light">
            I specialize in developing visually compelling designs across print and digital platforms
            </p>
        </div>
        {/* <div className='flex justify-between mt-10 mx-auto green text-2xl '>
            <a href="https://github.com/osoko-korede" rel='noopener' target='_blank'>
                <FaGithub className='mx-5 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110'/>
            </a>
            <a href="https://wa.me/2348104432617?text=Hi,%20I%20just%20went%20through%20your%20portfolio%20my%20name%20is" rel='noopener' target='_blank'>
                <FaWhatsapp className='mx-5 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 '/>
            </a>
            <a href="https://instagram.com/notkorede?utm_medium=copy_link" rel='noopener' target='_blank'>
                <FaInstagram className='mx-5 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 '/>
            </a>
            <a href="https://twitter.com/not_korede/" rel='noopener' target='_blank'>
                <FaTwitter className='mx-5 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 '/>
            </a>
            <a href="https://dribbble.com/notkorede" rel='noopener' target='_blank'>
                <FaDribbble className='mx-5 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 '/>
            </a>
        </div> */}
    </div>
  )
}

export default Hero