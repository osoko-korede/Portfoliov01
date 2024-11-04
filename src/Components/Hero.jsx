import React from 'react'
import { FaDribbble, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { ReactTyped } from "react-typed";



const Hero = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-28 h-full flex flex-col'>
        <div className='w-full flex justify-center'>
            <h1 className='p-5 pb-4 text-7xl md:text-9xl text-center font-semibold tracking-tight green inline-block text-transparent bg-clip-text'>
                Hi, I'm Korede. <br/> <ReactTyped
                strings={[
                    "a Designer",
                    "a Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                />
            </h1>
        </div>
        <div>
            <p className="gray text-center w-[80%] lg:max-w-[80%] m-auto mt-10">
            Hello, I’m Korede, a designer with a passion for creating impactful digital experiences. After years of honing my design skills, I bring a unique blend of creativity and technical skill to every project, ensuring that each project is both visually engaging and highly functional. My journey into front-end development has been driven by a commitment to merging aesthetics with code to build user-centered, responsive websites. Whether it’s through crafting seamless interactions or designing accessible and intuitive layouts, I aim to elevate the digital presence of every project I work on. 
            </p>
        </div>
        <div className='flex justify-between mt-10 mx-auto green text-2xl '>
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
        </div>
    </div>
  )
}

export default Hero