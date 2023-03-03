import React from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import { ContactUs } from '../../components/Email/Email'


const Contact = () => {
    return (
        <main className='container overflow-scroll flex flex-col justify-center'>
            <h1 className='pl-[8rem] mt-[15rem] text-[4rem] text-[#ffd700] font-[Coolvetica]'>
                <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} index={15} />
            </h1>

            <section className='pl-[8rem] pr-5 pb-5 sm:py-[5rem] text-[2rem] border-b border-b-[#ffd700] text-white font-[Coolvetica]'>I'm interested in contract, contract-to-hire, full-time, and internship opportunities - especially ambitious or large projects. Remote is preferred if not local to the Tulsa, OK area. However, if you have other requests or questions, don't hesitate to reach out to me.</section>

            <ContactUs />

        </main>

        // {/* Map div */ }
    )
}

export default Contact