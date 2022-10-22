import React from 'react'
import '../../assets/images/TechFreak.png'
import TechFreak from '../../assets/images/TechFreak.png'
import LandingPage from '../../assets/images/LandingPage.png'
import FitnessApp from '../../assets/images/FitnessApp.png'
import UA from '../../assets/images/UA.png'
import Hoobank from '../../assets/images/Hoobank.png'
import RealEstate from '../../assets/images/RealEstate.png'
import eCommerce from '../../assets/images/eCommerce.png'
import Projects from './Projects/Projects';


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
        id: 'project-7'
    }
]

const Work = () => {

    const projectList = projects?.map((project) =>
        <Projects
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
            id={project.id}
            key={project.id}
        />
    );


    return (
        <div className='container overflow-scroll grid md:grid-cols-3'>
            {projectList}
        </div>
    )
}

export default Work