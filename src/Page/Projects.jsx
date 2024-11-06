import { NavLink } from 'react-router-dom'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import { categories } from "../constants/index.."



const Projects = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-40 h-full flex flex-col p-4'>
        <h1 className='text-7xl text-gray-950 text-center font-semibold flex flex-row'>Selected Works</h1>
        
    <div className="flex w-full justify-center pt-24">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex gap-2 md:gap-8 items-center justify-center">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/2 green md:font-semibold focus:outline-none data-[selected]:bg-gray-950 data-[selected]:text-white data-[hover]:bg-gray-900/10 data-[selected]:data-[hover]:bg-gray-900/20 data-[selected]:data-[hover]:green data-[focus]:outline-1 data-[focus]:outline-gray-300"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, projects }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <div className='grid grid-cols-1 gap-14 md:grid-cols-2 mt-9'>
                  {projects.map((project, index) => (
                    <NavLink to={`/project/${project.id}`}>
                      <div className="flex justify-center flex-col overflow-hidden rounded-md transition-all duration-500 ease-in-out transform hover:shadow-lg">
                          <img src={project.image} alt={project.alt} className='hover:scale-110 transition-all duration-500 ease-in-out transform'/>
                      </div>
                      <h1 className='text-3xl green font-semibold mt-4'>{project.name}</h1>
                      <ul className="flex mt-4 gap-2 flex-wrap">
                          {project.stack.map((stack, index) => (
                              <li key={index} className="green bg-gray-200 rounded-full px-3 py-1 text-sm">
                                  <span>{stack}</span>
                              </li>
                          ))}
                      </ul>
                    </NavLink>
                    ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>


    </div>
  )
}

export default Projects