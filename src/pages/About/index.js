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

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])


    // const myTags = [
    //     'JavaScript', 'CSS', 'HTML', 'React', 'Node.js', 'git', 'jQuery', 'Vue', 'MongoDB'
    // ]
    // let tagCloud =
    //     TagCloud('.content', myTags, {
    //         radius: 300,
    //         maxSpeed: 'fast',
    //         initSpeed: 'fast',
    //         directions: 135,
    //         keep: true,
    //     })

    return (
        <>
            <div className='container about-page overflow-scroll'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['M', 'e', ',', ' ', 'm', 'y', 's', 'e', 'l', 'f', ' ', '&', ' ', 'I']}
                            index={15}
                        />
                    </h1>
                    <p className='about-p'>I am a very ambitious Software Engineering student currently pursuing my Master of Science, MS - Computer and Information Science at Southern Arkansas University.
                        <br />
                        <br />
                        I am really passionate about web development. Therefore, I am looking for entry-level roles, or internships, at an established IT company having the opportunity to work with the latest technologies on challenging and diverse projects.</p>
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
            <Loader type='pacman' />
        </>
    )
}

export default About