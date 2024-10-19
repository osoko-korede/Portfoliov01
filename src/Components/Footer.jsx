import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full mx-auto py-16 px-12 pb-20'>
    <div>
        <h1 className='w-full text-3xl font-semibold'>Let's get in touch</h1>
    </div>
    <div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Menu</h6>
                <ul>
                    <li className='py-2 text-sm'><Link to="/">Home</Link></li>
                    <li className='py-2 text-sm'><Link to="/about">About</Link></li>
                    <li className='py-2 text-sm'><Link to="/contact">Contact</Link></li>
                    <li className='py-2 text-sm'><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Contact</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        <a href="mailto:osokok7@gmail.com" rel='noopener' target='_blank'> osokok7@gmail.com</a>
                    </li>
                    <li className='py-2 text-sm'> 
                        <a href="https://wa.me/2348104432617?text=Hi,%20I%20just%20went%20through%20your%20portfolio%20my%20name%20is" rel='noopener' target='_blank'> +234 810 443 2617</a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Socials</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        <a href="https://www.behance.net/osokok" rel='noopener' target='_blank'>Behance</a>
                    </li>
                    <li className='py-2 text-sm'> 
                        <a href="https://twitter.com/not_korede/" rel='noopener' target='_blank'> X/Twitter</a>
                    </li>
                    <li className='py-2 text-sm'>
                        <a href="https://instagram.com/notkorede?utm_medium=copy_link" rel='noopener' target='_blank'>Instagram</a>
                    </li>
                    <li className='py-2 text-sm'> 
                        <a href="https://wa.me/2348104432617?text=Hi,%20I%20just%20went%20through%20your%20portfolio%20my%20name%20is" rel='noopener' target='_blank'> Whatsapp</a>
                    </li>
                    <li className='py-2 text-sm'>
                        <a href="https://www.linkedin.com/in/korede-osoko-6816401b2" rel='noopener' target='_blank'> LinkedIn</a>
                    </li>
                    <li className='py-2 text-sm'> 
                        <a href="https://pin.it/6D0lAgj" rel='noopener' target='_blank'> Pinterest</a>
                    </li>
                    <li className='py-2 text-sm'> 
                        <a href="https://dribbble.com/notkorede" rel='noopener' target='_blank'> Dribbble</a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>© 2024</h6>
            </div>
      </div>
    </div>
      
    </div>
  );
};

export default Footer;
