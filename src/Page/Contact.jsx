import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // To control the modal visibility

    const apiServiceKey = import.meta.env.VITE_SERVICE_API_KEY;
    const apiTemplateKey = import.meta.env.VITE_TEMPLATE_API_KEY;
    const apiKey = import.meta.env.VITE_API_KEY;

    const validateForm = () => {
        const errors = {};
        const name = form.current['user_name'].value.trim();
        const email = form.current['user_email'].value.trim();
        const message = form.current['message'].value.trim();

        if (!name) {
            errors.name = "Name is required.";
        }

        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid.";
        }

        if (!message) {
            errors.message = "Message is required.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        emailjs.sendForm(apiServiceKey, apiTemplateKey, form.current, {
            publicKey: apiKey,
        })
        .then(
            () => {
                setIsSubmitted(true); // Show modal on success
                form.current.reset(); // Clear form after submission
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <div className='max-w-[1240px] m-auto mt-20 h-full flex flex-col px-10'>
            <h1 className='text-7xl text-gray-950 text-center font-semibold flex flex-row '>Get in Touch</h1>
            <div className='py-12'>
                <div className='flex md:flex-row flex-col gap-8'>
                    <div className='md:w-2/3'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                <div>
                                    <label htmlFor="name" className="text-base font-medium text-gray-900 hidden">Your name</label>
                                    <div className="mt-2.5 relative">
                                        <input 
                                            type="text" 
                                            name="user_name" 
                                            id="name" 
                                            placeholder="Enter your full name" 
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-gray-950 caret-gray-950" 
                                        />
                                        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-gray-900 hidden">Email address</label>
                                    <div className="mt-2.5 relative">
                                        <input 
                                            type="email" 
                                            name="user_email" 
                                            id="email" 
                                            placeholder="Enter your email" 
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-gray-950 caret-gray-950" 
                                        />
                                        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="text-base font-medium text-gray-900 hidden">Message</label>
                                    <div className="mt-2.5 relative">
                                        <textarea 
                                            name="message" 
                                            id="message" 
                                            placeholder="Enter your message" 
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-200 border border-gray-200 rounded-md resize-y focus:outline-none focus:border-[#004F43] caret-gray-950" 
                                            rows="4"
                                        />
                                        {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <button 
                                        type="submit" 
                                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-gray-950 border border-transparent rounded-md focus:outline-none hover:bg-gray-700 focus:bg-[#0e2a25]"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=''>
                        <div>
                            <h2 className='text-base text-gray-900 text-center flex flex-row font-semibold'>Contact</h2>
                            <ul className='text-base gray'>
                                <li className='mb-3 pt-3'>
                                    <a className='' href="mailto:osokok7@gmail.com" rel='noopener' target='_blank'> osokok7@gmail.com</a>
                                </li>
                                <li className='mb-7'> 
                                    <a className='' href="https://wa.me/2348104432617?text=Hi,%20I%20just%20went%20through%20your%20portfolio%20my%20name%20is" rel='noopener' target='_blank'> +234 810 443 2617</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for success message */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-12 rounded-md shadow-lg flex flex-col justify-center items-center w-auto">
                        <h2 className="text-base/5 font-Semibold text text-center">Thank you for contacting me, <br />I'd get back to you <br /> as soon as possible!</h2>
                        <button 
                            onClick={() => setIsSubmitted(false)} 
                            className="mt-4 w-full py-2 bg-black text-white rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
