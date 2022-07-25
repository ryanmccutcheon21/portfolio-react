import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
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
        <div className='flex-col flex justify-center pl-40 lg:flex-row'>
            <div className='flex-col'>
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
                    Visit my <a href='https://www.linkedin.com/in/ryan-mccutcheon-185b261b8/' target='_blank'>LinkedIn</a> profile for more details or just <Link to='/contact'>contact</Link> me.
                </p>
            </div>
            <div className='flex flex-col pt-10'>
                <p>React</p>
                <p>Node</p>
                <p>MongoDB</p>
                <p>Express</p>
            </div>
        </div>
    )
}

export default Skills