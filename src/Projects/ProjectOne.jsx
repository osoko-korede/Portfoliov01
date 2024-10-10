import React from 'react'
import project from "../assets/Project1.png"


const ProjectOne = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-60'>
        <div className= 'w-full mt-9'>
            <img className='w-full' src={project} alt="random screenshot" />
            <h2 className='text-3xl font-medium mt-5'>Project 1</h2>
            <p className='text-gray-400 font-light mt-1'>React, Typescript, Vercel, JS, Node</p>
        </div>
    </div>
    
  )
}

export default ProjectOne