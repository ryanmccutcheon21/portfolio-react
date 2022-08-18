import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

init('user_9hz0OeDfaAL1qLpg4a9xW')

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', form.current, 'EMAILJS_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='flex justify-center mt-10'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col text-center font-[Coolvetica] text-[#ffd700] text-[3rem] w-[50%]'>
                <label>Name</label>
                <input type="text" name="user_name" className='bg-transparent border border-red-500' />
                <label>Email</label>
                <input type="email" name="user_email" className='border border-red-500 bg-transparent' />
                <label>Subject</label>
                <input className='border border-red-500 bg-transparent' />
                <label>Message</label>
                <textarea name="message" className='border border-red-500 bg-transparent' />
                <button type="submit" className='border border-red-500 mt-10 hover:bg-red-500'>Send</button>
            </form>
        </div>
    );
};