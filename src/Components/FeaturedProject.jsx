
import { motion } from "framer-motion";
import React from 'react'
import fitness from '../assets/Fitness.png'
import fc from '../assets/Fokes-Consult.png'
import charger from '../assets/Charger.png'
import todo from '../assets/To-Do.png'
import { NavLink } from 'react-router-dom'



const FeaturedProject = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-36 text-slate-800">
    <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end md:px-8">
      <h2 className="max-w-lg tracking-tight text-xl md:text-2xl">
        Here are some projects I've worked on
      </h2>
      <NavLink to="/projects" className="text-lg green font-semibold flex gap-2 items-center tracking-tight"> See more </NavLink> 
    </div>
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <NavLink to="/Fitness">
          <div className= 'w-full mt-9'>
              <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                  <CardTitle>Next.js Website</CardTitle>
                  <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                      <div className="flex justify-center px-4">
                          <img src={fitness} alt="fitness website screenshot"/>
                      </div>
                  </div>
              </BounceCard>
              <div className="flex mt-4 gap-2">
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Next.js</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>React</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Tailwind CSS</p>
              </div>
          </div>
      </NavLink>                  
      <NavLink to="/charger">
          <div className= 'w-full mt-9'>
              <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                  <CardTitle>React Website</CardTitle>
                  <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                      <div className="flex justify-center px-4">
                          <img src={charger} alt="Charger website screenshot"/>
                      </div>
                  </div>
              </BounceCard>
              <div className="flex mt-4 gap-2">
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>React</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Vite</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Tailwind CSS</p>
              </div>
          </div>
      </NavLink>                  
      <NavLink to="/todo">
          <div className= 'w-full mt-9'>
              <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                  <CardTitle>To-Do App</CardTitle>
                  <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                      <div className="flex justify-center px-4">
                          <img src={todo} alt="Todo App screenshot"/>
                      </div>
                  </div>
              </BounceCard>
              <div className="flex mt-4 gap-2">
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>React</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Vite</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>UseState</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Tailwind CSS</p>
              </div>
          </div>
      </NavLink>
      <NavLink to="/fokes-consult">
          <div className= 'w-full mt-9'>
              <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                  <CardTitle>Fokes Consult</CardTitle>
                  <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                      <div className="flex justify-center px-4">
                          <img src={fc} alt="Fokes Consult website screenshot"/>
                      </div>
                  </div>
              </BounceCard>
              <div className="flex mt-4 gap-2">
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Wordpress</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Elementor</p>
                  <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>SEO</p>
              </div>
          </div>
      </NavLink>
    </div>
  </section>
);
};

const BounceCard = ({ className, children }) => {
return (
  <motion.div
    whileHover={{ scale: 0.95, rotate: "-1deg" }}
    className={`group relative min-h-[300px] overflow-hidden rounded-2xl py-14 mt-8  ${className}`}
  >
     {children}
  </motion.div>
);
};

const CardTitle = ({ children }) => {
return (
  <h3 className="mx-auto text-center text-3xl font-semibold green">{children}</h3>
);
};

export default FeaturedProject