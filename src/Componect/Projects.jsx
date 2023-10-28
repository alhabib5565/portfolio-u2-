import React from 'react';
import SectionTitle from './SectionTitle';
import im from '../assets/portfolio hero image.jpg'
import tripsure from '../assets/projects/tripsure.png'
import eclass from '../assets/projects/eclass.png'
import robotToy from '../assets/projects/toyrobot.png'
import collage_addmission from '../assets/projects/collage_addmision.png'
const Projects = () => {

    const projects = [
        {
            name: "Tripsure (team project)",
            categroy: 'Team project',
            live_link: 'https://tripsure-client.web.app/',
            clien_code: 'https://github.com/Sayemsaadat0/tripsure-client',
            server_code: 'https://github.com/Sayemsaadat0/tripsure-server',
            technologies: ['HTML', "Tailwind", "Ant Design", "Firebase", "React", "Express", "Mongodb", "Redux"],
            image: tripsure
        },
        {
            name: "E_Class",
            categroy: 'full stack project',
            live_link: 'https://edu-clas.web.app/',
            clien_code: 'https://github.com/alhabib5565/summer_camp_client',
            server_code: 'https://github.com/alhabib5565/summer_camp_server',
            technologies: ['HTML', "Tailwind", "daisyUI", "Firebase", "React", "Express", "Mongodb", 'JWT', "TanStack Query"],
            image: eclass
        },
        {
            name: "Toy Robot",
            categroy: 'front end',
            live_link: 'https://ema-john-simple-with-fir-a29b0.web.app/',
            clien_code: 'https://github.com/alhabib5565/toy_robot_client/',
            server_code: 'https://github.com/alhabib5565/toy_robot_server/',
            technologies: ['HTML', "Tailwind", "daisyUI", "Firebase", "React", "Express", "Mongodb"],
            image: robotToy
        },
        {
            name: "Collage Admission",
            categroy: 'front end',
            live_link: 'https://collage-app-40b89.web.app/',
            clien_code: 'https://github.com/alhabib5565/collage-app',
            server_code: 'https://github.com/alhabib5565/collage-app-server',
            technologies: ['HTML', "Tailwind", "daisyUI", "Firebase", "React", "Express", "Mongodb"],
            image: collage_addmission
        },
    ]

    return (
        <div className='max-w-6xl mx-auto w-full p-4 mt-8 md:mt-16 lg:mt-24'>
            <SectionTitle description='My awesome works' sectionTitle='My' colorText='Porjects'></SectionTitle>

            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-6 '>
                {
                    projects.map((project, index) => <div key={index} className="h-full w-full max-w-lg mx-auto  p-3 sl:p-4 bg-gray-700 rounded-xl">
                        <div className='h-[300px] overflow-hidden'>
                            <img src={project.image} alt="" className="rounded-lg w-full" />
                        </div>
                        <h3 className="text-xl my-4">{project.name}</h3>
                        <div className="flex gap-2 sm:gap-3">
                            <a
                                href={project.clien_code}
                                target="_blank"
                                className="bg-gray-800 hover:bg-gray-600 text-cyan-600 text-sm font-semibold duration-200 py-1 px-2 border-b-4 border-gray-500 hover:text-cyan-500  rounded"
                            >
                                Client Code
                            </a>
                            {
                                project.server_code && <a
                                    href={project.server_code}
                                    target="_blank"
                                    className="bg-gray-800 hover:bg-gray-600 text-cyan-600 text-sm font-semibold duration-200 py-1 px-2 border-b-4 border-gray-500 hover:text-cyan-500 rounded"
                                >
                                    Server Code
                                </a>
                            }
                            <a
                                href={project.live_link}
                                target="_blank"
                                className="bg-gray-800 hover:bg-gray-600 text-cyan-600 text-sm font-semibold duration-200 py-1 px-2 border-b-4 border-gray-500 hover:text-cyan-500 rounded"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;