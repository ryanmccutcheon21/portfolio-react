import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import './Work.scss'
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

const Work = () => {
    return (
        <div className="flex align-middle">
            <Carousel />
        </div>
    )
}

export default Work