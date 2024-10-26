import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-20 h-full flex flex-col'>
        <h1 className='text-7xl text-green-900 font-semibold flex flex-row p-10'>About Me</h1>
        <p className='p-10'>I’m Korede, a front-end developer with a strong foundation in design. Starting my career in graphics and UI/UX design, I transitioned into front-end development to bring my creative vision to life through code. I specialize in building engaging, user-friendly web applications, utilizing frameworks like React and Next.js, along with styling libraries like Tailwind and Bootstrap. With an eye for detail and a dedication to usability, I’m focused on creating digital solutions that are not only beautiful but also accessible and impactful.</p>
        <div className=''>
            <div className= 'flex flex-col md:flex-row p-10 gap-4'>
                    <h2 className=' font-semibold text-5xl text-green-900 text-center flex flex-row w-[30%]'>Resume</h2>
                    <ul className='text-2xl text-green-950 font-light pt-4'>
                        <li className='mb-7'><a href="https://docs.google.com/document/d/1iQ8GTZmBCcvz621cwh7KMtuARybgGdGafVseNKG65cY/edit?usp=sharing" rel='noopener' target='_blank' className='underline'>View</a></li>
                    </ul>
            </div>
            <div className= 'flex flex-col md:flex-row mt-28 p-10 gap-4'>
                <h2 className='text-5xl font-semibold text-green-900 text-center flex flex-row w-[30%]'>Services</h2>
                <ul className='text-2xl text-green-950 font-light pt-4'>
                    <li className='mb-7 '>Front-End Development</li>
                    <li className='mb-7'>No-Code Website Design</li>
                    <li className='mb-7'>UI Design</li>
                    <li className='mb-7'>UX Research</li>
                    <li className='mb-7'>Graphics Design</li>
                </ul>
            </div>
            <div className= 'flex flex-col md:flex-row p-10 gap-4'>
                <h2 className='font-semibold text-5xl text-green-900 text-center flex flex-row w-[30%]'>Proficiency</h2>
                <ul className='text-2xl text-green-950 font-light pt-4'>
                    <li className='mb-7'>React</li>
                    <li className='mb-7'>Next js</li>
                    <li className='mb-7'>Typescript</li>
                    <li className='mb-7'>Node.js</li>
                    <li className='mb-7'>Tailwind CSS</li>
                    <li className='mb-7'>HTML</li>
                    <li className='mb-7'>CSS</li>
                    <li className='mb-7'>Javascript</li>
                    <li className='mb-7'>Webflow</li>
                    <li className='mb-7'>Wordpress</li>
                    <li className='mb-7'>Framer</li>
                    <li className='mb-7'>VS Code</li>
                    <li className='mb-7'>Figma</li>
                    <li className='mb-7'>Adobe XD</li>
                    <li className='mb-7'>Adobe Photoshop</li>
                    <li className='mb-7'>Adobe Illustrator</li>
                    <li className='mb-7'>Adobe Indesign</li>
                    <li className='mb-7'>Adobe Premiere Pro</li>
                    <li className='mb-7'>Capcut</li>
                </ul>
            </div>
            <div className= 'flex flex-col md:flex-row p-10 gap-4'>
                <h2 className='font-semibold text-5xl text-green-900 text-center flex flex-row w-[30%]'>Experience</h2>
                <ul className='text-2xl text-green-950 font-light pt-4'>
                    <li className='mb-7 leading-9'>Graphics Designer, Video Editor<br/> DXCo <br/>2024-Present
                    </li>
                    <li className='mb-7 leading-9'>Graphics Designer <br/> Softswapp <br/>2020-Present
                    </li>
                    <li className='mb-7 leading-9'>Graphics Designer, WordPress Developer <br/>Fokes <br/>2023 - 2024
                    </li>
                    <li className='mb-7 leading-9'>Volunteer, Graphics Designer, Community Relations <br/>Ignite Initiative <br/>2022-Present
                    </li>
                    <li className='mb-7 leading-9'>Brand Designer, Logo Designer, Graphics Designer, Writer <br/>Freelance <br/>2020-Present
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default About