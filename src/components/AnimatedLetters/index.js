import React from 'react'
import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, index }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass}_${i + index} text-animate-hover`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters