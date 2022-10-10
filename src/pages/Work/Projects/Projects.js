import React from 'react'

const Projects = ({ name, image, description, link }) => {
    return (
        <section className='mt-5 pl-28 pr-5'>
            <h2 className='text-[#ffd700] font-[Coolvetica] text-[2rem] mb-5 flex justify-center'>
                {name}
            </h2>
            <main>
                <a href={link} target='_blank' className='hover:opacity-75'>
                    <img src={image} />
                </a>
            </main>
            <footer className='text-white mt-5 flex justify-center'>{description}</footer>
        </section>
    )
}

export default Projects