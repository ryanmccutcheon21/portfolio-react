import React from 'react'
import { schoolExperience, workExperience } from '../../../data'

const Education = () => {
    return (
        <section className='work-row flex-col w-[95%] md:mt-[2rem] xl:mt-[3rem] xl:w-[100%] justify-between mx-auto'>

            {/* Work Experience */}
            <div className='work-box bg-[#2a2a2a] flex flex-col mt-5 mb-[7rem]'>
                <p className='text-white bg-[#2a2a2a] text-[3rem] font-[Coolvetica]'>{workExperience.ArroyoSecoSaints.company}</p>
                <p className='text-gray-400 text-[2rem] font-[Coolvetica]'>{workExperience.ArroyoSecoSaints.title}</p>
                <time className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>{workExperience.ArroyoSecoSaints.date}</time>
                <ul className='text-gray-400 font-[Coolvetica] text-[1.7rem] list-disc'>
                    {workExperience.ArroyoSecoSaints.responsibilities.map(responsibility => (
                        <li className='ml-8'>{responsibility}</li>
                    ))}
                </ul>
                <ul className='text-gray-400 font-[Coolvetica] text-[1.7rem] flex flex-wrap'>
                    {workExperience.ArroyoSecoSaints.technologies.map((tech, index) => (
                        <li className='mx-1'>
                            {tech}
                            {index !== workExperience.ArroyoSecoSaints.technologies.length - 1 && ', '}
                        </li>
                    ))}
                </ul>

            </div>

            {/* School Experience */}
            <div className='work-box bg-[#2a2a2a] flex flex-col'>
                <header className='text-white bg-[#2a2a2a] text-[3rem] font-[Coolvetica]'>{schoolExperience.SAU.degree}</header>
                <div className='text-gray-400 text-[2rem] font-[Coolvetica]'>{schoolExperience.SAU.school}</div>
                <time className='text-gray-400 font-[Coolvetica] text-[1.7rem]'>{schoolExperience.SAU.dateAttended}</time>
                <section className='text-gray-400 font-[Coolvetica] text-[1.7rem] pt-5'>
                    <div>
                        <p className='text-white'>
                            Web Programming: Client Side MCIS 5113                        </p>
                        <div className='mb-5'>
                            <p className='text-white'>Lectures:</p>
                            <ul>
                                {schoolExperience.SAU.clientSideLectures.map(lecture =>
                                    <li>{lecture}</li>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <p className='text-white'>
                            Web Programming: Server Side MCIS 5413                       </p>
                        <div className='mb-5'>
                            <p className='text-white'> Lectures:</p>
                            <ul>
                                {schoolExperience.SAU.serverSideLectures.map(lecture =>
                                    <li>{lecture}</li>
                                )}
                            </ul>
                        </div>
                    </div>


                    <div>
                        <p className='text-white'>
                            Database Management Systems MCIS 5133                      </p>
                        <div className='mb-5'>
                            <p className='text-white'> Lectures:</p>
                            <ul>
                                {schoolExperience.SAU.dbmsLectures.map(lecture =>
                                    <li>{lecture}</li>
                                )}
                            </ul>
                        </div>
                    </div>


                    <div>
                        <p className='text-white'>
                            Advanced Programming Concepts MCIS5103 - Java
                        </p>
                        <div className='mb-5'>
                            <p className='text-white'>Lectures:</p>
                            <ul>
                                {schoolExperience.SAU.lectures.map(lecture =>
                                    <li>{lecture}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className='text-white'>
                            Computer Science Fundamentals MCIS5023
                        </p>
                        <p className='text-white'>
                            Course Goal:
                        </p>
                        <p>
                            {schoolExperience.SAU.courseGoal}
                        </p>
                        <p className='text-white'>
                            Course Description:
                        </p>
                        <p>
                            {schoolExperience.SAU.courseDescription}
                        </p>
                    </div>
                </section>
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