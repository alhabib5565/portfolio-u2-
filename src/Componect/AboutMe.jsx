import React from 'react';
import SectionTitle from './SectionTitle';
import aboutImage from '../assets/portfolio hero image.jpg'
import { FaArrowRight } from 'react-icons/fa';
import {FiDownload} from 'react-icons/fi'
const AboutMe = () => {
    return (
        <div className='mt-10 mb-96 px-4 max-w-6xl mx-auto'>
            <SectionTitle />
            <div className='flex flex-col-reverse items-center gap-8 md:flex-row mt-14'>
                <div className='flex-1'>
                    <p className='text-justify text-gray-400 text-lg leading-8 mt-8 md:mt-0'>
                        I'm a front-end web developer with a passion for crafting immersive and responsive user
                        experiences. My goal is to join a dynamic team, learn, grow, and contribute to building user-centric web applications.I stay up-to-date with the latest web technologies through continuous learning and practice.
                    </p>
                    <div className='flex items-center gap-6 mt-8'>
                        <button className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>Contact Me <span><FaArrowRight size={20}/></span></button>

                        <a  className='text-white cursor-pointer flex items-center gap-3 uppercase font-medium bg-gradient-to-r from-cyan-400 to-sky-700 py-2 px-4 rounded-lg hover:scale-x-105 duration-300'>resume <span><FiDownload size={20}/></span></a>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center relative aboutImg'>
                    <img className='w-full md:w-3/5 rounded-lg object-cover' src={aboutImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;