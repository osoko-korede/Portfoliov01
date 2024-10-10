import React from 'react'
import project from "../assets/Project1.png"
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-40 h-full flex flex-col p-4'>
        <h1 className='text-7xl text-green-900 text-center font-semibold flex flex-row'>Selected Works</h1>
        <div className='grid grid-cols-1 gap-7 md:grid-cols-2'>
            <Link to="/ProjectOne">
                <div className= 'w-full mt-9'>
                    <img className='w-full' src={project} alt="random screenshot" />
                    <h2 className='text-3xl font-medium mt-5'>Project 1</h2>
                    <p className='text-gray-400 font-light mt-1'>React, Typescript, Vercel, JS, Node</p>
                </div>
            </Link>
            <Link to="/ProjectOne">
                <div className= 'w-full mt-9'>
                    <img className='w-full' src={project} alt="random screenshot" />
                    <h2 className='text-3xl font-medium mt-5'>Project 1</h2>
                    <p className='text-gray-400 font-light mt-1'>React, Typescript, Vercel, JS, Node</p>
                </div>
            </Link>
            <Link to="/ProjectOne">
                <div className= 'w-full mt-9'>
                    <img className='w-full' src={project} alt="random screenshot" />
                    <h2 className='text-3xl font-medium mt-5'>Project 1</h2>
                    <p className='text-gray-400 font-light mt-1'>React, Typescript, Vercel, JS, Node</p>
                </div>
            </Link>
            <Link to="/ProjectOne">
                <div className= 'w-full mt-9'>
                    <img className='w-full' src={project} alt="random screenshot" />
                    <h2 className='text-3xl font-medium mt-5'>Project 1</h2>
                    <p className='text-gray-400 font-light mt-1'>React, Typescript, Vercel, JS, Node</p>
                </div>
            </Link>
            <Link to="/ProjectOne">
                <div className= 'w-full mt-9'>
                    <img className='w-full' src={project} alt="random screenshot" />
                    <h2 className='text-3xl font-medium mt-5'>Project 1</h2>
                    <p className='text-gray-400 font-light mt-1'>React, Typescript, Vercel, JS, Node</p>
                </div>
            </Link>
            <Link to="/ProjectOne">
                <div className= 'w-full mt-9'>
                    <img className='w-full' src={project} alt="random screenshot" />
                    <h2 className='text-3xl font-medium mt-5'>Project 1</h2>
                    <p className='text-gray-400 font-light mt-1'>React, Typescript, Vercel, JS, Node</p>
                </div>
            </Link>           
        </div>
    </div>
  )
}

export default Projects