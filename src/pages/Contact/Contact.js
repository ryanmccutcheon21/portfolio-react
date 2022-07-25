import React from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'

const Contact = () => {
    return (
        <main className='flex flex-col justify-center'>
            <h1 className='pl-[8rem] text-[4rem]'>
                <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} index={15} />
            </h1>

            <section className='pl-[8rem] pr-5 pb-5 sm:py-[5rem] text-[2rem] border-b border-b-[#ffd700] text-white font-[Coolvetica]'>I'm interested in freelance, contract, contract-to-hire, and full-time opportunities - especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to reach out to me.</section>



            {/* FORM */}

            <div className='flex mt-[5rem] justify-center ml-[8rem]'>
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input class="appearance-none block w-full bg-transparent text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />
                            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <input class="appearance-none block w-full bg-transparent text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <input class="appearance-none block w-full bg-transparent text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Subject" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <textarea class="appearance-none block w-full bg-transparent text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-[10rem]" id="grid-textarea" type="text" placeholder="Message" />
                        </div>
                    </div>
                </form>
            </div>
        </main>

        // {/* Map div */ }
        // <div></div>
    )
}

export default Contact