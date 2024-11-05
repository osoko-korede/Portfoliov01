import React from 'react';


const ProjectDetail = ({ title, description, image, year, externalLink, externalLinkDescription, techStack, photoSet }) => {
  return (
    <div className="project-detail">
        <div className='max-w-[90%] m-auto my-60 text-gray-950'>
            <div className='max-w-[90%] m-auto'>
                <h1 className='text-6xl font-semibold'>{title}</h1>
                <div className='mt-40 grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500 text-lg'>Services/Stack</p>
                    <hr />
                    <ul className='flex gap-2'>
                        {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500 text-lg'>Year</p>
                    <hr />
                    <p className='text-lg'>{year}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500 text-lg'>Credits</p>
                    <hr />
                    <p className='text-lg'>Osoko Korede</p>
                </div>
                </div>
            </div>

            <div className='mt-40 flex flex-col gap-24'>
                <img src={image} alt={`${title} screenshot`}  className='rounded-lg'/>

                <div className='max-w-[90%] flex flex-col md:flex-row gap-20 mt-20'>
                <h1 className='text-lg text-gray-500'>Details</h1>
                <div className='flex flex-col gap-8'>
                    <p className='text-2xl 2xl:max-w-[50%]'>{description}</p>
                    <a href={externalLink} rel='noopener' target='_blank' className='text-lg font-normal'>{externalLinkDescription}</a>
                </div>
                
            </div>

            </div>

            <ul className="grid gap-10 lg:gap-20 mt-40">
                {photoSet.map((photo, index) => (
                    photo ? (
                    <li key={index}>
                        <img src={photo} alt={`${title} screenshot`} className="rounded-lg" />
                    </li>
                    ) : null
                ))}
            </ul>

        </div>
    </div>
  );
};

export default ProjectDetail;
