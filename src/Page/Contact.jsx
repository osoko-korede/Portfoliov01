import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto mt-20 h-full flex flex-col'>
        <h1 className='text-7xl text-green-900 text-center font-semibold flex flex-row'>Get in Touch</h1>
        <div className=''>
            <div className= 'flex flex-row mt-52'>
                <h2 className='text-5xl text-green-900 text-center flex flex-row w-[30%]'>Contact</h2>
                <ul className='text-2xl text-green-950 font-light'>
                    <li className='mb-7 pt-3'> Mail me at 
                        <a className='font-medium underline' href="mailto:osokok7@gmail.com" rel='noopener' target='_blank'> osokok7@gmail.com</a>
                    </li>
                    <li className='mb-7'>Whatsapp 
                        <a className='font-medium underline' href="https://wa.me/2348104432617?text=Hi,%20I%20just%20went%20through%20your%20portfolio%20my%20name%20is" rel='noopener' target='_blank'> +234 810 443 2617</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact