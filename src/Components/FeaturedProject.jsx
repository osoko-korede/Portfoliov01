import React from 'react'
import charger from '../assets/Charger.png'
import pledge26 from '../assets/Pledge/26.avif'
import evolve07 from '../assets/EvolveAI/07.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import AnimatedLink from './AnimatedLink'






const FeaturedProject = () => {

    const [hovered, setHovered] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);


    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      };

  return (
    <section className="mx-auto w-full lg:max-w-[90%] px-4 pt-36 text-slate-800">
        <div className='mt-32'>
            <div className="mb-4 grid grid-cols-1 gap-4">
            <NavLink to={`/project/charger`}>
                <div
                    className="w-full mt-9 relative overflow-hidden"
                >
                    <div className="overflow-hidden relative"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <img
                        src={charger}
                        alt="Charger Website screensot"
                        className="rounded-md hover:scale-110 transition-all duration-500 ease-in-out transform"
                    />
                    {hovered && (
                        <div
                        className="absolute flex flex-col gap-0 items-center justify-center text-black text-center text-sm/none md:text-lg font-light bg-white rounded-full h-24 w-24 pointer-events-none transition-transform duration-200 ease-in-out"
                        style={{
                            top: `${position.y}px`,
                            left: `${position.x}px`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        >
                        <p>View</p>
                        </div>
                    )}
                    </div>
                    <div className="flex flex-row w-full lg:w-[50%] justify-between text-xl md:text-2xl mt-4">
                    <h1>React Website</h1>
                    <h1 className="text-gray-400">(Front End)</h1>
                    <h1 className="hidden md:block text-gray-400">2024</h1>
                    </div>
                </div>
                </NavLink>
            <NavLink to={`/project/evolveai`}>
                <div
                    className="w-full mt-9 relative overflow-hidden"
                >
                    <div className="overflow-hidden relative"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <img
                        src={evolve07}
                        alt="EvolveAI"
                        className="rounded-md hover:scale-110 transition-all duration-500 ease-in-out transform"
                    />
                    {hovered && (
                        <div
                        className="absolute flex flex-col gap-0 items-center justify-center text-black text-center text-sm/none md:text-lg font-light bg-white rounded-full h-24 w-24 pointer-events-none transition-transform duration-200 ease-in-out"
                        style={{
                            top: `${position.y}px`,
                            left: `${position.x}px`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        >
                        <p>View</p>
                        </div>
                    )}
                    </div>
                    <div className="flex flex-row w-full lg:w-[50%] justify-between text-xl md:text-2xl mt-4">
                    <h1>EvolveAI</h1>
                    <h1 className="text-gray-400">(Branding)</h1>
                    <h1 className="hidden md:block text-gray-400">2024</h1>
                    </div>
                </div>
                </NavLink>
            <NavLink to={`/project/pledge`}>
                <div
                    className="w-full mt-9 relative overflow-hidden"
                >
                    <div className="overflow-hidden relative"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <img
                        src={pledge26}
                        alt="Pledge"
                        className="rounded-md hover:scale-110 transition-all duration-500 ease-in-out transform"
                    />
                    {hovered && (
                        <div
                        className="absolute flex flex-col gap-0 items-center justify-center text-black text-center text-sm/none md:text-lg font-light bg-white rounded-full h-24 w-24 pointer-events-none transition-transform duration-200 ease-in-out"
                        style={{
                            top: `${position.y}px`,
                            left: `${position.x}px`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        >
                        <p>View</p>
                        </div>
                    )}
                    </div>
                    <div className="flex flex-row w-full lg:w-[50%] justify-between text-xl md:text-2xl mt-4">
                    <h1>Pledge</h1>
                    <h1 className="text-gray-400">(UI/UX)</h1>
                    <h1 className="hidden md:block text-gray-400">2024</h1>
                    </div>
                </div>
                </NavLink>
        </div>
      
    </div>
    <div className="mt-32 flex">
      <div className=''>
        <AnimatedLink to="/projects">See all works</AnimatedLink>
      </div>
    </div>
  </section>
);
};

export default FeaturedProject