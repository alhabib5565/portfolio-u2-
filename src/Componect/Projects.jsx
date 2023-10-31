import React from 'react';
import SectionTitle from './SectionTitle';
import tripsure from '../assets/projects/tripsure.png'
import eclass from '../assets/projects/eclass.png'
import robotToy from '../assets/projects/toyrobot.png'
import collage_addmission from '../assets/projects/collage_addmision.png'
import ImageOrCardAnmtn from '../AnimationComponets/ImageOrCardAnmtn';
import ProjectButton from '../AnimationComponets/ProjectButton';
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
        // {
        //     name: "Toy Robot",
        //     categroy: 'front end',
        //     live_link: 'https://ema-john-simple-with-fir-a29b0.web.app/',
        //     clien_code: 'https://github.com/alhabib5565/toy_robot_client/',
        //     server_code: 'https://github.com/alhabib5565/toy_robot_server/',
        //     technologies: ['HTML', "Tailwind", "daisyUI", "Firebase", "React", "Express", "Mongodb"],
        //     image: robotToy
        // },
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
        <div name='projects' className='max-w-6xl mx-auto w-full p-4 mt-8 md:mt-16 lg:mt-24'>
            <SectionTitle description='My awesome works' sectionTitle='My' colorText='Porjects'></SectionTitle>

            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-6 '>
                {
                    projects.map((project, index) =>
                        <ImageOrCardAnmtn key={index} >
                            <div className="group h-full w-full max-w-lg mx-auto  p-3 sl:p-4 bg-gray-700 rounded-xl">

                                <div className=" relative overflow-hidden">
                                    <div className="h-[300px] overflow-hidden">
                                        <img className=" w-full rounded-t-xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project.image} alt="" />
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-black group-hover:from-black/70  group-hover:to-black/70 translate-y-[100%] flex items-center justify-center flex-wrap px-3 gap-2 text-center transition-all duration-500 group-hover:translate-y-0">
                                        {
                                            project.technologies.map((technology, index) => <span key={index} className="duration-700 transition-all translate-x-[-100%] group-hover:translate-x-0 rounded-full bg-gray-800 px-3.5 py-2 text- capitalize text-cyan-600 shadow shadow-black/60">{technology}</span>)
                                        }
                                    </div>
                                </div>

                                <h1 className="text-2xl my-4 font-bold text-white">{project.name}</h1>
                                <div className="flex gap-2  justify-between sm:gap-3">
                                    <ProjectButton href={project.live_link} ButtonText='Live Demo' />
                                    {
                                        project.server_code && <ProjectButton href={project.server_code} ButtonText='Server Code' />
                                    }
                                    <ProjectButton href={project.clien_code} ButtonText='Client Code' />

                                </div>
                            </div>
                        </ImageOrCardAnmtn>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;