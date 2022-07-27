import React from 'react'
import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import { Link } from 'react-router-dom'


import { useEffect, useState } from 'react'
import {
    faBootstrap,
    faCss3,
    faGitAlt,
    faHtml5,
    faReact,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
    return (
        <div className='container skills-page overflow-scroll'>
            <div className='text-zone'>
                <h1 className='skills-text'>
                    <AnimatedLetters
                        strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                        index={15}
                    />
                </h1>
                <p>
                    Since beginning my journei as a freelance developer nearly 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
                    <br />
                    <br />
                    I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end developments. HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                    <br />
                    <br />
                    I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others).
                    <br />
                    <br />
                    Visit my <a href='https://www.linkedin.com/in/ryan-mccutcheon-185b261b8/' target='_blank' className='text-[#ffd700]'>LinkedIn</a> profile for more details or just <Link className='text-[#ffd700]' to='/contact'>contact</Link> me.
                </p>
            </div>




            {/* Technologies */}

            <div className='technology-container flex flex-col pt-10'>
                <p className='border-b-2 border-blue-400 pb-2 text-[2rem]'>React</p>
                <p className='border-b-2 text-[2rem] border-green-600 pb-2 pt-3'>Node</p>
                <p className='border-b-2 text-[2rem] border-green-600 pb-2 pt-2'>MongoDB</p>
                <p className='border-b-2 text-[2rem] border-white pb-2 pt-2'>Express</p>
                <p className='border-b-2 text-[2rem] pb-2 pt-2 border-green-600'>Vue</p>
                <p className='border-b-2 text-[2rem] border-purple-500 pb-2 pt-2'>Bootstrap</p>
                <p className='border-b-2 text-[2rem] border-blue-400 pb-2 pt-2'>TailwindCSS</p>



                {/* Work Experience */}

                <div className='work-row flex-col w-[95%] md:mt-[2rem] xl:mt-[3rem] xl:w-[100%] flex justify-between'>
                    <div className='work-box bg-[#2a2a2a] flex flex-col'>
                        <header className='text-white bg-[#2a2a2a] text-[3rem] font-[Coolvetica]'>Frontend developer</header>
                        <section className='text-gray-400 text-[2rem] font-[Coolvetica]'>To The End</section>
                        <time className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>Jan. 2019-May 2021</time>
                        <footer className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>Award-winning Content Marketing Agency specialises in creating and sharing engaging content.</footer>
                    </div>
                    <div className='work-box bg-[#2a2a2a] flex flex-col mt-5 mb-[7rem]'>
                        <header className='text-white bg-[#2a2a2a] text-[3rem] font-[Coolvetica]'>Fullstack developer</header>
                        <section className='text-gray-400 text-[2rem] font-[Coolvetica]'>Pixxels Digital</section>
                        <time className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>Jan. 2019-May 2021</time>
                        <footer className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>Creative brand, website design and development studio that can bring your online business dreams to life.</footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills