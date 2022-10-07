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
                    Software Developer with 2 years of hands-on experience developing with React or other JavaScript based technologies. Knowledgeable on all aspects of Facebook's design best practices and emerging UI development techniques. Skilled at connecting assets with users via creative UI frameworks and careful user experience optimization. Ability to work across the full stack of web development utilizing knowledge of Node.js, and other JavaScript based back-end technologies.
                    <br />
                    <br />
                    Visit my <a href='https://www.linkedin.com/in/ryan-mccutcheon-185b261b8/' target='_blank' className='text-[#ffd700]'>LinkedIn</a> profile for more details or just <Link className='text-[#ffd700]' to='/contact'>contact</Link> me.
                </p>
            </div>




            {/* Technologies */}

            <div className='technology-container flex flex-col pt-10'>
                <p className='border-b-2 border-blue-400 pb-2 text-[2rem]'>React</p>
                <p className='border-b-2 border-purple-700 pb-2 text-[2rem]'>Redux</p>
                <p className='border-b-2 text-[2rem] border-green-600 pb-2 pt-3'>Node</p>
                <p className='border-b-2 text-[2rem] border-yellow-400 pb-2 pt-2'>JavaScript</p>
                <p className='border-b-2 text-[2rem] border-white pb-2 pt-2'>Next.js</p>
                <p className='border-b-2 text-[2rem] border-red-800 pb-2 pt-2'>HTML</p>
                <p className='border-b-2 text-[2rem] border-blue-500 pb-2 pt-2'>CSS</p>
                <p className='border-b-2 text-[2rem] border-red-800 pb-2 pt-2'>SCSS</p>
                <p className='border-b-2 text-[2rem] border-green-600 pb-2 pt-2'>MongoDB</p>
                <p className='border-b-2 text-[2rem] border-white pb-2 pt-2'>Express</p>
                <p className='border-b-2 text-[2rem] pb-2 pt-2 border-green-600'>Vue</p>
                <p className='border-b-2 text-[2rem] border-purple-500 pb-2 pt-2'>Bootstrap</p>
                <p className='border-b-2 text-[2rem] border-blue-400 pb-2 pt-2'>TailwindCSS</p>
                <p className='border-b-2 text-[2rem] border-blue-400 pb-2 pt-2'>MaterialUI</p>
                <p className='border-b-2 text-[2rem] border-red-800 pb-2 pt-2'>Java</p>



                {/* Work Experience */}

                <div className='work-row flex-col w-[95%] md:mt-[2rem] xl:mt-[3rem] xl:w-[100%] flex justify-between'>
                    <div className='work-box bg-[#2a2a2a] flex flex-col'>
                        <header className='text-white bg-[#2a2a2a] text-[3rem] font-[Coolvetica]'>Master of Science, MS - Computer and Information Science</header>
                        <section className='text-gray-400 text-[2rem] font-[Coolvetica]'>Southern Arkansas University</section>
                        <time className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>Aug 2022 - current</time>
                        <footer className='text-gray-400 font-[Coolvetica] text-[1.7rem] pt-5'>
                            <div>
                                <p>
                                    Advanced Programming Concepts MCIS5103 - Java
                                </p>
                                <div className='mb-5'>
                                    Lectures:
                                    <ul>
                                        <li>Inheritance</li>
                                        <li>GUI Apps</li>
                                        <li>Classes and Objects</li>
                                        <li>Applets</li>
                                        <li>Information Systems</li>
                                        <li>Gathering Requirements</li>
                                        <li>Domain Analysis</li>
                                        <li>Methodology</li>
                                        <li>Patterns</li>
                                        <li>Components and Reuse</li>
                                        <li>Architecture</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Computer Science Fundamentals MCIS5023
                                </p>
                                <p>
                                    Course Goal:
                                </p>
                                <p>
                                    Graduates will gain a broad knowledge of the computer science field as measured by the Higher
                                    Learning Commission and ADHE (Arkansas Department of Higher Education) best practices of
                                    curriculum guidelines in professional or graduate programs.
                                </p>
                                <p>
                                    Course Description:
                                    This course will provide an introduction to the organization and operations of computers, computing logic, and problem solving using computers. It will also cover various applications of computers, and the basics of operating systems, computer networking, and databases.
                                </p>
                            </div>
                        </footer>
                    </div>
                    <div className='work-box bg-[#2a2a2a] flex flex-col mt-5 mb-[7rem]'>
                        <header className='text-white bg-[#2a2a2a] text-[3rem] font-[Coolvetica]'>Bachelor of Science, BS - Criminal Justice</header>
                        <section className='text-gray-400 text-[2rem] font-[Coolvetica]'>University of Arkansas - Fort Smith</section>
                        <time className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>Aug 2016 - May 2019</time>
                        {/* <footer className='text-gray-400 font-[Coolvetica] text-[1.7rem]'></footer> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Skills