import React from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import { Link } from 'react-router-dom'
import '../../assets/images/TechFreak.png'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import TechFreak from '../../assets/images/TechFreak.png'
import LandingPage from '../../assets/images/LandingPage.png'
import SpotifyClone from '../../assets/images/SpotifyClone.png'


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

                    {/* BucketList */}
                    {/* <section className='mt-5 pl-28 pr-5'>
                        <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                            BucketList
                        </h2>
                        <main>
                            <a href='https://bucketlist-adventures.herokuapp.com/' target='_blank' className='hover:opacity-75'>
                                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/b2d2e100-4fde-4432-872b-03c86a7d9613/US-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
                            </a>
                        </main>
                        <footer className='text-white mt-5 flex justify-center'>Yelp inspired website for people to add adventures and share ideas for things to add to their bucket list. Technology used:
                            - HTML
                            - CSS
                            - JavaScript
                            - Bootstrap
                            - EJS Templating
                            - Node.js
                            - MongoDB
                            - Passport.js</footer>
                    </section> */}



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
                            Spotify Clone
                        </h2>
                        <main>
                            <a href='https://spotify-clone-blockchain-phi.vercel.app/' target='_blank' className='hover:opacity-75 text-[#ffd700] font-[Coolvetica]'>
                                <img src={SpotifyClone} alt='Project image' />
                            </a>
                        </main>
                        <footer className='text-white mt-5 flex justify-center'>Web3 dApp with React, Next.js, TailwindCSS, Solana, Phantom, QuickNode</footer>
                    </section>
                </div>
            </div>
            {/* <Loader type='pacman' /> */}
        </div>
    )
}

export default Work