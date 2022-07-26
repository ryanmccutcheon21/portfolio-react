import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import React, { useState } from 'react'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['y', 'a', 'n', ',']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return (
        <div className="container home-page overflow-scroll">
            <div className="text-zone">
                <h1 className='md:text-[5rem]'>
                    <span className={`${letterClass}_11 text-animate-hover`}>H</span>
                    <span className={`${letterClass}_12 text-animate-hover`}>i</span>
                    <span className={`${letterClass}_12 text-animate-hover`}>,</span>
                    <br />
                    <span className={`${letterClass}_13 text-animate-hover`}>I</span>
                    <span className={`${letterClass}_14 text-animate-hover`}>'</span>
                    <span className={`${letterClass}_14 text-animate-hover`}>m</span>
                    <span className={`letter-logo-r text-animate-hover`}> R</span>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        index={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        index={22}
                    />
                </h1>
                <h2 className='pt-[2rem]'>MongoDB | Express | React | Node</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home