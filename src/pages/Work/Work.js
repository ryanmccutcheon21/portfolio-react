import React, { useRef, useState } from 'react'
import '../../assets/images/TechFreak.png'
import TechFreak from '../../assets/images/TechFreak.png'
import LandingPage from '../../assets/images/LandingPage.png'
import FitnessApp from '../../assets/images/FitnessApp.png'
import UA from '../../assets/images/UA.png'
import Hoobank from '../../assets/images/Hoobank.png'
import RealEstate from '../../assets/images/RealEstate.png'
import eCommerce from '../../assets/images/eCommerce.png'
// import Projects from './Projects/Projects';
import { ColorRing } from 'react-loader-spinner'


const projects = [
    {
        name: 'Hoobank',
        image: Hoobank,
        description: 'React, TailwindCSS',
        link: 'https://hoobank-ashen.vercel.app/',
        id: 'project-1'
    },
    {
        name: 'Fitness App',
        image: FitnessApp,
        description: 'React, MaterialUI, RapidAPI',
        link: 'https://fitness-app-iota.vercel.app/',
        id: 'project-2'
    },
    {
        name: 'Real Estate App',
        image: RealEstate,
        description: 'React, TailwindCSS, Next.js, Axios, Chakra-UI',
        link: 'https://realestate-tau-lac.vercel.app/',
        id: 'project-3'
    },
    {
        name: 'Under Armour Clone',
        image: UA,
        description: 'React, TailwindCSS',
        link: 'https://under-armour-clone.vercel.app/',
        id: 'project-4'
    },
    {
        name: 'TechFreak',
        image: TechFreak,
        description: 'eCommerce store made using React, Redux, and commerce.js. Payments with Stripe API.',
        link: 'https://techfreak-aa802.web.app/',
        id: 'project-5'
    },
    {
        name: 'Landing Page',
        image: LandingPage,
        description: 'HTML, CSS, Bootstrap, JavaScript',
        link: 'https://landing-page-pearl-tau.vercel.app/',
        id: 'project-6'
    },
    {
        name: 'eCommerce Store',
        image: eCommerce,
        description: 'React, Next.js, React Context API, Sanity.io, Stripe API',
        link: 'https://ecommerce-zeta-coral.vercel.app/',
        id: 'project-7'
    }
]

const Work = () => {

    const [loading, setLoading] = useState(true)
    const counter = useRef(0)
    const imageLoaded = () => {
        counter.current += 1
        if (counter.current >= projects.length) {
            setLoading(false)
        }
    }

    // const projectList = projects?.map((project) =>
    //     <Projects
    //         name={project.name}
    //         image={project.image}
    //         description={project.description}
    //         link={project.link}
    //         id={project.id}
    //         key={project.id}
    //         onLoad={imageLoaded}
    //     />
    // );


    return (
        <div>
            <div style={{ display: loading ? 'block' : 'none' }}>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
            <div style={{ display: loading ? 'none' : 'block' }} className='container overflow-scroll'>
                <div className='grid md:grid-cols-3 mx-16'>
                    {projects.map(project => (
                        <div className='mx-5'>
                            <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                                {project.name}
                            </h2>
                            <a href={project.link} target='_blank' className='hover:opacity-75'>
                                <img src={project.image} onLoad={imageLoaded} />
                            </a>
                            <p className='text-white mt-5 flex justify-center'>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work