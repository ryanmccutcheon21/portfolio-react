import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import React, { useState } from 'react'

const TextAnimation = ({ letterClass, index, strArray }) => {
    return strArray.map((letter, i) => {
        const spanClass = `${letterClass}_${index + i} text-animate-hover`
        return (
            <span key={i} className={spanClass}>
                {letter}
            </span>
        )
    })
}

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['y', 'a', 'n', ',']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return (
        <div className="container home-page overflow-scroll">
            <div className="text-zone">
                <h1 className="md:text-[5rem]">
                    <TextAnimation letterClass={letterClass} index={11} strArray={['H', 'i', ',']} />
                    <br />
                    <TextAnimation letterClass={letterClass} index={13} strArray={['I', "'", 'm']} />
                    <span className="letter-logo-r text-animate-hover">R</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
                </h1>
                <h2 className="pt-[2rem]">MongoDB | Express | React | Node</h2>
                <Link
                    to="/contact"
                    className="text-[#ffd700] text-[1.5rem] font-normal tracking-[.5rem] font-sans py-4 px-20 border border-[#ffd700] mt-20 animate-fadeInAnimation hover:bg-[#ffd700] hover:text-gray-700"
                >
                    CONTACT ME
                </Link>
            </div>
        </div>
    )
}

export default Home
