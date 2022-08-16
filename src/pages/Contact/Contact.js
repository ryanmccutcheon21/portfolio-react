import React from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'

const Contact = () => {
    return (
        <main className='flex flex-col justify-center'>
            <h1 className='pl-[8rem] pt-[5rem] text-[4rem] text-[#ffd700] font-[Coolvetica]'>
                <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} index={15} />
            </h1>

            <section className='pl-[8rem] pr-5 pb-5 sm:py-[5rem] text-[2rem] border-b border-b-[#ffd700] text-white font-[Coolvetica]'>I'm interested in contract, contract-to-hire, full-time, and internship opportunities - especially ambitious or large projects. Remote is preferred if not local to the Northwest Arkansas region. Relocation will be considered based on company and compensation. However, if you have other requests or questions, don't hesitate to reach out to me.</section>



            {/* FORM */}

            <div className='flex mt-[5rem] justify-center ml-[8rem] pr-5'>
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input class="appearance-none block w-full bg-transparent text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-red-500 focus:text-white focus:font-bold" id="grid-first-name" type="text" placeholder="First Name" />
                            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <input class="appearance-none block w-full bg-transparent text-white border border-red-500 rounded py-3 px-4 leading-tight  focus:border-gray-500 focus:bg-red-500 focus:text-white focus:font-bold focus:outline-none" id="grid-last-name" type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <input class="appearance-none block w-full bg-transparent text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-red-500 focus:text-white focus:font-bold" id="grid-password" type="text" placeholder="Subject" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <textarea class="appearance-none block w-full bg-transparent text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-red-500 focus:text-white focus:font-bold h-[10rem] " id="grid-textarea" type="text" placeholder="Message" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='px-[2rem] py-[1rem]  border border-red-500 rounded font-[Coolvetica] font-bold text-red-500 hover:bg-red-500 hover:text-black' type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </main>

        // {/* Map div */ }
        // <div></div>
    )
}

export default Contact