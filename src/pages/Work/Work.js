import React from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import { Link } from 'react-router-dom'
import '../../assets/images/TechFreak.png'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import TechFreak from '../../assets/images/TechFreak.png'
import LandingPage from '../../assets/images/LandingPage.png'
import FitnessApp from '../../assets/images/FitnessApp.png'
import UA from '../../assets/images/UA.png'
import Hoobank from '../../assets/images/Hoobank.png'
import RealEstate from '../../assets/images/RealEstate.png'

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <div>
            <div className='container overflow-scroll h-[100%]'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            index={15}
                        />
                    </h1>
                </div>
                <div className='mt-20 flex flex-col overflow-scroll md:flex-row'>


                    {/* TechFreak */}

                    <section className='mt-5 pl-28 pr-5'>
                        <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                            TechFreak
                        </h2>
                        <main>
                            <a href='https://techfreak-aa802.web.app/' target='_blank' className='hover:opacity-75'>
                                <img src={TechFreak} />
                            </a>
                        </main>
                        <footer className='text-white mt-5 flex justify-center'>eCommerce store made using React, Redux, and commerce.js. Payments with Stripe API.</footer>
                    </section>

                    {/* Landing Page */}

                    <section className='mt-5 pl-28 pr-5'>
                        <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                            Landing Page
                        </h2>
                        <main>
                            <a href='https://landing-page-pearl-tau.vercel.app/' target='_blank' className='hover:opacity-75'>
                                <img src={LandingPage} />
                            </a>
                        </main>
                        <footer className='text-white mt-5 flex justify-center'>HTML, CSS, Bootstrap</footer>
                    </section>



                    {/* Spotify Clone */}
                    <section className='mt-5 pl-28 pr-5'>
                        <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                            Fitness App
                        </h2>˜
                        <main>
                            <a href='https://fitness-app-iota.vercel.app/' target='_blank' className='hover:opacity-75 text-[#ffd700] font-[Coolvetica]'>
                                <img src={FitnessApp} alt='Project image' />
                            </a>
                        </main>
                        <footer className='text-white mt-5 flex justify-center'>React, MaterialUI, RapidAPI</footer>
                    </section>

                    {/* Under Armour Clone */}
                    <section className='mt-5 pl-28 pr-5'>
                        <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                            Under Armour Clone
                        </h2>
                        <main>
                            <a href='https://under-armour-clone.vercel.app/' target='_blank' className='hover:opacity-75 text-[#ffd700] font-[Coolvetica]'>
                                <img src={UA} alt='Project image' />
                            </a>
                        </main>
                        <footer className='text-white mt-5 flex justify-center'>React, TailwindCSS</footer>
                    </section>

                    {/* Hoobank */}
                    <section className='mt-5 pl-28 pr-5'>
                        <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                            Hoobank
                        </h2>
                        <main>
                            <a href='https://hoobank-ashen.vercel.app/' target='_blank' className='hover:opacity-75 text-[#ffd700] font-[Coolvetica]'>
                                <img src={Hoobank} alt='Project image' />
                            </a>
                        </main>
                        <footer className='text-white mt-5 flex justify-center'>React, TailwindCSS</footer>
                    </section>


                    {/* Real Estate */}
                    <section className='mt-5 pl-28 pr-5'>
                        <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                            Real Estate App
                        </h2>
                        <main>
                            <a href='https://realestate-tau-lac.vercel.app/' target='_blank' className='hover:opacity-75 text-[#ffd700] font-[Coolvetica]'>
                                <img src={RealEstate} alt='Project image' />
                            </a>
                        </main>
                        <footer className='text-white mt-5 flex justify-center'>React, TailwindCSS, Next.js, Axios, Chakra-UI</footer>
                    </section>
                </div>
            </div>
            {/* <Loader type='pacman' /> */}
        </div>
    )
}

export default Work