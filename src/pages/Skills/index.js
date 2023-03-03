import React from 'react'
import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import { Link } from 'react-router-dom'
import { technologies, linkedIn, experienceParagraph, workExperience } from '../../data'
import Education from './Education/Education'


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
                    {experienceParagraph}
                </p>
                <p>
                    Visit my <a href={linkedIn} target='_blank' className='text-[#ffd700]'>LinkedIn</a> profile for more details or just <Link className='text-[#ffd700]' to='/contact'>contact</Link> me.
                </p>
            </div>

            {/* Technologies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {technologies?.map((tech) => (
                    <div className="text-white flex pt-10 mx-auto">
                        <p className={`border-b-2 ${tech.color} pb-2 text-[2rem]`}>
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Work Experience */}



            {/* School Experience */}
            <Education />
        </div >
    )
}

export default Skills