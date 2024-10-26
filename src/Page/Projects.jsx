import ata from '../assets/Africa-Trade-Access.png'
import charger from '../assets/Charger.png'
import chatsy from '../assets/Chatsy.png'
import fitness from '../assets/Fitness.png'
import fp from '../assets/Fokes Property.png'
import fc from '../assets/Fokes-Consult.png'
import stock from '../assets/Stock-Image.png'
import todo from '../assets/To-Do.png'
import weather from '../assets/Weather-App.png'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";



const Projects = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-40 h-full flex flex-col p-4'>
        <h1 className='text-7xl text-green-900 text-center font-semibold flex flex-row'>Selected Works</h1>
        <div className='grid grid-cols-1 gap-7 md:grid-cols-2'>
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
                        <CardTitle>React.js Website</CardTitle>
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
            <NavLink to="/weather-app">
                <div className= 'w-full mt-9'>
                    <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                        <CardTitle>Weather App Website</CardTitle>
                        <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                            <div className="flex justify-center px-4">
                                <img src={weather} alt="Weather App screenshot"/>
                            </div>
                        </div>
                    </BounceCard>
                    <div className="flex mt-4 gap-2">
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>React</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Vite</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>API</p>
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
            <NavLink to="/image-search">
                <div className= 'w-full mt-9'>
                    <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                        <CardTitle>Stock Image App</CardTitle>
                        <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                            <div className="flex justify-center px-4">
                                <img src={stock} alt="Stock Image App screenshot"/>
                            </div>
                        </div>
                    </BounceCard>
                    <div className="flex mt-4 gap-2">
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>React</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Vite</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>API</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Tailwind CSS</p>
                    </div>
                </div>
            </NavLink>                  
            <NavLink to="/chatsy">
                <div className= 'w-full mt-9'>
                    <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                        <CardTitle>Chat App</CardTitle>
                        <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                            <div className="flex justify-center px-4">
                                <img src={chatsy} alt="Chat App screenshot"/>
                            </div>
                        </div>
                    </BounceCard>
                    <div className="flex mt-4 gap-2 flex-wrap">
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>React</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Firebase Auth</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Firebase Db</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Firebase Hosting</p>
                        <p className='green bg-[#E4EAA2] rounded-full px-3 py-2'>Material UI</p>
                    </div>
                </div>
            </NavLink>          
            <NavLink to="/africa-trade-access">
                <div className= 'w-full mt-9'>
                    <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                        <CardTitle>Africa Trade Access</CardTitle>
                        <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                            <div className="flex justify-center px-4">
                                <img src={ata} alt="Africa Trade Access website screenshot"/>
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
            <NavLink to="/fokes-property">
                <div className= 'w-full mt-9'>
                    <BounceCard className="col-span-12 md:col-span-6 bg-[#E4E5E0]">
                        <CardTitle>Fokes Property</CardTitle>
                        <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] mockup-window border border-[#004F43]">
                            <div className="flex justify-center px-4">
                                <img src={fp} alt="Fokes Property website screenshot"/>
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
    </div>
  )
}

const BounceCard = ({ className, children }) => {
    return (
      <motion.div
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl py-14 mt-8  ${className}`}
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

export default Projects