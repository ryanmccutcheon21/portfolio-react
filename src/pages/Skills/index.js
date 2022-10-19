import React from 'react'
import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import { Link } from 'react-router-dom'
import { technologies, linkedIn, experienceParagraph } from '../../data'
import Education from './Education/Education'


const Skills = () => {

    const techList = technologies?.map(tech =>
        <p className={`border-b-2 ${tech.color} pb-2 text-[2rem]`}>{tech.name}</p>
    )

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
                    {experienceParagraph}
                </p>
                <p>
                    Visit my <a href={linkedIn} target='_blank' className='text-[#ffd700]'>LinkedIn</a> profile for more details or just <Link className='text-[#ffd700]' to='/contact'>contact</Link> me.
                </p>
            </div>

            {/* Technologies */}

            <div className='technology-container flex flex-col pt-10'>
                {techList}
                <Education />
            </div>
        </div >
    )
}

export default Skills