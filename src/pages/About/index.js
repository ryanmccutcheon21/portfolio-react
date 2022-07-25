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

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const myTags = [
        'JavaScript', 'CSS', 'HTML', 'React', 'Node.js', 'git', 'jQuery', 'Vue', 'MongoDB'
    ]
    // let tagCloud =
    //     TagCloud('.content', myTags, {
    //         radius: 300,
    //         maxSpeed: 'fast',
    //         initSpeed: 'fast',
    //         directions: 135,
    //         keep: true,
    //     })

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['M', 'e', ' ', 'm', 'y', 's', 'e', 'l', 'f', ' ', '&', ' ', 'I']}
                        index={15}
                    />
                </h1>
                <p className='about-p'>I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
                    <br />
                    <br />
                    {/* <p className='about-p'>I'm a confident, outside the box thinker. Sports fan, mostly baseball and football. A family man and father to an awesome little boy.</p> */}
                    Interested in the entire front-end spectrum and working on ambitious projects with positive people.</p>
                <Link to='/contact' className='last-about-p'>Let's make something special.</Link>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faBootstrap} color="#6f42c1" />
                        /                        </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faVuejs} color="#33a06f" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default About