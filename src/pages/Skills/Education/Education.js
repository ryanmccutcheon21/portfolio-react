import React from 'react'
import { schoolExperience } from '../../../data'

const Education = () => {
    return (
        <section className='work-row flex-col w-[95%] md:mt-[2rem] xl:mt-[3rem] xl:w-[100%] flex justify-between'>
            <div className='work-box bg-[#2a2a2a] flex flex-col'>
                <header className='text-white bg-[#2a2a2a] text-[3rem] font-[Coolvetica]'>{schoolExperience.SAU.degree}</header>
                <div className='text-gray-400 text-[2rem] font-[Coolvetica]'>{schoolExperience.SAU.school}</div>
                <time className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>{schoolExperience.SAU.dateAttended}</time>
                <footer className='text-gray-400 font-[Coolvetica] text-[1.7rem] pt-5'>
                    <div>
                        <p>
                            Advanced Programming Concepts MCIS5103 - Java
                        </p>
                        <div className='mb-5'>
                            Lectures:
                            <ul>
                                {schoolExperience.SAU.lectures.map(lecture =>
                                    <li>{lecture}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>
                            Computer Science Fundamentals MCIS5023
                        </p>
                        <p>
                            Course Goal:
                        </p>
                        <p>
                            {schoolExperience.SAU.courseGoal}
                        </p>
                        <p>
                            Course Description:
                        </p>
                        <p>
                            {schoolExperience.SAU.courseDescription}
                        </p>
                    </div>
                </footer>
            </div>
            <div className='work-box bg-[#2a2a2a] flex flex-col mt-5 mb-[7rem]'>
                <header className='text-white bg-[#2a2a2a] text-[3rem] font-[Coolvetica]'>{schoolExperience.UAFS.degree}</header>
                <section className='text-gray-400 text-[2rem] font-[Coolvetica]'>{schoolExperience.UAFS.school}</section>
                <time className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>{schoolExperience.UAFS.dateAttended}</time>
            </div>
        </section>
    )
}

export default Education